<template>
  <nav :class="$style.nav">
    <div :class="$style[`logo-wrapper`]">
      <RouterLink :to="HOME_PAGE_ROUTE">
        <LogoComponent />
      </RouterLink>
    </div>

    <ul :class="$style[`navigation-list`]">
      <li
        v-for="linkItem in linksList"
        :key="linkItem.name"
        :class="$style[`list-item`]"
        class="text--xxl"
      >
        <RouterLink :to="linkItem.route">{{ linkItem.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import LogoComponent from '@/components/svg/LogoComponent.vue'
import { RouterLink } from 'vue-router'
import { HOME_PAGE_ROUTE, POKEDEX_PAGE_ROUTE } from '@/router/constants'

const linksList = [
  {
    name: 'Home',
    route: HOME_PAGE_ROUTE
  },
  {
    name: 'Pokedex',
    route: POKEDEX_PAGE_ROUTE
  }
]
</script>

<style module>
.nav {
  height: 9rem;
  display: flex;
  align-items: center;
  padding-inline: 3.2rem;
  background-color: var(--accent);
  border-bottom-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;
}

.logo-wrapper {
  width: 6.4rem;
  height: 6.4rem;
  margin-right: 3.2rem;
}

.navigation-list {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3.2rem;
}

.list-item {
  cursor: pointer;

  & > a {
    color: var(--black);
    text-decoration: none;
    padding: 0.8rem 1.6rem;
  }
}
</style>
