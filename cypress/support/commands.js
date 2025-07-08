import Ajv from "ajv";

Cypress.Commands.add('validarSchema', (schema, data) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(data);

    cy.log('Validando JSON schema...');
    if (!valid) {
        cy.log('Schema inválido. Ver detalhes no console');
        console.error(validate.errors);
    } else {
        cy.log('Schema válido');
    }

    expect(valid, 'Schema válido').to.be.true;
});

Cypress.Commands.add('logRequest', (method, endpoint) => {
    cy.log(`[${method}] Requisição para: ${endpoint}`);
});
