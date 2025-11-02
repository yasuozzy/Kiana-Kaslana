import { createRouter, createWebHistory } from 'vue-router'
import XiaoQi from '@/views/XiaoQi.vue'
import HomePage from '@/views/HomePage.vue'
import UserRegister from '@/views/UserRegister.vue'
import ShoppingCartPage from '@/components/Common/ShoppingCart/ShoppingCartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ==================== 基础页面 ====================
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: { title: '首页' },
    },
    {
      path: '/login',
      name: 'Login',
      component: XiaoQi,
      meta: { title: '登录' },
    },
    {
      path: '/register',
      name: 'Register',
      component: UserRegister,
      meta: { title: '注册' },
    },

    // ==================== 足球装备分类（带子路由）====================
    {
      path: '/football-gear',
      name: 'FootballGear',
      component: () => import('@/views/categories/CategoryList.vue'),
      meta: {
        title: '足球装备',
        category: '足球装备',
        subCategory: '全部',
      },
      children: [
        {
          path: 'home', // /football-gear/home
          name: 'FootballGearHome',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '足球装备 - 主场球衣',
            category: '足球装备',
            subCategory: '主场球衣',
          },
        },
        {
          path: 'away', // /football-gear/away
          name: 'FootballGearAway',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '足球装备 - 客场球衣',
            category: '足球装备',
            subCategory: '客场球衣',
          },
        },
        {
          path: 'third', // /football-gear/third
          name: 'FootballGearThird',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '足球装备 - 第三客场',
            category: '足球装备',
            subCategory: '第三客场',
          },
        },
        {
          path: 'goalkeeper', // /football-gear/goalkeeper
          name: 'FootballGearGoalkeeper',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '足球装备 - 守门员',
            category: '足球装备',
            subCategory: '守门员',
          },
        },
      ],
    },

    // ==================== 训练分类（带子路由）====================
    {
      path: '/training',
      name: 'Training',
      component: () => import('@/views/categories/CategoryList.vue'),
      meta: {
        title: '训练',
        category: '训练',
        subCategory: '全部',
      },
      children: [
        {
          path: 'shirts',
          name: 'TrainingShirts',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '训练 - 男生',
            category: '训练',
            subCategory: '男生',
          },
        },
        {
          path: 'pants',
          name: 'TrainingPants',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '训练 - 儿童',
            category: '训练',
            subCategory: '儿童',
          },
        },
        {
          path: 'jackets',
          name: 'TrainingJackets',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '训练 - 女生',
            category: '训练',
            subCategory: '女生',
          },
        },
      ],
    },

    // ==================== 男装分类（带子路由）====================
    {
      path: '/man',
      name: 'Man',
      component: () => import('@/views/categories/CategoryList.vue'),
      meta: {
        title: '男装',
        category: '男装',
        subCategory: '全部',
      },
      children: [
        {
          path: 'shirts',
          name: 'ManShirts',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '男装 - 球衣',
            category: '男装',
            subCategory: '男士球衣',
          },
        },
        {
          path: 'casual',
          name: 'ManCasual',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '男装 - 休闲装',
            category: '男装',
            subCategory: '男士休闲装',
          },
        },
        {
          path: 'accessories',
          name: 'ManAccessories',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '男装 - 配件',
            category: '男装',
            subCategory: '男士配件',
          },
        },
      ],
    },

    // ==================== 女装分类（带子路由）====================
    {
      path: '/woman',
      name: 'Woman',
      component: () => import('@/views/categories/CategoryList.vue'),
      meta: {
        title: '女装',
        category: '女装',
        subCategory: '全部',
      },
      children: [
        {
          path: 'shirts',
          name: 'WomanShirts',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '女装 - 球衣',
            category: '女装',
            subCategory: '女士球衣',
          },
        },
        {
          path: 'casual',
          name: 'WomanCasual',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '女装 - 休闲装',
            category: '女装',
            subCategory: '女士休闲装',
          },
        },
        {
          path: 'accessories',
          name: 'WomanAccessories',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '女装 - 配件',
            category: '女装',
            subCategory: '女士配件',
          },
        },
      ],
    },

    // ==================== 儿童分类（带子路由）====================
    {
      path: '/kids',
      name: 'Kids',
      component: () => import('@/views/categories/CategoryList.vue'),
      meta: {
        title: '儿童装备',
        category: '儿童装备',
        subCategory: '全部',
      },
      children: [
        {
          path: 'shirts',
          name: 'KidsShirts',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '儿童装备 - 球衣',
            category: '儿童装备',
            subCategory: '球衣', // ⭐ 改成和商品数据一致
          },
        },
        {
          path: 'sets',
          name: 'KidsSets',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '儿童装备 - 套装',
            category: '儿童装备',
            subCategory: '套装', // ⭐ 改成和商品数据一致
          },
        },
        {
          path: 'accessories',
          name: 'KidsAccessories',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '儿童装备 - 配件',
            category: '儿童装备',
            subCategory: '配件', // ⭐ 改成和商品数据一致
          },
        },
      ],
    },

    // ==================== 复古分类（带子路由）====================
    {
      path: '/retro',
      name: 'Retro',
      component: () => import('@/views/categories/CategoryList.vue'),
      meta: {
        title: '复古',
        category: '复古',
        subCategory: '全部',
      },
      children: [
        {
          path: 'classic',
          name: 'RetroClassic',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '复古 - 经典球衣',
            category: '复古',
            subCategory: '经典球衣',
          },
        },
        {
          path: 'limited',
          name: 'RetroLimited',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '复古 - 限量版',
            category: '复古',
            subCategory: '限量版',
          },
        },
        {
          path: 'memorial',
          name: 'RetroMemorial',
          component: () => import('@/views/categories/CategoryList.vue'),
          meta: {
            title: '复古 - 纪念版',
            category: '复古',
            subCategory: '纪念版',
          },
        },
      ],
    },

    // ==================== 礼品和配件分类 ====================
    {
      path: '/gifts',
      name: 'Gifts',
      component: () => import('@/views/categories/CategoryList.vue'),
      meta: {
        title: '礼物及配件',
        category: '礼物及配件',
        subCategory: '全部',
      },
    },

    // ==================== 清仓分类 ====================
    {
      path: '/clearance',
      name: 'Clearance',
      component: () => import('@/views/categories/CategoryList.vue'),
      meta: {
        title: '清仓',
        category: '清仓',
        subCategory: '全部',
      },
    },

    // ==================== 商品详情页 ====================
    {
      path: '/product-detail/:id',
      name: 'ProductDetail',
      component: () => import('@/views/ProductDetail.vue'),
      props: true,
      meta: { title: '商品详情' },
    },

    // ==================== 购物车页面 ====================
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCartPage,
      meta: { title: '购物车' },
    },

    // ==================== 结账页面 ====================
    {
      path: '/shopping-cart/checkout',
      name: 'Checkout',
      component: () =>
        import(
          '@/components/Common/ShoppingCart/Payment-After-AddressSelection/CheckoutAddressStep.vue'
        ),
      meta: { title: '结账' },
    },

    // ==================== 礼品卡页面 ====================
    {
      path: '/gift-card',
      name: 'GiftCard',
      component: () => import('@/components/layout/GiftCard.vue'),
      meta: { title: '礼品卡' },
    },

    // ==================== 礼品卡常见问题页面 ====================
    {
      path: '/gift-card-faq',
      name: 'GiftCardFAQ',
      component: () => import('@/components/layout/FrequentlyAsked .vue'),
      meta: { title: '礼品卡 - 常见问题' },
    },

    // ==================== 个人中心（带子路由）====================
    {
      path: '/personal',
      name: 'Personal',
      component: () => import('@/components/layout/mine/Personal_Page.vue'),
      meta: { title: '个人中心' },
      children: [
        {
          path: 'order-history',
          name: 'OrderHistory',
          component: () => import('@/components/Common/ShoppingCart/ShoppingCartPage.vue'),
          meta: { title: '订单历史' },
        },
      ],
    },

    // ==================== 球员详情页 ====================
    {
      path: '/player/:playerId',
      name: 'PlayerDetail',
      component: () => import('@/components/athlete/PlayersJerseyPage/apex-top.vue'),
      props: true,
      meta: { title: '球员详情' },
    },

    // ==================== 404页面 ====================
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/HomePage.vue'),
      meta: { title: '页面不存在' },
    },
  ],
})

// ⭐ 路由守卫：设置页面标题
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title ? `${to.meta.title} - 切尔西官方商店` : '切尔西官方商店'
  next()
})

export default router
