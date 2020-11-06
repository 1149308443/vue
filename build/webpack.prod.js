const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    optimization:{
        minimizer:[
            new TerserPlugin({
                extractComments: false, // 去除打包出来的.license文件
                terserOptions: {
                  compress: {
                    // 去除console
                    pure_funcs: ['console.log']
                  }
                }
              })
        ],
         // 代码分离
        splitChunks: {
        // 这表示将选择哪些块进行优化。当提供一个字符串，有效值为 all, async 和 initial. 提供 all 可以特别强大，因为这意味着即使在异步和非异步块之间也可以共享块
            chunks: 'all',
            minSize: 30000,
            minChunks: 1, // 分割前必须共享模块的最小块数
            maxAsyncRequests: 5, // 按需加载时的最大并行请求数
            maxInitialRequests: 3, // 入口点处的最大并行请求数
            // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
            automaticNameDelimiter: '~',
            cacheGroups: {
                vue: {
                    name: 'js/chunk-vue',
                    test: /[\\/]node_modules[\\/](vue)[\\/]/,
                    priority: 10
                },
                vueRouter: {
                    name: 'js/chunk-vueRouter',
                    test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
                    priority: 10
                },
                vuex: {
                    name: 'js/chunk-vuex',
                    test: /[\\/]node_modules[\\/](vuex)[\\/]/,
                    priority: 10
                },
                moment: {
                    name: 'js/chunk-moment',
                    test: /[\\/]node_modules[\\/](moment)[\\/]/,
                    priority: 10 // 权重
                },
                // 默认配置
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10 // 权重
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
});
