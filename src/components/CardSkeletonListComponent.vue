<template>
  <li v-for="(_, index) in skeletonList" :key="index" :class="$style.skeleton">
    <div :class="$style[`skeleton-image`]"></div>
    <div :class="$style[`skeleton-text`]"></div>
    <div :class="$style[`skeleton-text`]"></div>
    <div :class="$style[`skeleton-text`]"></div>
  </li>
</template>

<script setup lang="ts">
const amountOfSkeletons = 20

const skeletonList = Array.from({ length: amountOfSkeletons })
</script>

<style module>
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
}

@keyframes skeleton-loading {
  0% {
    background-color: var(--gray-light);
  }
  100% {
    background-color: var(--gray);
  }
}

.skeleton-image {
  width: 100%;
  height: 29.4rem;
}

.skeleton-text {
  width: 100%;
  height: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}
</style>
