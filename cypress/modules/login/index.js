import userData from "../../fixtures/example.json"

class login {
    preencherFormularioDeLogin(user, password){
       cy.get('[data-qa="login-email"]').type(user)
       cy.get('[data-qa="login-password"]').type(password)
       cy.get('[data-qa="login-button"]').click()

    }

    verificarLoginComSucesso() {

    cy.get('i.fa-user').parent().should('contain', userData.name);
    cy.get('a[href="/logout"]').should('be.visible');
    cy.get(':nth-child(10) > a').should('be.visible').and('contain.text', `Logged in as ${userData.name}`);
    cy.contains('b', userData.name);
  }

   verificarLoginInvalido() {
    cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!');
  }
}

export default new login()