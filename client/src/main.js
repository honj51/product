import Vue from 'vue'
import App from './App'
import { all } from 'vue-client'
import { main } from  'sale-client'
Vue.config.silent = true

/** **************************通用组件******************************/
all()
require('./bootstrap/less/bootstrap.less')

new Vue({
  el: 'body',
  components: { App }
})
