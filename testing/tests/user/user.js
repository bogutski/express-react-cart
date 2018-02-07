const globals = require('../../data/globals');

module.exports = {
  'Login form': (client) => {
    client
      .url(globals.url.login)
      .waitForElementVisible('//div[@id="user-section"]', 1000)
      .click('//a[text()=\'Login\']')
      .waitForElementVisible('//h1', 1000)
      .assert.containsText('//h1', 'User Login')
      .waitForElementVisible('//input[@name="email"]', 100)
      .waitForElementVisible('//input[@name="password"]', 100)
      .waitForElementVisible('//button[@type="submit"]', 100)
      .assert.attributeContains('//button[@type="submit"]', 'disabled', 'true')
      .end();
  },
};
