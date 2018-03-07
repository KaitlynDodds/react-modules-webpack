const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'javascripts-[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
		        test: /\.html$/,
		        use: [
		          {
		            loader: "html-loader",
		            options: { minimize: true }
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