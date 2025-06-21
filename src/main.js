// import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 这是最重要的样式文件！
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css'; // 引入样式
const app = createApp(App)

// 全局注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(ArcoVue); // 全局注册Arco Design组件
app.mount('#app')
