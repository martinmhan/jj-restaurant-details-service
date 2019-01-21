const path = require("path");
module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "./client/src/"),
	output: {
		path: path.resolve(__dirname, "./client/dist"),
		filename: "bundle-det.js"
	},
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: [/\.js$/, /\.jsx?$/],
				exclude: /node_modules/,
				options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
				},
			},
			{
				test: /\.css$/,
				loader: 'style-loader',
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
				include: path.join(__dirname, 'client'),
				query: {
				modules: true,
				localIdentName: '[name]__[local]__[hash:base64:5]',
				},
			},
		],
	},
};

