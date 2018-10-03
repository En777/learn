import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VerifyButtonDemo from '@/pages/VerifyButtonDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/VerifyButtonDemo',
      name: 'VerifyButtonDemo',
      component: VerifyButtonDemo
    }
  ]
})
