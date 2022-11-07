import { Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

Then('the form with ID {string} should exist', (id: string) => {
  cy.get(`form#${id}`).should('exist')
})

Then(
  'the form {string} should have the following fields:',
  (id: string, dataTable: DataTable) => {
    const table = dataTable.hashes()
    cy.get(`form#${id} .rpl-form__outer`).as('fields')

    table.forEach((row, i: number) => {
      cy.get('@fields')
        .eq(i)
        .then((item) => {
          cy.wrap(item).as('item')
          if (row.type) {
            cy.get('@item').should('have.data', 'type', row.type)
          }
          if (row.label) {
            cy.get('@item')
              .find('label.rpl-form__label')
              .should('contain', row.label)
          }
          if (row.help) {
            cy.get('@item').find('.rpl-form__help').should('contain', row.help)
          }
          if (row.required) {
            if (row.required === 'true') {
              cy.get('@item')
                .find('.rpl-form__required')
                .should('contain', '(Required)')
            }
          }
        })
    })
  }
)