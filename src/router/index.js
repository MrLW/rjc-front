import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegistPage from '@/components/RegistPage'
import LoginPage from '@/components/LoginPage'
import MainPage from '@/components/MainPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/regist',
      name: 'RegistPage',
      component: RegistPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    }
  ],
  // url去#
  mode: 'history'
})
