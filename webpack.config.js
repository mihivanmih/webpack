const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    //entry: './src/index.js',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        //filename: '[name].bundle.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', 'json'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        hot: false,
        liveReload: true,
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            favicon: "assets/favicon.ico"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }
}