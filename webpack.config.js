var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var config = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3000',
        'webpack/hot/only-dev-server',
        './src/Symfony/ReactBundle/Resources/public/js/app.js',
    ],
    output: {
        path: path.join(__dirname, 'web/dist'),
        filename: 'bundle.js',
        publicPath: 'http://127.0.0.1:3000/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

    	new BrowserSyncPlugin({
		host: '127.0.0.1',
		port: 3000,
		proxy: 'http://www.symfony_react.dev'
    	})

    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src/Symfony/ReactBundle/Resources/public/js'),
                loader: 'babel-loader',
            	/*query: {presets: ['env', 'react']},*/
		exclude: /node_modules/,
            }
        ]
    },

};

module.exports = config;
