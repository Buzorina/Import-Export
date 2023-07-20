const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_models/,
                loader: 'babel-loader'
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
                
        ]
    
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'main.html'
        }),
        new MiniCssExtractPlugin()
    ]
}
    
