module.exports = {
  entry: './src/index.js',

  output: {
    filename: './dist/bundle.js',
    publicPath: ''
  },
resolve: {
    extensions: ['', '.js', '.jsx', '.coffee'] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.(jpg|png)$/, loader: "url-loader?limit=25000"}

    ]
  }
}
