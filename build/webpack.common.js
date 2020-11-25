const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        polyfill:'@/entry/polyfill.js',
        index: '@/entry/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        // publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/entry/index.html',
            favicon: './src/entry/favicon.ico',
            title: '吴维兴的个人小站',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns:[{
                context:path.resolve(__dirname, '../static'),
                from:'**/*',
                to: path.resolve(__dirname, '../dist'),
            }]
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.less', '.html'],
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            '@comp': path.resolve(__dirname, '../src/components'),
            '@util': path.resolve(__dirname, '../src/util'),
            '@pages': path.resolve(__dirname, '../src/pages'),
            '@static': path.resolve(__dirname, '../static'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    hotReload: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    /*
                     * {
                     *     loader: 'css-loader',
                     *     options: {
                     *       modules: {
                     *         localIdentName: '[local]_[sha1:hash:base64:5]'
                     *       }
                     *     }
                     * },
                     */
                    'less-loader'
                ],
            },
           {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: 'imgs/[name].[ext]'
                }
            }, {
                test: /\.(ttf|woff|eot|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }]
    }
};