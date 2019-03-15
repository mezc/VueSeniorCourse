import Vue from "vue"
import App from "App.vue"

new Vue({
    el:"#app",
    //使用虚拟dom来渲染节点，提升性能
    render:c=>c(App)
    // components:{
    //     App
    // },
    // template:`
    // <div></div>
    // `
})