const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      print: './src/print.js',
    },
   devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };