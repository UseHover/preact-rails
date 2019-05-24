module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: __dirname + "/dist/",
    filename: "preact_ujs.js",
    library: "PreactRailsUJS",
    libraryTarget: 'umd'
  },
  externals: {
    'preact': {
      root: 'Preact',
      commonjs2: 'preact',
      commonjs: 'preact',
      amd: 'preact'
    }
  }
};
