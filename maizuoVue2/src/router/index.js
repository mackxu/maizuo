import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Index from '@/views/home/index'
const Index = resolve => require.ensure([], () => resolve(require('@/views/home/index')), 'maizuo')
const FilmList = resolve => require.ensure([], () => resolve(require('@/views/film/list')), 'maizuo')

import FilmDetail from '@/views/film/detail'
import Login from '@/views/member/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      // component: resolve => require(['@/views/home/index'], resolve)
      component: Index
    },
    {
      path: '/film/:id',
      name: 'filmDetail',
      component: FilmDetail
    },
    {
      path: '/films/:type',
      name: 'filmList',
      component: FilmList
    },
    {
      path: '/login',
      name: Login,
      component: Login
    }
  ]
})
