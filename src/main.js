// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'style/reset.css'
// 这main.js中引入css
import 'style/border.css'
// 1像素边框
import fastClick from 'fastClick'
// 300毫秒延迟点击
fastClick.attach(document.body)

import 'style/iconfont.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 等于 router:router
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同，返回给用户的内容也不同
