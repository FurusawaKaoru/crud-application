import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Events from '../views/events/Index'
import EventsDetail from '../views/events/Detail'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/events/:id',
    name: 'EventsDetail',
    component: EventsDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
