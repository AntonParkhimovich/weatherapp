const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack')
 const  { CleanWebpackPlugin }  =  require ( 'clean-webpack-plugin' )

 module.exports = {
   entry: {
     app: './src/task.js',
   },
   plugins: [
    // new  CleanWebpackPlugin ( ),
     new HtmlWebpackPlugin({
       title: 'Production',
      template: 'index.html'
     }),
     new webpack.HotModuleReplacementPlugin(),
     
   ],
   output: {
     filename: 'index.bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
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
  }
 };