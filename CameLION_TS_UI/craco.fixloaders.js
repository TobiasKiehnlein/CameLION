const wasmRegex = /\.wasm$/;

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths },
  }) => {
    // Modify file-loader
    webpackConfig.module.rules.forEach((rule) => {
      (rule.oneOf || []).forEach((oneOf) => {
        if (oneOf.loader && oneOf.loader.indexOf("file-loader") >= 0) {
          // Make file-loader ignore WASM files
          oneOf.exclude.push(wasmRegex);
        }
      });
    });

    // Add the fixed loaders
    const additions = [
      {
        test: wasmRegex,
        type: "webassembly/experimental",
      },
    ];
    additions.forEach((item, index) => {
      webpackConfig.module.rules.push(item);
    });

    // Always return a config object.
    return webpackConfig;
  },
};
