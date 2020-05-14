// webpack.config.js
const path = require( 'path' );
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './js/index.js',
    output: {
        path: path.resolve( __dirname, 'web' ),
        filename: 'bundle.js',
        globalObject: "self"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './web',
        compress: true,
        port: 9000
    },
    node: { 
        fs: "empty"
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        noParse: /web[\/\\]gen[\/\\].*\.js$/,
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(wasm|png|jpeg|gif)$/i,
                type: "javascript/auto",
                loader: "file-loader"
            },
            {
                test: /\.worker\.js$/,
                use: { 
                    loader: 'worker-loader',
                    options: { 
                        inline: true 
                    } 
                }
            }
        ]
    }
};