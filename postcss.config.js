module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        "> 0.01%",
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ]
    })
  ]
}
