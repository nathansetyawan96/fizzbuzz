const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: ['babel-polyfill', './index.js'],
  output: {
    filename: 'script.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'es2015', {
                    modules: false
                  }
                ]
              ],
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  }
}
