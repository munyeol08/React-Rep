const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'Schedule-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client'],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.(js|jsx)?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
      {
        test: /\.(css)?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  }, // 출력
};
