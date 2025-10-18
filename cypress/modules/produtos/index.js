import userData from "../../fixtures/example.json"

class produtos {

    navegarParaProdutos() {
        cy.get('a[href="/products"]').click()
        cy.get('.title').should('contain', 'All Products')
    }

    verificarDetalheProduto(){

    cy.get('a[href="/product_details/1"]').click()
    //product name, category, price, availability, condition, brand
    
    //Assert
    cy.get('.product-information > h2').should('contain', 'Blue Top')
    cy.get('.product-information > p').should('contain', 'Category: Women > Tops')
    cy.get(':nth-child(5) > span').should('contain', 'Rs. 500')
    cy.get('.product-information > p').should('contain', 'Availability: In Stock')
    cy.get('.product-information > p').should('contain', 'Condition: New')
    cy.get('.product-information').should('contain', 'Brand: Polo')

        
  //cy.get('.product-information').then(($div) => {
  //const text = $div.text();
  //cy.log('Texto encontrado dentro de .product-information:', text);
    }

    finalizarCompras(){

        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a').should('be.visible');
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click({force: true});
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.form-control').type('Test order');
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type(chance.name());
        cy.get('[data-qa="card-number"]').type(chance.cc());
        cy.get('[data-qa="cvc"]').type(chance.natural({ min: 100, max: 999 }));
        cy.get('[data-qa="expiry-month"]').type('12');
        cy.get('[data-qa="expiry-year"]').type('2025');
        cy.get('[data-qa="pay-button"]').click();
        cy.contains('p', 'Congratulations! Your order has been confirmed!').should('be.visible');
        cy.get('a[href="/delete_account"]').click();
        cy.get('b').should('contain.text', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();

    }

    buscarProdutos(){
        cy.get('input[id="search_product"]').type('Frozen')
        cy.get('button[id="submit_search"]').click()
        cy.get('.title').should('contain','Searched Products')
        cy.get('.productinfo > p').should('contain','Frozen Tops For Kids')


    }
}

   
export default new produtos()