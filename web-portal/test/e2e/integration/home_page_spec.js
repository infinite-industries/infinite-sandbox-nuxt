describe('Home page', function () {
  it('can be loaded', function () {
    cy.visit('/')
  })

  it('has working nav panel', function () {
    cy.visit('/')
    cy.get('button#hamburger').click()
    cy.contains('li a', 'Legal').should('exist')
    cy.contains('li a', 'Login').should('exist')
  })
})
