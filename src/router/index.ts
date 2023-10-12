import { HOME_PAGE_ROUTE, POKEDEX_PAGE_ROUTE, POKEMON_DETAIL_PAGE_ROUTE } from '@/router/constants'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PokedexPage from '@/pages/PokedexPage.vue'
import PokemonDetailsPage from '@/pages/PokemonDetailsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_PAGE_ROUTE,
      component: HomePage
    },
    {
      path: POKEDEX_PAGE_ROUTE,
      component: PokedexPage
    },
    {
      path: POKEMON_DETAIL_PAGE_ROUTE,
      component: PokemonDetailsPage
    }
  ]
})

export default router
