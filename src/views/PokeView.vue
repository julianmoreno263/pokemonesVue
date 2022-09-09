
<script setup>
import axios from "axios"
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const poke = ref({})

const back = () => {
    router.push("/pokemons")
}

const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        console.log(data)
        poke.value = data
    } catch (error) {
        console.log(error)
        poke.value = null
    }
}

getData()



</script>


<template>
    <div v-if="poke">
        <img :src="poke.sprites?.front_default" alt="img pokemon">
        <h1>Poke name: {{$route.params.name}} </h1>
        <p class="font-weight-bold">weight: {{poke.weight}}</p>
    </div>
    <h1 v-else>No existe el pokemon</h1>

    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>