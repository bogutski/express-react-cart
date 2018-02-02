const globals = require('../data/globals');

module.exports = {
  'Home page': (client) => {
    client
      .url(globals.url)
      .waitForElementVisible('#root', 100)
      .assert.title(globals.title.home)
      .end();
  },

  'Catalog page': (client) => {
    client
      .url(globals.url)
      .waitForElementVisible('#root', 100)
      .assert.title(globals.title.home)
      .end();
  },
};
