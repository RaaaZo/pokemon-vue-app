<template>
  <button
    @click="props.onClickHandler"
    :disabled="props.isDisabled"
    :class="$style.button"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    onClickHandler: () => void
    isDisabled: boolean
    type: 'button' | 'submit' | 'reset'
  }>(),
  {
    onClickHandler: () => {},
    isDisabled: false,
    type: 'button'
  }
)
</script>

<style module>
.button {
  width: 16rem;
  padding: 1.6rem 3.2rem;
  border-radius: 0.8rem;
  border: none;
  background-color: var(--primary);
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  box-shadow: var(--card-box-shadow);

  &:disabled {
    background-color: var(--white);
    cursor: not-allowed;
    color: var(--gray-dark);
  }

  &:hover:not(:disabled) {
    background-color: var(--primary-dark);
  }
}
</style>
