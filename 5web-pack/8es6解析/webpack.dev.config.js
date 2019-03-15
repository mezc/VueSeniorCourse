//webpack ./main.js ./build.js
var path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:{
        //入口文件
        //可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始分析
        //key：“main”可以随意写
        // "main":"./main.js"
        "main":"./src/main.js"
    },
    output:{
        path:path.resolve("./dist"),//相对转绝对路径
        // filename:"./build.js"
        filename:"build.js"//只要文件的名字
    },
    watch:true,//文件监视改动，自动产出build.js
    //声明模块
    //包含各个loader
    module:{
        loaders:[
            {
                //遇到后缀名为.css的文件，webpack先用css-loader加载器去解析，计算完的css使用style-loader。
                //正则表达式
                test:/\.css$/,
                //!先右后左
                loader:"style-loader!css-loader"
            },
            {
                test:/\.(jpg|jpeg|gif|svg|png)$/, 
                //设置一个合理的limit很有必要
                loader:"url-loader?limit=600000"
                
            },
            {
                test:/\.less$/,
                loader:"style-loader!css-loader!less-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                options:{
                    presets:["env"],//处理关键字
                    plugins:["transform-runtime"]//处理函数
                }
            }
        ]
    },
    plugins:[
        //插件的执行顺序与元素有关
        new HtmlWebpackPlugin({
            template:"./src/index.html"//参照物
        })

    ]

}