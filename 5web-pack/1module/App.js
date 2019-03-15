var App = {
    template:`
    <div>
    我是一个入口文件
    </div>
    `
}

//1
export default App;

//2
export var num_1 = 2;//作为一整个对象key导出
//3
var num_2 = 3;
export {num_2};

//4
export function add(x,y){
    return console.log(x+y);
}

//接收方式1
// import {num_1,num_2, add} from "./App.js"
// console.log(num_1)
// console.log(num_2)
// add(3,5)

//接收方式2,整个模块加载
//import * as obj from "./App.js"
//取num_1的值：console.log(obj.num_1)
//取App的值，App:obj.default