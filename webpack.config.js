'use strict';
/* eslint-env node */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const www = path.join(__dirname, 'www');

module.exports = [
	{
		devtool: 'source-map',
		target: 'web',
		entry: './src/web.js',
		output: {
			filename: 'web.bundle.js',
			path: www
		},
		plugins: [
			new HtmlWebpackPlugin()
		]
	},
	{
		devtool: 'source-map',
		target: 'webworker',
		entry: './src/worker.js',
		output: {
			filename: 'worker.bundle.js',
			path: www
		}
	}
];
