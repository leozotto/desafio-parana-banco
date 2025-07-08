const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://jsonplaceholder.typicode.com',
  },
});
