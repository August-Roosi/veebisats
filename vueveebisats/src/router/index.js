import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import AboutView from '../views/AboutView.vue'
import AddPostView from '../views/AddPostView.vue'
import LogInView from "@/views/LogInView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/addpost',
    name: 'addposst',
    component: AddPostView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
