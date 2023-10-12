import { useFetch } from '@/composables/fetchData'
import type { TPokemon } from '@/types'
import { ref, watchEffect, type Ref } from 'vue'

type TFetchedPokemonUrl = {
  name: string
  url: string
}

type TApiListResponse = {
  count: number
  next: string | null
  previous: string | null
  results: TFetchedPokemonUrl[]
}

type TPokemonResponse = {
  types: { type: { name: string } }[]
  id: number
  name: string
  sprites: { other: { 'official-artwork': { front_default: string } } }
}

export const useFetchPokemonsList = (url: string | Ref<string>) => {
  const { data } = useFetch<TApiListResponse>(url)

  const error = ref<string | null>(null)
  const loading = ref(true)
  const nextPage = ref<string | null>(null)
  const previousPage = ref<string | null>(null)

  const pokemonList = ref<TPokemon[]>([])

  const createListOfUrlsToFetch = async () => {
    if (!data.value || !data.value?.results.length) return

    const { results, next, previous } = data.value

    nextPage.value = next
    previousPage.value = previous

    const listOfPromisesToFetch = results.map(({ url }) =>
      fetch(url).then((response) =>
        response
          .json()
          .then(
            (res: TPokemonResponse) =>
              ({
                types: res.types.map((type) => type.type.name),
                id: res.id,
                name: res.name,
                img: res.sprites.other['official-artwork'].front_default
              }) as TPokemon
          )
          .catch((e) => {
            const typedError = e as Error
            error.value = typedError.message

            return null
          })
      )
    )

    try {
      const pokemonDataList = await Promise.all(listOfPromisesToFetch)

      pokemonList.value = pokemonDataList.filter((pokemon) => pokemon !== null) as TPokemon[]

      loading.value = false
    } catch (e) {
      const typedError = e as Error
      error.value = typedError.message
      loading.value = false
    }
  }

  watchEffect(() => {
    createListOfUrlsToFetch()
  })

  return { pokemonList, error, loading, nextPage, previousPage }
}
