// import App from "./App.js"
import * as obj from "./App.js"
import Vue from "../vue-2.4.0.js"



new Vue({
    el:"#app",
    components:{
        App:obj.default
    },
    template:`
    <App />
    `
})