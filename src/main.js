// import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './store' // 导入刚刚创建的 store
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 这是最重要的样式文件！
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css' // 引入样式
import './api/index.js'
import './assets/icon/font_5035655_n3tknrdp24c/iconfont.css'
const app = createApp(App)

// 全局注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(ArcoVue) // 全局注册Arco Design组件
app.use(store) // 告诉 Vue 使用这个 storeapp.use(store)  // 告诉 Vue 使用这个 store
store.dispatch('initStore') // 初始化store 恢复登录状态 防止刷新页面后用户信息丢失

app.mount('#app')
