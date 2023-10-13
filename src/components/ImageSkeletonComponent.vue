<template>
  <div :class="$style.skeleton"></div>
</template>

<script setup lang="ts"></script>

<style module>
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  width: 100%;
  height: 29.4rem;
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
}
</style>
