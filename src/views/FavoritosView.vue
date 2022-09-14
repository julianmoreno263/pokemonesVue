<script setup>
import { storeToRefs } from 'pinia';
import { useFavoritosStore } from '../store/favoritos';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore()

const { favoritos } = storeToRefs(useFavoritos)
const { remove } = useFavoritos


</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length==0">Sin Favoritos</p>
    <ul v-else class="list-group">
        <li v-for="poke in favoritos" :key="poke.id" class="list-group-item">

            <div>
                {{poke.name}}
            </div>
            <div>
                <router-link class="btn btn-primary mr-2" :to="`/pokemons/${poke.name}`">Más información </router-link>
                <button @click="remove(poke.id)" class="btn btn-danger">Eliminar </button>
            </div>
        </li>
    </ul>

</template>