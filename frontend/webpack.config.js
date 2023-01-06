const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    /* Ponto de entrada */
    entry: './src/main.js',
    // Para onde será compilado, o ponto de saída(no caso, para a raíz do projeto)
    output:{
      path:
        process.env.NODE_ENV == 'development' 
          ? __dirname 
          : path.resolve(__dirname,'dist'),
      filename: 'main.js'
    },
    plugins:[
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
          filename:"main.css"
      })
    ],
    resolve:{
      extensions:['.js','.json','.vue'],

      alias:{
        vue: 'vue/dist/vue.esm-bundler.js'
      }
    },
    module:{
      rules:[
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test:/\.css$/,
          use:[
            MiniCssExtractPlugin.loader,"css-loader"
          ]
        }
      ]
    }
  };