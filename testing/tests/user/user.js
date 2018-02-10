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
      .assert.attributeContains('//button[@type="submit"]', 'disabled', 'true');
  },

  'Login form input': (client) => {
    client
      .setValue('//input[@name="email"]', globals.account.login)
      .setValue('//input[@name="password"]', globals.account.password)
      .waitForElementVisible('//button[@type="submit"]', 100);
    client.expect.element('//button[@type="submit"]').to.have.attribute('value');
    client.click('//button[@type="submit"]')
      .pause(500);
  },

  'Login successfully': (client) => {
    client.expect.element('//div[@id="user-section"]//a').text.to.equal(globals.account.login);
    client.end();
  },
};
