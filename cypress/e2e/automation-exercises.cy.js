
import userData from "../fixtures/example.json"

import login from "../modules/login";
import menu from "../modules/menu"
import cadastro from "../modules/cadastro"
import contato from "../modules/contato"
import produtos from "../modules/produtos"


const { log } = require("console");
var Chance = require('chance');
var chance = new Chance();


describe('Trabalho Final - Automação Web', () => {

   beforeEach(() => {

    cy.viewport('iphone-6')
    cy.visit('https://automationexercise.com/')
    menu.navegarParaLogin()

  })

   it('Caso de Teste 1: Registrar Usuário', () => {
 
    cadastro.preencherFormularioNovoUsuario('QA tester', `qa-tester-${chance.integer()}@teste.com `);
    cadastro.preencherFormularioCadastro();
    cadastro.submeterCadastro();
    cadastro.verificarCadastroComSucesso();

  });


   it('Caso de Teste 2: Login do Usuário com E-mail e Senha Corretos', () => {

    login.preencherFormularioDeLogin(userData.email,userData.password) 
    login.verificarLoginComSucesso()
 
    
  });

  
   it('Caso de Teste 3: Login do Usuário com E-mail e Senha Incorretos', () => {

    login.preencherFormularioDeLogin(userData.email,`123456`) 
    login.verificarLoginInvalido()

   })


  it('Caso de Teste 4: Logout do Usuário', () => {

    login.preencherFormularioDeLogin(userData.email, userData.password);
    menu.efetuarLogout()
    menu.verificarLogout()   

  });

   it('Caso de Teste 5: Registrar Usuário com E-mail Já Cadastrado', () => {

    cadastro.preencherFormularioNovoUsuario('QA tester', userData.email);
    cadastro.verificarUsuarioExistente();

  });

   it('Caso de Teste 6: Formulário Fale Conosco', () => {
    
        contato.navegarParaContato();
        contato.preencherFormularioContato();
        contato.submeterFormularioContato();
        contato.verificarEnvioComSucesso();
  });

 
  it('Caso de Teste 8: Verificar Todos os Produtos e a Página de Detalhes do Produto', () => {

       produtos.navegarParaProdutos()
       produtos.verificarDetalheProduto()


})

  it('Caso de Teste 9: Buscar Produto', () => {

   produtos.navegarParaProdutos()
   produtos.buscarProdutos()

    
})

  it('Caso de Teste 10: Verificar Assinatura na Página Inicial', () => {

  menu.verificarAssinaturaPaginaPrincipal()  
    
})

  it('Caso de Teste 15: Fazer Pedido: Registrar antes de Finalizar a Compra', () => {

    cadastro.preencherFormularioNovoUsuario('QA tester', `qa-tester-${chance.integer()}@teste.com `);
    cadastro.preencherFormularioCadastro();
    cadastro.submeterCadastro();
    cadastro.verificarCadastroComSucesso();

    produtos.finalizarCompras()    
   
});
 
})