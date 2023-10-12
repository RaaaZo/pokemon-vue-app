<template>
  <footer :class="$style.footer">
    <p class="text--sm">Made with 🖤 by <a href="https://github.com/RaaaZo">RaaaZo</a></p>
  </footer>
</template>

<script setup lang="ts"></script>

<style module>
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
