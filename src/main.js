// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
import 'element-ui/lib/theme-chalk/index.css'
import VueSocketIO from 'vue-socket.io'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store/store'
// 引入组件的scss
import './global.scss'
Vue.config.productionTip = false
// 全局配置,目前支持 size 与 zIndex 字段
const option = { size: 'small', zIndex: 3000 }
// 安装Element-UI
Vue.use(Element, option);
Vue.use(GeminiScrollbar);
Vue.use(HappyScroll);
// 加载socket.io
Vue.use(new VueSocketIO({
    // debug: true,
    connection: 'http://localhost:7001/',
    options:{
      query:{
        token:localStorage.getItem("token")
      }
    },
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}));
// 安装axios
Vue.prototype.$ajax = axios ;

// 对axios http 请求拦截,设置token
axios.interceptors.request.use(config=>{
  if(localStorage.getItem('token')){
    config.headers.Authorization = localStorage.getItem('token');
  }
  return config ;
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App),
  // 挂在路由对象到 VM 实例上
  router
})
