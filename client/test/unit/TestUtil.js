import Vue from 'vue'

let id = 0

const createElm = function () {
  const elm = document.createElement('div')

  elm.id = 'app' + ++id
  document.body.appendChild(elm)

  return elm
}

export default {
  // 创建一个测试组件
  createTest: function (name, props) {
    const template = '<div>' + '<' + name + ' v-ref:child></' + name + '></div>'
    const elm = createElm()
    const comp = new Vue({
      template: template
    })
    comp.$mount(elm)
    const vm = comp.$refs.child
    Object.assign(vm, props)
    return vm
  },

  // 删除一个组件
  destroyVM: function (vm) {
    vm.$destroy && vm.$destroy()
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el)
  }
}
