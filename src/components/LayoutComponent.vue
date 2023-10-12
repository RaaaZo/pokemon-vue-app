<template>
  <nav class="nav">
    <div class="logo-wrapper">
      <RouterLink :to="HOME_PAGE_ROUTE">
        <LogoComponent />
      </RouterLink>
    </div>

    <ul class="navigation-list">
      <li class="list-item" v-for="linkItem in linksList" :key="linkItem.name">
        <RouterLink :to="linkItem.route">{{ linkItem.name }}</RouterLink>
      </li>
    </ul>
  </nav>
  <main class="page-wrapper">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { HOME_PAGE_ROUTE, POKEDEX_PAGE_ROUTE } from '@/router/constants'
import { RouterView, RouterLink } from 'vue-router'
import LogoComponent from '@/components/svg/LogoComponent.vue'

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

<style scoped>
.nav {
  height: 6.4rem;
  display: flex;
  align-items: center;
  padding-inline: 3.2rem;
  padding-block: 1.6rem;
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

.list-item > a {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: var(--black);
  text-decoration: none;
  cursor: pointer;
}

.page-wrapper {
  padding: 3.2rem;
  min-height: calc(100vh - 6.4rem);
}
</style>
