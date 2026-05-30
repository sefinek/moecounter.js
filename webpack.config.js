const path = require('node:path');

module.exports = {
	entry: './src/index.js',
	target: 'web',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist', 'browser'),
		filename: 'moecounter.min.js',
		globalObject: 'this',
		library: {
			name: 'moecounter',
			type: 'umd',
		},
	},
	devtool: 'source-map',
};
