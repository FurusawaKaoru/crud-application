import { createRouter, createWebHistory } from 'vue-router'
import Events from '../views/events/Index'
import EventsDetail from '../views/events/Detail'

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  },
  {
    path: '/events/:id',
    name: 'EventsDetail',
    component: EventsDetail,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
