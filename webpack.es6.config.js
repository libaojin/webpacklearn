var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');
module.exports={
	entry:{
		build:"./es6/index.js"
	},
	output:{
		path:'./es6_build',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:['style','css'],
				exclude:'/node_modules/'
			},
			{
				test:/.js$/,
				loaders:["babel-loader?stage=0"],
				query:{
					presets:["es2015"]
				},
				exclude:'/node_modules/',
				include:path.resolve(__dirname,"/es6/")
			}
		]
	},
	resolve:{
		extensions:['','.js','.css','.jsx']
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"欢迎",
			chunks:["build"]
		})
	]
}