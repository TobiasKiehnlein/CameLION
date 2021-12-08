const fixLoadersPlugin = require("./craco.fixloaders");

module.exports = {
  plugins: [{ plugin: fixLoadersPlugin }],
};
