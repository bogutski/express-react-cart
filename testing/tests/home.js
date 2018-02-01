module.exports = {
  'Home page': function (client) {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('#root', 100)
      .assert.title('React App')
      .end();
  },
};
