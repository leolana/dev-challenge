var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app/public/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'src/app//public/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        'babel-loader',
      ],
    }],
  },
};
