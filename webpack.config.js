const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	output: {
	  path: './dist',
	  filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},
	module: {
		loaders: [
		  {
			  test: /\.jsx?$/,
			  exclude: /node_modules/,
		 	  loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
		  },
		  {
			  test: /\.css$/,
			  loader: 'style-loader'
		  },
		  {
			  test: /\.css$/,
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[name]__[local]__[hash:base64:5]'
				}
		  }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
