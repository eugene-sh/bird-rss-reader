const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const copyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin')

module.exports = merge(baseConfig, {
	entry: './src/main/main.ts',
	target: 'electron-main',
	output: {
		filename: 'main.bundle.js',
	},
	plugins: [
		new copyPkgJsonPlugin({
			remove: ['scripts', 'devDependencies', 'build'],
			replace: {
				main: './main.bundle.js',
				scripts: { start: 'electron ./main.bundle.js' },
				postinstall: 'electron-builder install-app-deps',
			},
		}),
	]
})