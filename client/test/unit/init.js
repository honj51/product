import Vue from 'vue'
import { all } from 'vue-client'
export default function () {
  Vue.config.silent = false

  all()
  require('../../src/bootstrap/less/bootstrap.less')
}
