/*
 * @Description: vue配置文件
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-30 15:11:58
 */

// const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, dir); //__dirname表示当前路径
// }

module.exports = {
  //基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  //生产环境构建文件的目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: './assest/',
  //生成的 index.html 的输出路径
  indexPath: './index.html',
  //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: process.env.NODE_ENV !== 'production', //将 lint 错误输出为编译警告
  // 配置不同的环境
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // }

  // chainWebpack: config => {

  // },

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: process.env.NODE_ENV === 'production',
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {},
      css: {
      },
    },
    // 所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: true
  },

  //服务器配置
  devServer: {
    port: 8089, // 端口号
    host: 'localhost',
    https: true, // https:{type:Boolean}
    hot: true,
    open: true,
    proxy: {
      '/apis': {
        target: 'http://1241141/',
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      },
    }
  }
}