<template>
  <section :class="$style['heading-wrapper']">
    <h1 class="text--xxl">Pokedex</h1>

    <form @submit.prevent="onSubmitHandler" :class="$style[`form-wrapper`]">
      <label for="searchPokemon" :class="$style[`form-label`]" class="text--lg"
        >Search for pokemon</label
      >
      <input
        type="text"
        id="searchPokemon"
        v-model="pokemonName"
        placeholder="Type Pokemon name or id"
        :class="$style[`form-input`]"
      />
    </form>
  </section>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
import { POKEMON_DETAIL_PAGE_ROUTE } from '@/router/constants'

const pokemonName = ref('')

const onSubmitHandler = () => {
  const transformedPokemonName = pokemonName.value.toLowerCase().trim()
  const transformedUrl = POKEMON_DETAIL_PAGE_ROUTE.replace(':id', transformedPokemonName)
  router.push(transformedUrl)
}
</script>

<style module>
.heading-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-top: 2.4rem;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 0.8rem;
}

.form-input {
  padding: 1.2rem 1.6rem;
  border-radius: 1.2rem;
  border: 1px solid var(--gray-dark);
  outline: none;
  font-size: 1.6rem;
  font-family: inherit;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: var(--primary);
  }
}
</style>
