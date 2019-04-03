const path = require('path')
// const addData = require('./data.json')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  // 原来饿了吗项目配置的获取数据api接口
  // devServer: {
  //   before(app) {
  //     app.get('/api/seller', function(req, res) {
  //       res.json({
  //         errno: 0,
  //         data: seller
  //       })
  //     })
  //     app.get('/api/goods', function(req, res) {
  //       res.json({
  //         errno: 0,
  //         data: goods
  //       })
  //     })
  //     app.get('/api/ratings', function(req, res) {
  //       res.json({
  //         errno: 0,
  //         data: ratings
  //       })
  //     })
  //   }
  // },
  // 配置简化路径
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
    // 打包部署的时候配置的
    // config.plugin('context')
    //   .use(webpack.ContextReplacementPlugin,
    //     [/moment[/\\]locale$/, /zh-cn/])
    // baseUrl: ''
  }
}
