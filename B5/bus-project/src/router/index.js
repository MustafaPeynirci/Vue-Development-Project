import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocationView from '../views/LocationView.vue'
import PassangerInformationView from '../views/PassangerInformationView.vue'
import PaymentInformationView from '../views/PaymentInformationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/expedition',
    name: 'expedition',
    component: HomeView
  },
  {
    path: '/location/:expedition_id?',
    name: 'location',
    component: LocationView
  },
  {
    path: '/passangerInformation',
    name: 'passangerInformation',
    component: PassangerInformationView
  },
  {
    path: '/paymentInformation',
    name: 'paymentInformation',
    component: PaymentInformationView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
