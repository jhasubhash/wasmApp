// webpack.config.js
const path = require( 'path' );
module.exports = {
    context: __dirname,
    entry: './js/index.js',
    output: {
        path: path.resolve( __dirname, 'web' ),
        filename: 'bundle.js',
        globalObject: "self"
    },
    node: { 
        fs: "empty"
    },
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