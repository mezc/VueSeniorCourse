import App from "./App.js"

import Vue from "../vue-2.4.0.js"
// import * as obj from "./App.js"
//取num_1的值
console.log(obj.num_2)

new Vue({
    el:"#app",
    components:{
        App
    },
    template:`
    <App />
    `
})