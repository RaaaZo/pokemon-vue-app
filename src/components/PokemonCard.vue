<template>
  <div :class="$style[`card-wrapper`]">
    <img :src="props.pokemon.img" alt="" :class="$style[`card-image`]" />
    <section :class="$style[`card-inner-wrapper`]">
      <h2 class="text-xxl">{{ props.pokemon.name }}</h2>
      <p class="text--lg">#{{ props.pokemon.id }}</p>
      <ul :class="$style[`card-types-wrapper`]">
        <li v-for="(type, index) in props.pokemon.types" :key="index" class="text--lg">
          {{ type }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { TPokemon } from '@/types'

const props = defineProps<{
  pokemon: TPokemon
}>()
</script>

<style module>
.card-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  background-color: var(--white);
  padding: 0.8rem 1.6rem;
  box-shadow: var(--card-box-shadow);
}

.card-image {
  width: 100%;
  max-width: 30rem;
  height: auto;
  object-fit: contain;
  object-position: center;
}

.card-inner-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.card-types-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1.6rem;

  & > li {
    list-style: none;
    font-weight: var(--font-weight-bold);
    text-transform: capitalize;
  }
}
</style>
