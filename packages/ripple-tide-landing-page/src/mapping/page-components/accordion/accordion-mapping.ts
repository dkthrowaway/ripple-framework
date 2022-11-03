import { TideDynamicPageComponent, getBody } from '@dpc-sdp/ripple-tide-api'

export interface ITideAccordion {
  id: string
  numbered: boolean
  items: Array<{
    id: string
    title: string
    content: string
  }>
}

export const accordionMapping = (
  field
): TideDynamicPageComponent<ITideAccordion> => {
  return {
    component: 'RplAccordion',
    id: field.drupal_internal__id.toString(),
    title: field.field_paragraph_title,
    props: {
      id: field.drupal_internal__id.toString(),
      numbered: field.field_paragraph_accordion_style === 'numbered',
      items: field.field_paragraph_accordion.map((acc) => {
        return {
          id: acc.drupal_internal__id.toString(),
          title: acc.field_paragraph_accordion_name,
          content: getBody(acc?.field_paragraph_accordion_body?.value)
        }
      })
    }
  }
}

export const accordionIncludes = [
  'field_landing_page_component.field_paragraph_accordion'
]