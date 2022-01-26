module.exports = function (app) {
  app.use((req, res, next) => {
    res.setHeader("cross-origin-embedder-policy", "require-corp");
    res.setHeader("cross-origin-opener-policy", "same-origin");
    next();
  });
};
