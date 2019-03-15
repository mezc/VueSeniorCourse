// var App = {
//     template:`
//     <div>
//     我是一个入口文件
//     </div>
//     `
// }
// console.log(222)
// console.log(333)

// export default App;


// //export 抛出后在main.js中接收
import imgSrc from "./timg.jpg"

var App = {
    template:`
        <div>
            <img :src="imgSrc" alt="" />
        </div>
    `,
    data(){
        return {
            imgSrc:imgSrc
        }
    }
};

export default App;
