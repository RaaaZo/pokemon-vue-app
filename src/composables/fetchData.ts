import { ref, toValue, watchEffect, type Ref } from 'vue'

export const useFetch = <T>(url: Ref<string> | string) => {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(true)

  const fetchData = async () => {
    try {
      const res = await fetch(toValue(url))
      if (!res.ok) {
        throw Error('No data available')
      }
      data.value = await res.json()
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error, loading, fetchData }
}
