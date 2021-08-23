const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
<<<<<<< HEAD
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    contentBase: './dist',
  },
=======
  entry: './src/index.js',

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
>>>>>>> 56de60e763155eeb8a44d3e816eb23934d8e1d56
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
<<<<<<< HEAD
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
=======
};
>>>>>>> 56de60e763155eeb8a44d3e816eb23934d8e1d56
