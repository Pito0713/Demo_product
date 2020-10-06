//vue.confing.js
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  filenameHashing:true,
  pages: {
      index: {
          entry: "./src/pages/index/index.js", // 配置入口js文件
          template: "./src/pages/index/index.html", // 主页面
          filename: "index.html", // 打包后的html文件名称
          title: "首页", // 打包后的.html中<title>标签的文本内容
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      test: {//新增的部份
          entry: "./src/pages/test/test.js", // 配置入口js文件
          template: "./src/pages/test/test.html", // 主页面
          filename: "test.html", // 打包后的html文件名称
          title: "首页", // 打包后的.html中<title>标签的文本内容
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'test']
      },      
      },
      publicPath: process.env.NODE_ENV === 'production'
      ? '/Demo_product/'
      : '/'  
}
