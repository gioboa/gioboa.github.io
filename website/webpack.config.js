const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const packageFile = JSON.parse(fs.readFileSync('./package.json'));
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = true;
const extractSass = new ExtractTextPlugin({
	filename: `style.css`,
	disable: false
});

function getPlugins() {
	const plugins = [
		new CleanWebpackPlugin('dist', {
			root: __dirname,
			verbose: false,
			dry: false,
			exclude: []
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery',
			'window.jQuery': 'jquery',
			jQuery: 'jquery'
		}),
		extractSass,
		new HtmlWebpackPlugin({ template: './index.html' }),
		new webpack.ProgressPlugin()
		// new BundleAnalyzerPlugin()
	];
	return plugins;
}

module.exports = {
	mode: isProd ? 'production' : 'development',
	devtool: 'inline-source-map',
	entry: {
		main: './index.js'
		// vendor: './src/vendor.ts'
	},
	output: {
		filename: `[name].js`,
		path: __dirname + '/dist'
	},
	resolve: {
		extensions: ['.js', 'html', 'scss']
		// alias: { jquery: './vendor/jquery.min.js' }
	},
	devtool: isProd ? 'none' : 'inline-source-map',
	watch: isProd ? false : true,
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: extractSass.extract({
					use: [{ loader: 'css-loader', options: { minimize: true } }, { loader: 'sass-loader' }],
					// use style-loader in development
					fallback: 'style-loader'
				})
			},
			{
				test: /\.(jpg|png|svg|woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'imgs/'
				}
			}
		]
	},
	plugins: getPlugins()
};
