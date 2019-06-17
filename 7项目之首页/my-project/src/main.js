// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//默认找./router/index.js
//index.js配置路由
import router from './router'

Vue.config.productionTip = false

//mint-ui start
//引入mintui
import MintUI from "mint-ui"
//安装插件
Vue.use(MintUI)
//引入css
import "mint-ui/lib/style.css"

//从static/css/global.css引入全局样式
import "../static/css/global.css"
//mint-ui end

//axios start
import Axios from "axios";
//给Vue原型挂载$axios属性
Vue.prototype.$axios =  Axios;
//配置公用url
Axios.defaults.baseURL = "https://www.sinya.online/api/";
//axios end

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
