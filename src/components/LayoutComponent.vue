<template>
  <DesktopNavigation />

  <main :class="$style[`page-wrapper`]">
    <RouterView />
  </main>

  <FooterComponent />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import DesktopNavigation from '@/components/DesktopNavigation.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<style module>
.page-wrapper {
  padding-inline: 3.2rem;
  /* 100vh - height of navbar and footer */
  min-height: calc(100vh - 12.8rem);
}
</style>
