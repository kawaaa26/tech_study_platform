const path = require('path')

const output = {
  path: path.resolve(__dirname, "./public/assets"),
  filename: "bundle.js"
}

const babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: "babel-loader",
}

const rules = {
  rules: [
    Object.assign({}, babelLoader)
  ]
}

const devServer = {
  contentBase: path.resolve(__dirname, "./public"),
  open: true,
  inline: true,
  hot: true,
  port: 8081
}

module.exports = {
  entry: "./src/index.js",
  output,
  module: rules,
  devServer
}
