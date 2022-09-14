import { defineStore } from "pinia";
import { computed, ref } from "vue";


//pinia con composition API(version actual)
export const useCounterStore = defineStore("counter", () => {
    //datos reactivos
    const count = ref(0)
    //metodos
    const increment = () => count.value++
    //propiedad computada
    const double = computed(() => count.value * 2)


    return {
        count,
        increment,
        double
    }
})



//pinia con option API
// export const useCounterStore = defineStore("counter", {
//     //aqui van los datos reactivo
//     state: () => ({
//         count: 0
//     }),
//     //aqui van los metodos
//     actions: {
//         increment() {
//             this.count++
//         }
//     },
//     //aqui van las propiedades computadas(calculos)
//     getters: {
//         double: (state) => state.count * 2
//     }
// })