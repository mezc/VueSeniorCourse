import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from "@/privateComponent/Index.vue" 末尾可以省略.vue
import Index from "@/privateComponent/Index/Index.vue"
import Music from "@/privateComponent/Music/Music"

//此时的router是局部对象，必须使用Vue.use(Router)
Vue.use(Router)

export default new Router({
  routes: [
    //重定向
    {
      path:'',
      redirect:"/index"
    },
    {
      path:'/index',
      name:"index",
      component:Index
    },
    {
      path:"/music",
      name:"music",
      component:Music
    }
  ]
})
