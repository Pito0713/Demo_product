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
          title: "首頁", // 打包后的.html中<title>标签的文本内容
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      productSingle: {//新增的部份
          entry: "./src/pages/productSingle/productSingle.js", // 配置入口js文件
          template: "./src/pages/productSingle/productSingle.html", // 主页面
          filename: "productSingle.html", // 打包后的html文件名称
          title: "首頁", // 打包后的.html中<title>标签的文本内容
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'productSingle']
      },    
      },
      configureWebpack: {
	    //关闭 webpack 的性能提示
	    performance: {
		    hints:false
	    },
 
	    //或者
 
	    //警告 webpack 的性能提示
	    performance: {
	    	hints:'warning',
	    	//入口起点的最大体积
	    	maxEntrypointSize: 50000000,
	    	//生成文件的最大体积
	    	maxAssetSize: 30000000,
	    	//只给出 js 文件的性能提示
	    	assetFilter: function(assetFilename) {
	    		return assetFilename.endsWith('.js');
	        }
	    }
      },
      publicPath: process.env.NODE_ENV === 'production'
      ? '/Demo_product/'
      : '/'  
}
