const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://sweetshop.netlify.app/',
    browserName: 'chromium',
    headless: true
  }
});
