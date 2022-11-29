const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    styles: './src/style.css'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: "public", to: "" }] }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  module: {
    rules: [
      {
        test: /js|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    proxy: {
      '**': {
        target: 'http://localhost:4925',
        secure: false,
      }
    },
  },
};
