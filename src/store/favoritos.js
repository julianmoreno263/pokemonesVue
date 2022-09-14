import { defineStore } from "pinia"
import { ref } from "vue"

//trabajando con composition API
export const useFavoritosStore = defineStore("favoritos", () => {

    //referencias reactivas
    const favoritos = ref([])//aqui la tienda siempre se va inicializando en cero

    //aqui evaluamos si hay algo en el localstorage(osea no esta en cero) y nos trae esa informacion en el localstorage del navegador,esto es para tener persistencia de datos, si recargamos el navegador los datos siguen en el localStorage.El "favoritos" es la key que pide el localStorage.Se debe parsear de javascript a string,porque el localStorage solo almacena strings, por eso se usa JSON.stringify, y para volver a traer un string como json se usa JSON.parse.
    if (localStorage.getItem("favoritos")) {
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"))
    }

    //metodos
    const add = (poke) => {
        favoritos.value.push(poke)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value))
    }

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value))

    }

    //este metodo es para buscar un pokemon en el array de pokemones,y este metodo se lo pasamos a la vista de PokeView.vue, alli en el boton de "agregar" usamos el disabled para validar con esta funcion si este pokemon existe pues que el boton se deshabilite para no agregar pokemones repetidos. 
    const findPoke = name => favoritos.value.find(item => item.name === name)

    return {
        favoritos,
        add,
        remove,
        findPoke
    }
})