const path = require('path');
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env", 
                    "@babel/preset-react"
                ]
            }
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader'
            ]
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        }
      ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'public/'),
    },
    compress: true,
    hot: true,
    port: 8085,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: "src/index.html"
    })
  ]
};