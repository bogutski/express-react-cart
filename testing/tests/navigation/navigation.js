const globals = require('../../data/globals');

module.exports = {
  'Catalog link': (client) => {
    client
      .url(globals.url)
      .waitForElementVisible('//div[@id="site-menu"]', 500)
      .click('//a[text()=\'Catalog\']')
      .waitForElementVisible('//h1', 100)
      .assert.containsText('//h1', 'Catalog')
      .end();
  },

  'Vocabulars link': (client) => {
    client
      .url(globals.url)
      .waitForElementVisible('//div[@id="site-menu"]', 3000)
      .click('//a[text()="Vocabulars"]')
      .assert.containsText('//h1', 'Vocabulars')
      .end();
  },

};
