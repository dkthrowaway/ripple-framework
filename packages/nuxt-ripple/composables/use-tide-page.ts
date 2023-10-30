import type { TidePageBase } from './../types'
import { useCookie, isPreviewPath, AuthCookieNames } from '#imports'

const isCacheTimeExpired = (date: number, expiryInMinutes = 5) => {
  // 5 minute default expiry in step with varnish cache
  const expiry = expiryInMinutes * 1000 * 60
  const timePlusExpiry = Date.now() - expiry
  return date < timePlusExpiry
}

const checkForRedirect = async (page: TidePageBase) => {
  // Redirect on the 6 codes that Drupal supplies
  if (page?.type === 'redirect') {
    switch (page.status_code) {
      case '301':
      case '302':
      case '303':
      case '304':
      case '305':
      case '307':
        await navigateTo(page.redirect_url, {
          replace: true,
          redirectCode: page.status_code,
          external: page.redirect_type === 'external'
        })
        break
      default:
    }
  }
}

export const useTidePage = async (
  slug?: string,
  site?: number
): Promise<TidePageBase> => {
  const route = useRoute()
  const path = slug || route.path
  const { public: config } = useRuntimeConfig()
  const siteId = site || config.tide?.site

  // check we dont add too many keys to cache
  const nuxt = useNuxtApp()
  const maxCacheItems = 50
  if (nuxt.payload.data) {
    if (Object.keys(nuxt.payload.data).length > maxCacheItems + 1) {
      if (process.dev) {
        console.log('clear nuxt cache')
      }
      clearNuxtData()
    }
  }

  const { data: pageData } = useNuxtData(`page-${path}`)

  // Refresh data so it doesnt go stale whilst client side nav
  if (pageData.value && pageData.value._fetched) {
    if (isCacheTimeExpired(pageData.value._fetched)) {
      if (process.dev) {
        console.log('Cache reset for page', `page-${path}`)
      }
      await clearNuxtData(`page-${path}`)
    }
  }

  const headers = {}

  // Need to manually pass the cookies needed for auth as they aren't automatically added when server rendered
  if (isPreviewPath(path)) {
    const accessTokenCookie = useCookie(AuthCookieNames.ACCESS_TOKEN)
    const accessTokenExpiryCookie = useCookie(
      AuthCookieNames.ACCESS_TOKEN_EXPIRY
    )
    headers.cookie = `${AuthCookieNames.ACCESS_TOKEN}=${accessTokenCookie.value};${AuthCookieNames.ACCESS_TOKEN_EXPIRY}=${accessTokenExpiryCookie.value}`
  }

  let sectionCacheTags

  if (!pageData.value) {
    const { data, error } = await useFetch('/api/tide/page', {
      key: `page-${path}`,
      baseURL: config.apiUrl || '',
      params: {
        path,
        site: siteId
      },
      headers,
      async onResponse({ response }) {
        sectionCacheTags = response.headers.get('section-cache-tags')

        if (!process.server && response.ok && response._data) {
          response._data['_fetched'] = Date.now()
        }
      }
    })

    // Section.io cache tags must be set on the response header to invalidate the cache after a change in drupal
    if (sectionCacheTags) {
      useMergeSectionTags(sectionCacheTags)
    }

    if (error && error.value?.statusCode) {
      useTideError(error.value?.statusCode)
    }

    await checkForRedirect(data.value)

    return data.value
  }

  await checkForRedirect(pageData.value)

  return pageData.value
}

export default useTidePage
