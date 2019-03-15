// import App from "./App.js"
import * as obj from "./App.js"
import Vue from "../vue-2.4.0.js"


console.log(obj.num_1)
obj.add(1,2)

new Vue({
    el:"#app",
    components:{
        App:obj.default
    },
    template:`
    <App />
    `
})