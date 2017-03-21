import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Index from '@/views/home/index'
const Index = resolve => require.ensure([], () => resolve(require('@/views/home/index')), 'maizuo')
const Film = resolve => require.ensure([], () => resolve(require('@/views/film/index')), 'maizuo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      // component: resolve => require(['@/views/home/index'], resolve)
      component: Index
    }, {
      path: '/film',
      name: 'film',
      // component: resolve => require(['@/views/film/index'], resolve)
      component: Film
    }
  ]
})
