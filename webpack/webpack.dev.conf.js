const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
},
  entry: {
    main: path.resolve(__dirname, '../src/task.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, 
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          'file-loader'
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
],
}