import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //linkActiveClass: "active", asi configuramos clases css activas de forma global, aqui en el index de router
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')

    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    //ruta dinamica para cada pokemon
    {
      path: '/pokemons/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    //ruta de la pagina 404
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ]
})

export default router
