module.exports = {
	
	entry: "./ts/main.ts",
	output: {
		path: __dirname + "/js",
		filename: "app.js"
	},

	resolve: { 
		extensions: [".js",".ts"] 
	},

  module: {
	  
		loaders: [
		{
			test: /\.ts$/,
			loaders: [
				"ts-loader"
			]
		}
    ]
  }
}