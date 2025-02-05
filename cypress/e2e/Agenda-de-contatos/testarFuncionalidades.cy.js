/// <reference types="cypress" />

describe("Testes para a prática do módulo", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  // Inclusão <- Ok
  it("Deve criar um novo contato na agenda", () => {
    cy.get('input[placeholder="Nome"]').type("gian souza");
    cy.get('input[placeholder="E-mail"]').type("giansouza@teste.com");
    cy.get('input[placeholder="Telefone"]').type("38 999998888");
    cy.get(".adicionar").click();
  });

  // Alteração --> Ok
  it("Deve alterar o primeiro contato da agenda", () => {
    cy.get(".edit").first().click();
    cy.get('input[placeholder="Nome"]')
      .type("{selectall}{del}")
      .type("contato alterado");
    cy.get('input[placeholder="E-mail"]')
      .type("{selectall}{del}")
      .type("giansouza2@teste.com");
    cy.get('input[placeholder="Telefone"]')
      .type("{selectall}{del}")
      .type("38 999997777");
    cy.get(".alterar").click();
    cy.wait(2000);
  });

  //Remoção
  it("Deve remover o primeiro contato na agenda", () => {
    cy.get(".delete").first().click();
  });
});
