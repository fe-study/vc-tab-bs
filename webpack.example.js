var config = require('./webpack.config.js')

config.entry = {
  'app': './examples/index.js',
}

config.output = {
  filename: './examples/static/build/build.js',
  library: 'VueComponentDemo',
  libraryTarget: 'umd'
}


module.exports = config
