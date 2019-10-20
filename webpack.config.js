const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'build.js',
    },
    module: {
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                      }
                }
            },
            {
                test: /\.less$/,
                use: [
                     MiniCssExtractPlugin.loader,
                     {
                         loader: 'css-loader',
                     },
                     {
                         loader: 'less-loader',
                     }
                ]
            },
            { 
                test: /\.jpg|png|svg$/, 
                loader: "file-loader" 
            }

        ]
    },
    plugins: [
        
        new MiniCssExtractPlugin({
         filename:'./styles.css',
        }),
        new HtmlWebpackPlugin({ template:'./src/index.html'})
     ],

    devServer: {
        stats: {
            children: false,
            maxModules: 0
        },
        
        port: 3000
    }
}