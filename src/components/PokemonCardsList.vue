<template>
  <section :class="$style[`section-wrapper`]">
    <ul v-if="!loading" :class="$style[`list-wrapper`]">
      <li v-for="pokemon in pokemonList" :key="pokemon.id">
        <PokemonCard :pokemon="pokemon" />
      </li>
    </ul>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading</p>

    <PaginationComponentVue
      :is-next-button-disabled="!nextPage"
      :is-prev-button-disabled="!previousPage"
      @on-next-button-click-handler="() => onUrlChange(nextPage)"
      @on-prev-button-click-handler="() => onUrlChange(previousPage)"
    />
  </section>
</template>

<script setup lang="ts">
import PaginationComponentVue from '@/components/PaginationComponent.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import { useFetchPokemonsList } from '@/composables/fetchPokemonsList'
import { ref } from 'vue'

const url = ref(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)

const { pokemonList, error, loading, nextPage, previousPage } = useFetchPokemonsList(url)

const onUrlChange = (newUrl: string | null) => {
  if (!newUrl) return

  url.value = newUrl
}
</script>

<style module>
.list-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2.4rem;
  justify-content: space-between;

  & > li {
    list-style: none;
  }
}

.section-wrapper {
  padding-block: 3.2rem;
}
</style>
