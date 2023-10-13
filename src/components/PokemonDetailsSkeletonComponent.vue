<template>
  <section :class="$style.wrapper">
    <div :class="[$style[`section-header`], $style.skeleton]"></div>
    <div :class="[$style[`left-section-wrapper`], $style.skeleton]"></div>

    <div>
      <div>
        <h2 class="text--xl">Types</h2>
        <div :class="[$style[`types-list-wrapper`], $style.skeleton]"></div>
      </div>

      <h2 class="text--xl">Stats</h2>
      <div :class="[$style[`stats-list-wrapper`], $style.skeleton]"></div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  width: 100%;
  border-radius: 1.6rem;
}

@keyframes skeleton-loading {
  0% {
    background-color: var(--gray-light);
  }
  100% {
    background-color: var(--gray);
  }
}

.section-header {
  height: 6rem;
  grid-column: 1/3;
}

.left-section-wrapper {
  height: 47.5rem;
}

.types-list-wrapper {
  height: 15rem;
}

.stats-list-wrapper {
  height: 20rem;
}
</style>
