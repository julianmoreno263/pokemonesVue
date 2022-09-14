
<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "../composables/getData.js"
import { useFavoritosStore } from "../store/favoritos"

const route = useRoute()
const router = useRouter()
const useFavoritos = useFavoritosStore()

const { add, findPoke } = useFavoritos

const { data, getData, loading, error } = useGetData()

// const poke = ref({})

const back = () => {
    router.push("/pokemons")
}

// const getData = async () => {
//     try {
//         const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
//         console.log(data)
//         poke.value = data
//     } catch (error) {
//         console.log(error)
//         poke.value = null
//     }
// }

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)



</script>


<template>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{error}}</div>


    <div v-if="data">
        <img :src="data.sprites?.front_default" alt="img pokemon">
        <h1>Poke name: {{$route.params.name}} </h1>
        <p class="font-weight-bold">weight: {{data.weight}}</p>
        <button :disabled="findPoke(data.name)" @click="add(data)" class="btn btn-primary mb-2">Agregar
            Favoritos</button>
    </div>

    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>