
<script setup>
//tener en cuenta el setup y al llamara una const dinamica toca ponerle el .value. Aqui trabajamos con axios que es otra alternativa a fetch y mas facil para consumir la API.

//Ahora, si queremos que al pinchar en un nombre de un pokemon nos salga la info de ese pokemon y en la url nos lleve al nombre de ese poke, debemos trabajr con rutas dinamicas,para eso utilizamos el RouterLink el cual debemos importar de vue-router, y para que cada nombre de pokemon quede como un enlace tomamos este RouterLink y envolvemos el {{poke.name}} en el, no olvidar poner el to="", pero para que cada nombre de poke sea dinamico en la url se lo pasamos asi:  <RouterLink :to="`/pokemons/${pokemon.name}`">{{pokemon.name}}</RouterLink>, asi la url captura el nombre del poke que se pincho.Hasta aqui ya la url pone el nombre del poke que se pincho, pero aun no muestra la informacion del pokemon porque falta configurar la ruta dinamica. Para capturara la informacion de cada poke debemos crear otro componente propio para cada pokemon, despues de crearlo, en el index de router creamos una nueva ruta para esta vista pero tendra un parametro que sera el name de cada poke.Ahora, si pinchamos en un pokemon ya nos pone el nombre en la url y muestra este nuevo componente sin errores. Por ultimo para acceder a los datos del pokemon especifico, en el componente para cada pokemon podemos acceder a estas propiedades de forma dinamica utilizando el {{$route}} asi:<h1>Poke name: {{$route.params.name}} </h1>.Con el simbolo $route estamos accediendo al objeto global del route, los params los activamos cuando en la ruta pusimos el parametro /:name y estamos asi accediendo al name especifico de cada objeto pokemon.Asi si pinchamos en un pokemon,ya nos sale el componente de cada pokemon con sus datos y en la url tambien se ve reflejada la ruta a ese poke especifico, esto es una ruta dinamica. 

/*ahora, para traernos la informacion de cada poke que queramos ver, debemos utilizar en el componente para el poke especifico axios, para poder acceder a la api, la api nos da la opcion de ver la info de cada poke,hay una url para esto, por eso utilizamos axios como lo hicimos anteriormente.Para poder colocar dinamicamente en esta url de cada poke el nombre del pokemon que necesitemos(de forma dinamica) utilizamos un hook (como en react, tambien llamado composable), este se llama "useRoute", lo importamos en el script desde vue-router, utilizamos este "useoute" porque es el que tiene acceso a los parametros,hay otro que es "useRouter" con r,pero ese lo vemos despues. Para inicializarlo hacemos:  

                            import { useRoute } from "vue-router";

                            onst route = useRoute()

ahora ya podemos acceder desde el script del componente al parametro de params.name que esta en el template, no podemos solo hacer $route.params.name porque el setup no entiende eso,toca utilizar este hook para que el setup pueda ver estos parametros y usarlos en el script del componente.Ahora ya en la url podemos pasarle el route.params.name y asi queda dinamico ese parametro.

El hook de useRouter nos sirve para empujar al usuario a una ruta especifica (como un RouterLink) pero ya dentro del script.Este hook tiene el metodo push() donde le pasamos la ruta hacia donde queremos que lo empuje.Si por ejemplo creamos un boton en nuestro template del componente y le pasamos una funcion que use este router,al dar click nos llevara a la ruta que le especificamos. Ahora, para pintar los datos del pokemon,la imagen,etc, hacemos lo que ya sabemos, creamos una const que sera ref(), importamos este paquete ref de vue, para hacer dinamico la traida de estos datos, en el try de la funcion donde capturamos con axios la url utilizamos esta ref con el .value y almacenamos alli la data, ya con esta data almacenada de la API, podemos ir al template y pintamos la imagen del poke,la cual se encuentra en "sprites.front-default"(si recorremos el objeto que tiene los datos veremos que la img se encuentra alli y es una url que nos lleva a la img del poke)

NOTA: Salia un error que decia que no podia pintar una propiedad undefined "frontend_default", esto es porque esta intentando pintar esta imagen pero aun no la a traido axios, porque como es una promesa se demora un poquito y mientras tanto en el template se intenta pintarla,para solucionar esto se usa el operador "?" el cual es el "optional chaining", este operador lo que hace es intentar pintar esta propiedad aunque este adelanatda con respecto a la promesa,si no la encuentra pues no la pinta, asi se va el error:

             <img :src="poke.sprites?.front_default" alt="img pokemon">


NOTA FINAL: como esta es una SPA(vue es para crear SPA, osea la pagina se renderiza todo en el index.html), y por lo tanto hay varias rutas, hay que indicarle al servidor donde vamos a desplegar la app que esta es una SPA. Para esto creamos un archivo de configuracion que llamaremos "_redirects", lo creamos en la carpeta public.En este archivo le pegamos esta linea que indica al servidor que todas las rutas van al index.html:

                        /* /index.html 200

esto debe hacerse para que funcione el vue-router.


 */
import axios from "axios"
import { ref } from "vue"
import { RouterLink } from "vue-router";

const pokemons = ref([])

const getData = async () => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon")
        pokemons.value = data.results
    } catch (error) {
        console.log(error)
    }
}

getData()


</script>



<template>
    <div class="container">
        <h1>Pokemons</h1>
        <ul>
            <li v-for="pokemon in pokemons">
                <RouterLink :to="`/pokemons/${pokemon.name}`">{{pokemon.name}}</RouterLink>
            </li>
        </ul>
    </div>

</template>