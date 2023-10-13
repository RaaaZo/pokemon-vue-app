import { ref } from 'vue'

export const useIsImageLoaded = () => {
  const isLoaded = ref(false)

  const onLoadHandler = () => {
    isLoaded.value = true
  }

  return {
    isLoaded,
    onLoadHandler
  }
}
