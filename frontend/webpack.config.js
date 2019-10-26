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

const resolve = {
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  modules: [
    path.resolve(__dirname, "./src"),
    path.resolve(__dirname, "./node_modules")
  ]
}

const devServer = {
  contentBase: path.resolve(__dirname, "./public"),
  inline: true,
  hot: true,
  host: '0.0.0.0',
  port: 8081
}

module.exports = {
  entry: "./src/index.js",
  output,
  module: rules,
  resolve,
  devServer
}
