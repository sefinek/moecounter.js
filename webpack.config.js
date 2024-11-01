const path = require('node:path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist', 'browser'),
		filename: 'moecounter.min.js',
		library: 'moecounter',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	devtool: 'source-map',
};