class Menu {
  navegarParaLogin() {
    cy.get('a[href="/login"]').click()
  }

  efetuarLogout() {
    cy.get('a[href="/logout"]').should('be.visible').click()
  }

  verificarLogout() {
     cy.url().should('includes','login')
     cy.contains('Login to your account')
     cy.get('a[href="/logout"]').should('not.exist')
     cy.get('a[href="/login"]').should('be.visible').contains('Signup / Login')
  }

  verificarAssinaturaPaginaPrincipal(){
    
    cy.get('footer').scrollIntoView();
    cy.get('.single-widget > h2').should('be.visible')
    cy.get('#susbscribe_email').type('teste@teste.com.br')
    cy.get('button[id="subscribe"]').click()
    cy.get('div[class="alert-success alert"]').should('be.visible').contains('You have been successfully subscribed!')

  }
}

export default new Menu()