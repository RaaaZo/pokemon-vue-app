<template>
  <section :class="$style[`pagination-wrapper`]">
    <ButtonComponent
      @click="$emit(`onPrevButtonClickHandler`)"
      :disabled="props.isPrevButtonDisabled"
    >
      Previous
    </ButtonComponent>
    <ButtonComponent
      @click="$emit(`onNextButtonClickHandler`)"
      :disabled="props.isNextButtonDisabled"
    >
      Next
    </ButtonComponent>
  </section>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'

const props = defineProps<{
  isPrevButtonDisabled: boolean
  isNextButtonDisabled: boolean
}>()

defineEmits<{
  (e: 'onPrevButtonClickHandler'): void
  (e: 'onNextButtonClickHandler'): void
}>()
</script>

<style module>
.pagination-wrapper {
  display: flex;
  justify-content: space-between;
  margin-block-start: 3.2rem;
}
</style>
