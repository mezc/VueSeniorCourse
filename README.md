webpack-dev-server@2.9.1
webpack@3.4.1 


6.npm cnpm
安装cnpm:   npm install cnpm -g -registry

1.全局安装
npm i webpack -g
npm install  webpack@3.4.1  -g
版本4.x.x有问题
npm i webpack webpack-cli --save-dev

2.安装jquery
npm init -y
npm i jquery -S,这一步完成后生成了node_modules文件夹

3.
"scripts": {
    "dev":"webpack --mode development",
    "build":"webpack --mode production"
  },
  运行npm run build/ npm run dev

4.新建webpack.config.js 配置文件，设置 modules.exports={
    entry:path.join(__dirname,"相对路径"),//输出
    output:{
        path:path.join(__dirname,"相对路径")
        filename:"boundle.js"//输入
    }
}

5.
//cnpm i webpack-dev-server@2.9.1 -D 实现自动打包编译功能
//本地安装的依赖不能在命令行直接运行，需在package.json里scripts配置
//"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"webpack-dev-server"
  },
//要求在本地安装webpack,命令为cnpm i webpack -D
npm install webpack@3.4.1 -D

//使用时用npm run dev,  html中js引用路径改成根路径，<script src="/boundle.js">

//webpack-dev-server自动打包生成的boundle.js文件并没有放到实际的物理磁盘上，而是直接托管到电脑内存中，所以在项目根目录中根本找不到打包好的boundle.js,存放目录与src,node_modules平级看不见的文件。
//通过服务器访问由webpack-dev-server的js包地址是：localhost:8080/boundle.js

7.不手动点击localhost:8080配置：
package.json 里配置：
"dev":"webpack-dev-server --open --port 3000 --contentBase src --hot"//手动打开浏览器//端口更改为3000//内容的根路径更改为src,意思是/localhost:3000/src,//--hot热重载，热更新，减少代码的更新,实现网页不重载就能局部刷新

8.配置dev-server的第二种方式，这种方式要麻烦些,

在webpack.config.js中配置：
第1步：
defServer:{
  open:true,//自动打开浏览器
  port:3000,//设置启动时候运行端口
  contentBase:"src",//指定托管的根目录
  hot:true//启用热更新
} 

第2步：
const webpack = require("webpack")

第3步：//new一个热更新的模块对象
plugins:[
  new webpack.HotModuleReplacemnetPlugin()
]

第4步：
package.json里；
"scripts":{
  "dev2":webpack-dev-server --open --port 3000 --contentBase src --hot,
  "dev":"webpack-dev-server"
}

第5步：
npm run dev

9.将页面放入内存中,安装插件
cnpm i html-webpack-plugin -D

//配置文件：
plugins:[new htmlWebpackPlugin({
template:path.join(__dirname,".src/index.html"),
filename:"index.html"})]

10.loader-配置处理css文件loader
// 1.处理css文件，安装cnpm i style-loader css-loader -D
// 2.webpack.config.js里新增一个配置节点，module，这个module对象上有rules属性，是数组，这个数组中存放了第三方文件的匹配和处理规则。
//3.webpack处理顺序，从后往前调用

11.loader处理less文件
cnpm i less-loader -D
cnpm i less@2.3.1 -D

12.loader处理scss文件
cnpm i sass-loader -D
cnpm i node-sass -D


13.
//webpack可以处理css/less/scss,不能处理带有url地址的样式
cnpm i url-loader file-loader -D

//{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:"url-loader"}//处理图片路径的loader

14.安装bootstrap,注意用3的版本
cpm i bootstrap@3 -D
//使用时,去掉--contentBase src
"dev":"web pack-dev-server --open --port 3000 --hot
//main.js中导入：import "bootstrap/dist/css/bootstrap.css"
//通过路径形式引入node_modules中相关文件，可直接省略路径前面的node_modules这一层目录，直接写包的名称。然后跟上具体的文件路径
//webpack.config.js中
{test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"}

15.静态属性：可以直接通过类名直接访问的属性
//实例属性：只能通过类的实例来访问的属性

15.//webpack需要借助第三方loader把高级语法转为低级语法后把结果交给webpack打包到bundle.js中
//1.1在webpack中可以通过babel将高级语法转换为低级语法
//通过安装如下两套包，安装babel相关loader功能
//第一套包转换工具：cnpm i babel-core babel-loader@7 babel-plugin-transform-runtime -D
//第二套包语法：cnpm i babel-preset-env babel-preset-stage-0 -D
//默认安装版本时babel-loader@8 ,注意版本不一致会导致运行错误，解决方法，降低babel版本npm install -D babel-loader@7
//2.1webpack.config.js中module节点下，rules数组中添加一个新的匹配规则
{test:/\.js$/,use:"babel-loader",exclude:/node_modules/}
//在配置babel时，必须把node_modules目录通过exclude排除掉，否则会将node_modules中的所有js文件打包编译。
//3.1在项目根目录中，新建一个.babelrc的配置文件，属于json格式
//内容为：
{
"presets":["env","stage-0"],
"plugins":["transform-runtime"]}
//目前安装的babel-preset-env是比较新的语法，之前安装的是babel-preset-es2015，-env包含了所有和es***相关的语法。


16.使用vue
//安装：cnpm i vue -D
//调用main.js:import Vue from "vue"
//import Vue from "vue"中导入的是node_modules/vue/package.json/main属性
//要导入全的包，第一种方式：import Vue from "../node_modules/vue/dist/vue.js"
//第二种方式，在web pack.config.js中，resolve:{alias:{"vue$":"vue/dist/vue.js"}}

17.使用vue组件
//在src下创建login.vue(此时main.js中可以使用import Vue from "vue")
//login.vue分成3部分：
<template></template>,<script></script>,<style></style>
//1导入组件，在main.js:import login from "./login.vue"
//2安装相关loader打包.vue文件：cnpm i vue-loader@14 vue-template-compiler -D
//备注vue-loader版本问题：
为了引入.vue文件，安装完vue-loader和vue-template-compiler后，运行报错：

vue-loader was used without the corresponding plugin.Make sure to include VueLoaderPlugin in your webpack config.

百度了一下，是因为vue-loader，15的版本需要再添加plugin的配置。有两种解决方法：

1.把安装版本改为14的

2.在webpack.config.js中添加：

const { VueLoaderPlugin } = require('vue-loader')
 
module.exports = {
  // ...
  plugins: [
    new VueLoaderPlugin()
  ]
}
//3在配置文件webpack.config.js中新增loader{test:/\.vue$/,use:"vue-loader"} 
//4main.js中，render:function(createElement){
return createElement(login)}
//5在html中<login></login>
//6在webpack中，如果要通过vue把一个组件放到页面中展示，只能用render函数

18.render的改写：
// render:function(createElement){
    //     return createElement(login)
    // }//可以简写成下面的形式
    render:c=>c(login)
    //逻辑：1.改写成箭头函数： (createElement)=>{return createElement(login)}
    // 2.()里只有一个变量，可以去掉（），{}里只有一条函数，可以去掉{},不加{}默认为return，可以去掉return:
    // createElement=>createElement(login)
    // 3.变量名太长，改成c:c=>c(login)

19.在login.vue中定义组件的data和method：
<script>export default{
data(){return {}},
methods:{
show(){console.log("xxxx")}
}
}
</script>

20.//es6:使用import 模块名 from “模块标识符”
/在es6中使用export default和export向外暴露成员
//node中：使用var/const 名称 = require("模块标识符")
//node:使用module.exports 和exports 来暴露成员
//export default向外暴露的成员，可以使用任意变量来接收
//在一个模块中，export default只允许向外暴露一次
//export向外暴露成员，只能通过{}来接收
//export可以多次暴露成员
//export导出的成员，导出时必须严格使用导出时的名称使用{}来接收，可以使用as 来取别名

21.cnpm i 通过package.json安装，尽量不要复制node_modules

22.vue-router的使用
//1安装路由：cnpm i vue-router -D
//2main.js导入包：import VueRouter from "vue-router"
//3手动安装router：Vue.use(VueRouter)
//4创建路由对象：var router = new VueRouter({
routes:[
{path:"/account",component:account},
{path:"/goodslist",component:goodslist}
]
})
//5导入组件：
//import account from  "./main/Account.vue"
//import goods list from "./main/GoodList.vue"
//6
//app这个组件是通过vm的render函数渲染出来的，render如果要渲染组件，渲染出来的的组件只能放到el所指向的#app元素中；
//account/goodlist是由路由匹配监听到的，这两个组件只能放到属于路由的<router-view>/<router-link>中，不能放到el所指向的#app中，会被render函数的渲染清空，应放在app.vue中

19.图标提示包：vue 2 snippets,vetur

20.设置组件样式
//<style scoped>设置局部样式
//普通style标签只支持普通的样式，启用scss/less需要为style元素设置lang属性<style lang="scss">,div{font-style:italic}

21.抽离路由：
新建router.js,将导入组件，创建路由对象挪出,
//暴露路由对象export default router
//main.js接收路由:import router from "./router.js"

22.mint ui:
//安装cnpm i mint-ui -D
//引入全部组件：import Vue from "vue"，
//import MintUI from "mint-ui",
//导入样式
//import "mint-ui/lib/style.css"
//导入app组件
//import App from "./App.vue"
//安装mintui
//Vue.use(Mint)
//new Vue({
el:"#app",
components:{App}
})
//引入部分组件：import {Cell,Checklist} from "mini-ui"
//Vue.component(Cell.name,Cell)
//Vue.component(Checklist.name,Checklist)
//使用时，需配置.babelrc文件：
{
"presets":["env","stage-0"],
"plugins":["transform-runtime"]}
并在webpack.config.js中配置：
{test:/\.css$/,use:["style-loader","css-loader"]}

23.mint-ui中toast使用
//App.vue中
// Toast("点击出现提示信息")，调用toast后会有一个返回值，返回值有close方法，调用close方法，可以手动关闭
                this.toastInstance = Toast({
                    message:"设置提示内容",
                    position:"设置出现位置",
                    duration:-1,
                    iconClass:"glyphicon glyphicon-heart",//设置图标,用bootstrap,在main.js中导入图标,import "bootstrap/dist/css/bootstrap.css",打开bootstrap,将图标样式放在iconClass中，webpack.config.js中配置{test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"}
                    className:'mytoast',//自定义toast的样式，需自己提供一个类名新建css文件夹/app.css,在main.js中导入import "./css/app.css"
})

24.//借助 cnpm i babel-plugin-component -D按需引入需要的组件，以达到减小项目体积的目的。
//.babelrc:
{
    "presets":["env","stage-0"],
    "plugins":[
        "transform-runtime",
        [
            "component",
            [
                {
                    "libraryName":"mint-ui",
                    "style":true
                }
            ]
        ]
    ]
}
//在main.js中引入组件和注册按钮：

25.使用mui：需要手动下载压缩包，不能npm安装
//拷贝dist到src/lib/mui中，放置的是手动安装的包
//mui-master/examples/hello-mui/examples/buttons.html,拷贝标签到 App.vue
//main.js引入mui，import "./lib/mui/css/mui.min.css"


26.使用局部样式：
style with scss (scoped)


27.版本管理工具
//1.根目录下创建.gitignore:忽略那些要上传的文件:
node_modules
.idea
.vscode
.git
//2.创建README.md:
用#
//3.开源项目的协议，mui-masters/LICENSE,放到根目录下
//4.git init
//5git status
//6git add .
//7git commit -m "xxx"
//8git remote add origin "githubadress"
//9git push -u origin master
//10全局设置：
git config --global user.name "...."
git config -- global user.email "...."

28.mui图标，在example的icon里找，标签里的mui-icon 不能删除，引入样式：/css/icons-extra.css" ,font


29.mui-active,高亮
//配置高亮
//在router.js中：
linkActiveClass:"mui-active"//覆盖默认路由高亮的类

30.Promise:
// 1.Promise是一个构造函数，new Promise()得到一个Promise实例
// 2Promise上有resolve(成功之后的回调函数)，reject(失败之后的回调函数)
//3.Promise.Prototype.then(),只要是promise创建的实例，都可以访问到.then()方法,.then()预先指定了成功调用resolve函数和失败调用reject函数
// 4.Promise()表示一个异步操作，每new一个实例，这个实例就表示一个具体的异步操作
//5.异步的结果，成功和失败
//5.1执行成功，在内部调用resolve将结果返回给调用者
//5.2执行失败，在内部调用reject将结果返回
//5.3异步操作内部拿到结果后，不能用return，只能使用回调函数的形式将结果返回
//6.每new一个Promise实例，就会立即执行异步操作里的代码,如不要立即执行，则需创建function函数，调用时才会执行

//7.在上一个节点返回的promise,可以用继续使用.then()


31.时间格式化，
//安装时间插件：cnpm i moment -D
//导入时间插件：import moment from "moment"

32.在组件中引入子组件：

33.三元表达式：
1 >2 ? "true":"false"意思是：如果1大于2，返回true，否则返回false