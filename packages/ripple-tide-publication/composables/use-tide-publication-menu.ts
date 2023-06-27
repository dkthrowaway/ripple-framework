import type { indexNode } from './../types'

export const useTidePublicationMenu = async (
  publicationId: string
): Promise<indexNode[]> => {
  const { public: config } = useRuntimeConfig()
  const { data: menuData } = useNuxtData(`publication-menu-${publicationId}`)

  if (!menuData.value) {
    const { data, error } = await useFetch('/api/tide/publication-index', {
      key: `publication-menu-${publicationId}`,
      baseURL: config.apiUrl || '',
      params: {
        id: publicationId
      }
    })
    if (error && error.value?.statusCode) {
      useTideError(error.value?.statusCode)
    }
    return data.value
  }
  return menuData.value
}

export default useTidePublicationMenu
