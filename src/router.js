import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'
import Team from './views/Team.vue'
import Login from './views/Login.vue'
import Signout from './views/Signout.vue'
import Team1 from './views/teams/Team1.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signout',
      name: 'Signout',
      component: Signout
    },
    {
      path: '/teams/team1',
      name: 'Team1',
      component: Team1
    },
  ]
})
