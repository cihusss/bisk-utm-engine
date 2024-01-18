module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'utm-bundle.js',
  },
  mode: 'production',
  stats: {
    orphanModules: true,
  },
};
