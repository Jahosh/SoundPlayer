const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
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
			  test: /\.js?$/,
			  exclude: /node_modules/,
		 	  loader: 'babel',
				 query: {
					 presets: ['es2015', 'react']
				 }
		  },
		  {
			  test: /\.css$/,
			  loader: 'style-loader'
		  },
		  {
			  test: /\.css$/,
				loader: 'css-loader',
		  }
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
