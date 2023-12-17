import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import AboutView from '../views/AboutView.vue'
import AddPostView from '../views/AddPostView.vue'
import PostView from '../views/PostView.vue'
import LogInView from "@/views/LogInView.vue";
//import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
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
    name: 'addpost',
    component: AddPostView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView,
    meta: {
      requiresAuth: true
    }
  }
]

//Currently, user is always authenticated.
const isAuthenticated = true

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
//If the user is not logged in and page requires auth, they will be redirected to log in
router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requiresAuth)&& !isAuthenticated) {

  //Correct auth check 
  //if (to.matched.some(record => record.meta.requiresAuth)&& !store.getters.isAuthenticated) {
   
      next({ name: 'login' })
    
  } else {
    next() 
  }
})

export default router
