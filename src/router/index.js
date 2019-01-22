import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Skills from '@/components/Skills'
import Career from '@/components/Career'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{ path: '/', component: LandingPage, name: 'Home' }]
})
