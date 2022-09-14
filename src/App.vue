<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">

      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        PokeAPI
      </RouterLink>
      <div>
        <RouterLink active-class="active" class="btn btn-outline-primary mr-2" to="/">Home</RouterLink>
        <RouterLink active-class="active" class="btn btn-outline-primary mr-2 " to="/pokemons">Pokemons</RouterLink>
        <RouterLink active-class="active" class="btn btn-outline-primary " to="/favoritos">Favoritos</RouterLink>


      </div>
    </div>
  </nav>

  <div class="container text-center">
    <RouterView />

  </div>
</template>


