const webpack = require('webpack');

module.exports = {
  
  baseUrl: '/Shawn-Yu-1.github.io/Alice.github.io/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Shawn-Yu-1.github.io/Alice.github.io/'
    : '/',

  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Vue Argon Design',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d',
    
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};

// export default defineConfig({
//   // ...
//   base: "/vue-demo/",
  
//   build: {
//     outDir: "docs"
//   }
// })
