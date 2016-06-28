// webpack.config.js
module.exports = {
  //devtool: 'source-map',
  entry: './doc/app.js',
  output: {
    path: __dirname + '/doc/js',
    filename: 'v-bulma.js'
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