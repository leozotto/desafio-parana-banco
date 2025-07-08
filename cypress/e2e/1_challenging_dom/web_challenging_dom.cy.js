/// <reference types="cypress" />
describe('Desafio UI - challenging_dom', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
    cy.log('Página carregada com sucesso');
  });

  it('Deve clicar nos 3 botões principais (por classes fixas)', () => {
    cy.log('Clicando no botão azul (classe: .button)');
    cy.get('.large-2.columns .button').not('.alert').not('.success').click();

    cy.log('Clicando no botão vermelho (classe: .button.alert)');
    cy.get('.large-2.columns .button.alert').click();

    cy.log('Clicando no botão verde (classe: .button.success)');
    cy.get('.large-2.columns .button.success').click();

    cy.log('Todos os botões principais foram clicados com sucesso');
  });

  it('Deve clicar em todos os botões Edit e Delete da tabela', () => {
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('a[href*="edit"]').click({ force: true });
      cy.wrap($row).find('a[href*="delete"]').click({ force: true });
    });

    cy.log('Todos os botoes foram clicados com sucesso.')
  });
});
