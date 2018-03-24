import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import Home from '@/pages/home'
import Type from '@/pages/type'
import Me from '@/pages/me'
import List from '@/pages/list'
import Article from '@/pages/article'

Vue.use(Router)

module.exports = new Router({
  routes: [{
      path: '/',
      redirect: '/home',
    },{
      path: '/home',
      component: Home
  },{
      path: '/type',
      component: Type
  },{
      path: '/me',
      component: Me
  },{
      path: '/list',
      component: List
  },{
      path: '/article',
      component: Article
  }]
})