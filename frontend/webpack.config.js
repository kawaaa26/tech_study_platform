const path = require('path')

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

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public/assets"),
    filename: "bundle.js"
  },
  module: rules
}
