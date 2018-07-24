import Vue from 'vue'
import App from './App'
import { all } from 'vue-client'

Vue.config.silent = true

/** **************************通用组件******************************/
all()
require('./bootstrap/less/bootstrap.less')

// 测试
Vue.component('test', (resolve) => { require(['./components/Test'], resolve) })
new Vue({
  el: 'body',
  components: { App }
})
