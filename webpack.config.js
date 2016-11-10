module.exports = {
  entry: './client.js',
  output: {
    filename: 'bundle.js',
    path: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};
