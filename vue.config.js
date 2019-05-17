const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: 'static',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
    }
}