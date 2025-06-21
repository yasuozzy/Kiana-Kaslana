import { createRouter, createWebHistory } from 'vue-router'
import XiaoQi from '@/views/XiaoQi.vue';
import HomePage from '@/views/HomePage.vue'; // 引入首页组件


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),//URL 不带有#符号，
  routes: [
    {
      path: '/', //网站根路径
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      // 把 'XiaoQi' 改成引入的组件 XiaoQi
     component: XiaoQi//显示登录组件
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
