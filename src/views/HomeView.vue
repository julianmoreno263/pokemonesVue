<script setup>
import { useCounterStore } from "@/store/counter.js";
import { storeToRefs } from "pinia";

const useCounter = useCounterStore();

//destructuracion de metodos
const { increment } = useCounter
//para destructuracion de referencias dinamicas o propiedades conmutadas usamos el metodo storeToRefs()  que viene directamente de la biblioteca de pinia
const { double, count } = storeToRefs(useCounter)
</script>
  
<template>
  <h1>Home Counter: {{count }}</h1>
  <h2>Double: {{ double }}</h2>
  <button @click="increment">Increment</button>
</template>
