export interface IRplAnalyticsEventPayload {
  // Base properties
  event: string
  name?: string
  page_url?: string
  platform_event: string
  // Component properties
  label?: string
  element_id?: string
  element_text?: string
  link_url?: string
  link_domain?: string
  file_name?: string
  file_extension?: string
  file_size?: string
  form_id?: string
  form_name?: string
  field_id?: string
  type?: string
  value?: string
  index?: number
  component?: string
  // Route properties
  content_type?: string
  search_term?: string
  site_section?: string
  publication_name?: string
  breadcrumbs?: string[]
  production?: boolean
}

const filterPayload = (payload: IRplAnalyticsEventPayload) =>
  Object.fromEntries(
    Object.entries(payload).filter(
      ([key, value]) => value !== null && value !== undefined && value !== ''
    )
  )

export const trackEvent = (payload: IRplAnalyticsEventPayload) => {
  if (!window) {
    throw new Error('dataLayer events are only callable in a browser context')
  } else if (!window.dataLayer) {
    throw new Error('dataLayer was not initialised correctly')
  }

  window.dataLayer.push(filterPayload(payload))
}
