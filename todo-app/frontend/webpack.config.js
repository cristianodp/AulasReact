const webpack = require('webpack')
const ExtracTextPlugin = require('extract-text-webpack-plugin') 

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve:{
        extenstions: ["",".js",".jsx"],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtracTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        },
        {
            test: /\.css$/,
            loader: ExtracTextPlugin.extract('style-loader','css-loader')
        },
        {
            test: /\.woff|.woff2|.tff|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }

}