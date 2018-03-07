var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:  [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
	    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
	    './src/index.js' // Your appʼs entry point
    ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					}
				]
			},
			{
		        test: /\.html$/,
		        use: [
		          {
		            loader: "html-loader",
		            options: { minimize: false }
		          }
		        ]
		    },
		    {
		    	test: /\.css$/,
		    	use: [
		    		{
		    			loader: "style-loader"
		    		}
		    	]
		    },
		    {
		    	test: /\.css$/,
		    	use: [
		    		{
		    			loader: "css-loader",
		    			query: {
						    modules: true,
						    localIdentName: '[name]__[local]___[hash:base64:5]'
						}
		    		}
		    	]
		    }
		]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	      template: "./src/index.html",
	      filename: "./index.html"
	    })
	]
};