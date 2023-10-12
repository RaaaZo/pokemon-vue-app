<template>
  <section class="section-wrapper">
    <ul class="list-wrapper">
      <li v-for="pokemon in pokemonsList" :key="pokemon.id">
        <PokemonCard :pokemon="pokemon" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import type { TPokemon } from '@/types'

// const { pokemons } = defineProps<{
//   pokemons: TPokemon[]
// }>()

const pokemonsList: TPokemon[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Pokemon ${index + 1}`,
  types: ['normal']
}))
</script>

<style scoped>
.list-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.6rem;
  justify-content: space-between;

  & > li {
    list-style: none;
  }
}

.section-wrapper {
  padding-block: 1.6rem;
}
</style>
