<template>
  <section v-if="!!pokemon" :class="$style.wrapper">
    <h1 class="text--xxl" :class="$style[`section-header`]">{{ pokemon?.name }}</h1>
    <section :class="$style[`left-section-wrapper`]">
      <img
        :src="pokemon.sprites.other['official-artwork'].front_default"
        :alt="pokemon.name"
        :class="$style[`left-section-image`]"
      />
    </section>

    <section :class="$style[`right-section-wrapper`]">
      <div>
        <h2 class="text--xl">Types</h2>
        <ul :class="$style[`types-list-wrapper`]">
          <li
            :class="$style[`types-list-item`]"
            class="text--md"
            v-for="type in pokemonTypes"
            :key="type"
          >
            {{ type }}
          </li>
        </ul>
      </div>

      <h2 class="text--xl">Stats</h2>
      <div :class="$style[`stats-list-wrapper`]">
        <ul>
          <li
            v-for="stat in pokemonStats"
            :key="stat.name"
            :class="$style[`stats-list-item`]"
            class="text--lg"
          >
            {{ stat.name }}: <span>{{ stat.value }}</span>
          </li>
        </ul>
      </div>
    </section>
  </section>

  <PokemonDetailsSkeletonComponent v-else />
</template>

<script setup lang="ts">
import PokemonDetailsSkeletonComponent from '@/components/PokemonDetailsSkeletonComponent.vue'
import { useFetch } from '@/composables/fetchData'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pokemonIdOrName = route.params.id

type TPokemonResponse = {
  name: string
  id: number
  height: number
  weight: number
  sprites: { other: { 'official-artwork': { front_default: string } } }

  types: {
    type: {
      name: string
    }
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
}

const getSinglePokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`
const { data } = useFetch<TPokemonResponse>(getSinglePokemonUrl)

const pokemon = computed(() => data.value)

const pokemonTypes = computed(() => pokemon.value?.types.map(({ type: { name } }) => name))
const pokemonStats = computed(
  () =>
    pokemon.value?.stats.map(({ base_stat, stat: { name } }) => ({
      name: name.replaceAll('-', ' '),
      value: base_stat
    }))
)
</script>

<style module>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-block: 2.4rem;

  & * li {
    list-style: none;
  }
}

.section-header {
  width: 100%;
  text-transform: capitalize;
  text-align: center;
  grid-column: 1/3;
}

.left-section-wrapper {
  justify-self: center;
}

.left-section-image {
  width: 100%;
  max-width: 47.5rem;
  height: auto;
}

.types-list-wrapper {
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  margin-block: 1.6rem;
}

.types-list-item {
  padding: 0.8rem 1.6rem;
  border-radius: 1.6rem;
  background-color: var(--primary);
  color: var(--white);
  width: max-content;
  text-transform: capitalize;
  font-weight: var(--font-weight-bold);
}

.stats-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-block: 1.6rem;
}

.stats-list-item {
  display: flex;
  width: 100%;
  text-transform: capitalize;

  & span {
    font-weight: var(--font-weight-bold);
    margin-inline-start: 0.8rem;
  }
}
</style>
