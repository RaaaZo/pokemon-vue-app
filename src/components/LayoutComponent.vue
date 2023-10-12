<template>
  <nav :class="$style.nav">
    <div :class="$style[`logo-wrapper`]">
      <RouterLink :to="HOME_PAGE_ROUTE">
        <LogoComponent />
      </RouterLink>
    </div>

    <ul :class="$style[`navigation-list`]">
      <li
        :class="$style[`list-item`]"
        class="text--xxl"
        v-for="linkItem in linksList"
        :key="linkItem.name"
      >
        <RouterLink :to="linkItem.route">{{ linkItem.name }}</RouterLink>
      </li>
    </ul>
  </nav>

  <main :class="$style[`page-wrapper`]">
    <RouterView />
  </main>

  <footer :class="$style.footer">
    <p class="text--sm">Made with 🖤 by <a href="https://github.com/RaaaZo">RaaaZo</a></p>
  </footer>
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

.page-wrapper {
  padding-inline: 3.2rem;
  /* 100vh - height of navbar and footer */
  min-height: calc(100vh - 12.8rem);
}

.footer {
  height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  background-color: var(--accent);
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;

  & * a {
    color: var(--black);
    text-decoration: none;
    font-weight: var(--font-weight-bold);
  }
}
</style>
