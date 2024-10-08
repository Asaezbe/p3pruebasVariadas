import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'

import ContadorView from '../views/ContadorView.vue'

ContadorView

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: (route) => ({ post: route.params.post })
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsView
  },

  {
    path: '/Contador',     // Define la ruta /contact
    name: 'Contador',
    component: ContadorView   // Asocia la ruta con el componente Contact
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
