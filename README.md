# Projeto de Automação - Desafio Técnico QA Sênior

Este projeto contém testes automatizados utilizando Cypress para validar:

- Interface Web: testes na página [The Internet - Challenging DOM](https://the-internet.herokuapp.com/challenging_dom)
- API REST: testes na API [JSONPlaceholder - Users](http://jsonplaceholder.typicode.com/users)

## Tecnologias

- Cypress
- JavaScript
- Ajv (validação de schema JSON)

## Como executar os testes

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências

```bash
npm install
```

3. Execute os testes em modo headless (sem interface gráfica)

```bash
npx cypress run
```

4. Ou abra o Test Runner do Cypress para rodar os testes interativamente

```bash
npx cypress open
```

## Configuração

As URLs base estão configuradas no arquivo `cypress.config.js`:

- Base URL para a interface web: `https://the-internet.herokuapp.com`
- URL da API: `http://jsonplaceholder.typicode.com` (utilizada via variável de ambiente `apiUrl`)

## Contato

Leonardo Maia – seu-email@example.com
