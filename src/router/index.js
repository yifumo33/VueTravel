import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import City from '@/page/city'
import Detail from '@/page/detail/detail'

 // @指src

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      // 这里是一个动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
    scrollBehavior(to,from,savedPosition){
      return { x:0 ,y:0}
    }
})
