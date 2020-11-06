const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { urlEnv, logger } = require('../config');

logger.info('env : ', urlEnv);

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
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