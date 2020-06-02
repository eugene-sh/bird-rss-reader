const path = require('path')

const environment = {
	isProduction: process.env.NODE_ENV === 'production',
	isDevelopment: process.env.NODE_ENV === 'development',

	getEnvironment: () => {
		switch (process.env.NODE_ENV) {
			case 'production':
				return 'production'
			case 'development':
				return 'development'
			default:
				throw new Error('Unknown environment')
		}
	}
}

module.exports = {
	mode: environment.getEnvironment(),
	devtool: environment.isDevelopment ? 'source-map' : false,
	output: {
		path: path.join(__dirname, 'dist'),
	},
	resolve: {
		alias: {
			'@public': path.join(__dirname, 'public'),
			'@components': path.join(__dirname, 'src/renderer/components'),
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	node: { __dirname: false, __filename: false },
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			}
		]
	}
}