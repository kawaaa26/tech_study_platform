const path = require('path')
const isProduction = process.env.NODE_ENV === "production"

const mode = isProduction ? "production" : "development"

const output = {
  path: path.resolve(__dirname, "./public"),
  publicPath: "/assets/",
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
  mode,
  entry: "./src/index.js",
  output,
  module: rules,
  resolve,
  devServer
}
