const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
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
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 56de60e763155eeb8a44d3e816eb23934d8e1d56
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
<<<<<<< HEAD
>>>>>>> 56de60e763155eeb8a44d3e816eb23934d8e1d56
=======
>>>>>>> 56de60e763155eeb8a44d3e816eb23934d8e1d56
>>>>>>> main
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
<<<<<<< HEAD
=======
=======
};
>>>>>>> 56de60e763155eeb8a44d3e816eb23934d8e1d56
=======
};
>>>>>>> 56de60e763155eeb8a44d3e816eb23934d8e1d56
>>>>>>> main
