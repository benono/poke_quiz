import Vue from 'vue'
import VueRouter from 'vue-router'
import PokeIndex from '@/pages/PokeIndex'
import PokeQuiz from '@/pages/PokeQuiz'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PokeIndex',
    component: PokeIndex
  },
  {
    path: '/quiz',
    name: 'PokeQuiz',
    component: PokeQuiz
  },
  {
    path: '*',
    redirect: '/'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
