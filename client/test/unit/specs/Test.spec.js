import $ from 'jquery'
import Vue from 'vue'
import init from '../init'
import TestUtil from '../TestUtil'
import Test from 'src/components/Test'

describe.only('基础测试', () => {
  let vm = null
  before(() => {
    init()
    Vue.component('test', Test)
    vm = TestUtil.createTest('test', {msg: '测试标题'})
  })

  after(function () {
    TestUtil.destroyVM(vm)
  })

  it('组件能够正确显示', () => {
    expect($(vm.$el).html()).to.contain('Hello Test')
  })
  it('组件参数能够正确传递', done => {
    vm.$nextTick(() => {
      expect($(vm.$el).html()).to.contain('测试标题')
      done()
    })
  })
})
