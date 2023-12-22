import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

Then(`the ripple map component should be visible`, () => {
  cy.get(`.rpl-map canvas`).should('be.visible')
})

Then(`the data map component tabs should exist`, () => {
  cy.get('.rpl-tabs').should('exist')
})

Then(`the data map tabs should be labelled:`, (dataTable) => {
  const items = dataTable.raw()
  cy.get('.rpl-tabs .rpl-tab .rpl-button__label').as('items')
  items.forEach((row, i: number) => {
    cy.get('@items')
      .eq(i)
      .then((item) => {
        cy.wrap(item).as('item')
        cy.get('@item').should('contain', row[0])
      })
  })
})

When(`I click the tab labelled {string}`, (label) => {
  cy.get('.rpl-tabs .rpl-tab .rpl-button__label').contains(label).click()
})

When(`I enter the term {string} into the location search input`, (term) => {
  cy.get('#tide-address-lookup').click()
  cy.get('#tide-address-lookup').focus()
  cy.get('#tide-address-lookup').type(term)
  cy.get('.rpl-search-bar__menu-option').should('be.visible')
})
Then(`the location search results should contain {string}`, (term) => {
  cy.get('.tide-search-address-lookup .rpl-search-bar__menu-option')
    .contains(term)
    .should('exist')
})
When(`I click the location search term {string}`, (term) => {
  cy.get('.tide-search-address-lookup .rpl-search-bar__menu-option')
    .contains(term)
    .click()
})

Then(`the map matches the image snapshot {string}`, (title) => {
  cy.get('.rpl-map').matchImage({
    title,
    screenshotConfig: {
      onBeforeScreenshot($el) {
        const $primaryNav = $el.find('.rpl-primary-nav')

        if ($primaryNav) {
          $primaryNav.hide()
        }
      }
    },
    // pixelmatch options, see: https://www.npmjs.com/package/pixelmatch#pixelmatchimg1-img2-output-width-height-options
    diffConfig: {
      threshold: 0.1
    },
    // maximum threshold above which the test should fail
    // default: 0.01
    maxDiffThreshold: 0.5
  })
})

When(
  `I click the map component at coordinates {int} {int}`,
  (x: number, y: number) => {
    // Move mouse to some random position
    cy.get('.rpl-map canvas').trigger('mousemove', 100, 100)
    // Click
    cy.get('.rpl-map canvas').click(x, y, { force: true })
  }
)

When(`I click the map search geolocation button`, () => {
  cy.get('.tide-search-address-lookup__locate').as('btn')
  cy.wait(1000)
  cy.get('@btn').click()
})

When(
  'I visit the page {string} from location {float}, {float}',
  (route: string, latitude: number, longitude: number) => {
    cy.visit(route, {
      failOnStatusCode: false,
      onBeforeLoad({ navigator }) {
        cy.stub(navigator.geolocation, 'getCurrentPosition').callsArgWith(0, {
          coords: { latitude, longitude }
        })
      }
    })
    cy.get('body', { timeout: 10000 }).should(
      'have.attr',
      'data-nuxt-hydrated',
      'true'
    )
    cy.wait(200)
  }
)
