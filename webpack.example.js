// webpack.config.js
module.exports = {
  //devtool: 'source-map',
  entry: "./examples/app.js",
  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },
  module: {
    loaders: [
      { 
        test: /\.vue$/, 
        loader: "vue-loader" 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};