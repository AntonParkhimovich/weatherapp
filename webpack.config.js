const path = require('path')

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, './src/task.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          'file-loader'

        ],
      }
    ]
  }
}