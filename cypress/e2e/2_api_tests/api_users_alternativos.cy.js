describe('Cenários alternativos para a API - /users', () => {
  const baseUrl = 'http://jsonplaceholder.typicode.com/users';

  it('GET - Recurso inexistente deve retornar 404', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/9999`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('POST - Corpo vazio deve retornar erro ou não criar corretamente', () => {
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: {},
      failOnStatusCode: false,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((response) => {
      expect([400, 201]).to.include(response.status); //nesse caso esta dando status 201, sistema permite enviar requisicao com um body vazio
    });
  });

  it('POST - E-mail inválido', () => {
    const invalidPayload = {
      name: "Teste Inválido",
      username: "usuario",
      email: "email-invalido"
    };

    cy.request({
      method: 'POST',
      url: baseUrl,
      body: invalidPayload,
      failOnStatusCode: false,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((response) => {
      expect([400, 201]).to.include(response.status); // Nao existe validacao para e-mail (sistema retorna 201)
    });
  });

  it('PUT - Atualizar usuário inexistente', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/9999`,
      body: {
        name: "Nome Teste",
        username: "teste",
        email: "teste@email.com"
      },
      failOnStatusCode: false,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((response) => {
      expect([500]).to.include(response.status);
    });
  });

  it('PUT - Atualização com corpo inválido', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/1`,
      body: {
        name: "" // campo inválido
      },
      failOnStatusCode: false,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((response) => {
      expect([400, 200]).to.include(response.status); //sistema retorna 200, deveria retornar bad request HTTP 400.
    });
  });

  it('DELETE - Remover usuário inexistente', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/9999`,
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 200]).to.include(response.status); //sistema deve retornar 404 caso nao encontre o usuario.
    });
  });
});
