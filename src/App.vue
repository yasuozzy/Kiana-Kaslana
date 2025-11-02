<script setup>
// 导入Vue Router的组件，RouterView是显示路由内容的容器
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- 这是"变化区域"，会根据路由显示不同页面 -->
    <!-- <RouterView />  :key="$route.fullPath" -->
    <RouterView />
    <!-- 添加:key属性，确保路由变化时组件重新渲染 -->
  </div>
</template>

<style lang="less">
/* 全局样式 - 移除 scoped 以应用到整个应用 */
* {
  box-sizing: border-box; // 确保所有元素的宽度计算包含 padding 和 border
}

html {
  overflow-x: hidden; // 隐藏横向滚动条
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; // 隐藏横向滚动条
  width: 100%;
}

#app {
  max-width: 1920px; // 限制最大宽度
  margin: 0 auto; // 居中显示
  width: 100%;
  overflow-x: hidden; // 隐藏横向滚动条
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  html {
    font-size: 14px; // 移动端基础字体稍小
  }

  body {
    -webkit-text-size-adjust: 100%; // 防止iOS自动调整字体大小
    -ms-text-size-adjust: 100%;
  }

  #app {
    max-width: 100%;
    min-width: 320px; // 设置最小宽度，防止在极小屏幕上出现问题
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }

  #app {
    min-width: 280px;
  }
}
</style>
