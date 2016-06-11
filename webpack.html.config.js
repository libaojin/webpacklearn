var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
	entry:{
		build:"./app/index.js",
		abc:"./app/abc.js"
	},
	output:{
		path:'./build',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:['style','css'],
				exclude:'/node_modules/'
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
		}),
		new htmlWebpackPlugin({
			title:"abc",
			filename:"class.html",
			chunks:["abc"]
		})
	]
}