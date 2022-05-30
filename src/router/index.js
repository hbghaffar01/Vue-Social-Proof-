import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/includes/firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutleft",
    }
  
  },
  { path: '/started',
    name: 'started',
    component: () => import('@/views/GetStartView.vue'),
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",

    }
  },
  {
    path: '/authenticate',
    name: 'authenticate',
    component: () => import('@/views/AuthenticationView.vue'),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutleft",
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashBoard.vue'),
    meta: {
      RequireAuth : true,
    }
  },
  {
    path: '/analytic',
    name: 'analytic',
    component: () => import('@/components/Dashboard Component/analyticView.vue'),
    meta: {
      RequireAuth : true,
    }
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('@/components/Dashboard Component/friendView.vue'),
    meta: {
      RequireAuth : true,
    }
  },
  {
    path: '/image',
    name: 'image',
    component: () => import('@/components/Dashboard Component/imageView.vue'),
    meta: {
      RequireAuth : true,
    }
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/authenticate' && auth.currentUser) {
    next('/dashboard')
    return;
  }

  if (to.path === '/dashboard' && !auth.currentUser) {
    next('/authenticate')
    return;
  }

  if (to.path === '/started' && !auth.currentUser) {
    next('/authenticate')
    return;
  }
  
  if (from.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router