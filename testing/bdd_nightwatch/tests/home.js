const globals = require('../bdd/data/globals');

module.exports = {
  'Home page': (client) => {
    client
      .url(globals.url.main)
      .waitForElementVisible('//div[@id="root"]', 100)
      .assert.title(globals.title.home)
      .end();
  },
};
