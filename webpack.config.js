var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3010',
        'webpack/hot/only-dev-server',
        './src/app/index.js',
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/static/'
    },

    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            use: [
                'babel-loader',
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    devServer: {
        host: 'localhost',
        port: 3010,

        historyApiFallback: true,

        hot: true,
        // enable HMR on the server
    },
};
