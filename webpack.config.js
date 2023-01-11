const path = require('path');

module.exports = {
  entry: {index: './src/index.js',
  pageLoad : './src/pageLoad.js',
  homePage : './src/homePage.js',
  menuPage : './src/menuPage.js',
  contactPage : './src/contactPage.js'
},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./")
    },
    compress: true,
    port: 8080
  },
  mode: 'development',
};
