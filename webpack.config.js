const path = require('path');

module.exports = [{
  context: path.join(__dirname, 'public', 'javascripts'),
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: path.join(__dirname, 'public', 'javascripts'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=../fonts/[name].[ext]' },
      { test: /\.(jpg|jpeg|png)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=../images/[name].[ext]' },
    ],
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.js', '.jsx'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}];
