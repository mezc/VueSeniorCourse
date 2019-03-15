var app = {
    template:`
    <div>
    我是一个入口文件
    </div>
    `
}

export default app;

export var num_1 = 2;

var num_2  = 3;
export {num_2}

export function add(x,y){
    return console.log(x+y)
}
//export 抛出后在main.js中接收