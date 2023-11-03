import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gasstoveIndex from '@/components/gasstove/Index'
import gasstoveCreate from '@/components/gasstove/Creategasstove'
import gasstoveEdit from '@/components/gasstove/Editgasstove'
import gasstoveShow from '@/components/gasstove/Showgasstove'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gasstoves',
      component: gasstoveIndex
    },
    {
      path: '/gasstove/create',
      name: '/gasstove-create',
      component: gasstoveCreate
    },
    {
      path: '/gasstove/edit/:gasstoveId',
      name: '/gasstove-edit',
      component: gasstoveEdit
    },
    {
      path: '/gasstove/:gasstoveId',
      name: '/gasstove',
      component: gasstoveShow
    }
  ]
})
