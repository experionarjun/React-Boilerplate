const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    inline: true,
    historyApiFallback: true,
    port: 3200,
  },
  module: {
    rules: [
      {
        test: /\.js?$/, // search for js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'], // use es2015 and react
        },
      },
      {
        test: /\.js?$/, // search for js files
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
  ],
};

module.exports = config;
