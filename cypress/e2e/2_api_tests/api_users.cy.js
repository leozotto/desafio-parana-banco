/// <reference types="cypress" />

describe('API - Testes com JSONPlaceholder (com logs e comandos)', () => {
  const baseUrl = 'http://jsonplaceholder.typicode.com/users';

  const userPayload = {
    name: "Leonardo Zotto",
    username: "leozotto",
    email: "leo@example.com"
  };

  const userSchema = {
    type: "object",
    required: ["id", "name", "username", "email"],
    properties: {
      id: { type: "number" },
      name: { type: "string" },
      username: { type: "string" },
      email: { type: "string" }
    }
  };

  it('GET - Deve retornar usuários com status 200 e schema válido', () => {
    cy.logRequest('GET', baseUrl);
    cy.request('GET', baseUrl).then((response) => {
      cy.log('Verificando status code');
      expect(response.status).to.eq(200);
      cy.log('Lista de usuários recebida');

      response.body.forEach(user => {
        cy.validarSchema(userSchema, user);
      });
    });
  });

  it('POST - Deve criar novo usuário com status 201', () => {
    cy.logRequest('POST', baseUrl);
    cy.request({
      method: 'POST',
      url: baseUrl,
      body: userPayload,
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then((response) => {
      cy.log('Usuário criado com sucesso');
      expect(response.status).to.eq(201);
      expect(response.body).to.include(userPayload);
    });
  });

  it('PUT - Deve atualizar usuário com status 200', () => {
    const updateName = "Leo Atualizado2";

    cy.logRequest('PUT', `${baseUrl}/1`);
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/1`,
      body: { ...userPayload, name: updateName },
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then((response) => {
      cy.log('Usuário atualizado');
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(updateName);
    });
  });

  it('DELETE - Deve remover usuário com status 200', () => {
    cy.logRequest('DELETE', `${baseUrl}/1`);
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/1`
    }).then((response) => {
      cy.log('Usuário removido');
      expect(response.status).to.eq(200);
    });
  });
});
