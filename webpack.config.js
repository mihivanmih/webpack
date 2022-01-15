const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TesterWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    
    if(isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TesterWebpackPlugin()
        ]
    }
    
    return config
}

const filename = ext => isProd ? `[name].[contenthash].${ext}` : `[name].${ext}`

const cssloader = extra => {
    const loaders = [MiniCssExtractPlugin.loader, 'css-loader']
    if(extra) { loaders.push(extra) }
    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    //entry: './src/index.js',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', 'json'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    devServer: {
        hot: false,
        liveReload: true,
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            favicon: "assets/favicon.ico",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src/assets/favicon.ico'),
        //             to: path.resolve(__dirname, 'dist')
        //         }
        //     ]
        // })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader']
                use: cssloader()
            },
            {
                test: /\.less$/,
                //use: ['style-loader', 'css-loader']
                use: cssloader('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                //use: ['style-loader', 'css-loader']
                use: cssloader('sass-loader')
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