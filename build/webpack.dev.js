const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { urlEnv, logger } = require('../config');

logger.info('env : ', urlEnv);

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        //去除热更新编译日志
        clientLogLevel: 'silent',
        hot: true,
         //页面出错不会弹出 404 页面。
        historyApiFallback:true,
        compress: true,
        port: 8080,
        proxy:{
            "/api": {
                target: urlEnv.api,
                secure: true,
                changeOrigin: true
            }
        }
    }
});