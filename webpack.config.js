var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require("webpack");
var path = require("path");
const Dotenv = require('dotenv-webpack');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      // Later on we will add more aliases here
      pages: path.resolve(__dirname, "./src/pages/"),
      core: path.resolve(__dirname, "./src/core/"),
      pods: path.resolve(__dirname, "./src/pods/"),
      common: path.resolve(__dirname, "./src/common/"),
      state: path.resolve(__dirname, "./src/state/"),
    }
  },
  entry: ["@babel/polyfill", "./index.tsx"],
  output: {
    path: path.join(basePath, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist", // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 80,
    stats: "errors-only",
    disableHostCheck: true,
    historyApiFallback: true,
    //Added proxy for access the local API Backend for solved the CORS problems
    proxy: {
      "/api": {
        target: "https://example.herokuapp.com",
        secure: true,
        changeOrigin: true,
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
