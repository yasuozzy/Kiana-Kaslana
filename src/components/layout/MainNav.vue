<template>
  <div class="main-menu">
    <ul>
      <StagewiseToolbar v-if="isDevelopment" :config="stagewiseConfig" />
      <!-- 修改这里：为每个导航项添加下拉菜单功能 -->
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="nav-item"
        :class="{
          'dropdown-right':
            item.name === '孩子' ||
            item.name === '复古' ||
            item.name === '礼品和配件' ||
            item.name === '集合' ||
            item.name === '清仓',
        }"
      >
        <!-- 主导航链接 -->
        <router-link :to="item.link" class="nav-link">{{ item.name }}</router-link>

        <!-- 下拉菜单 - 只有当该导航项有子菜单时才显示 -->
        <div v-if="item.subItems && item.subItems.length > 0" class="dropdown-menu">
          <div class="dropdown-content">
            <router-link
              v-for="subItem in item.subItems"
              :key="subItem.name"
              :to="subItem.link"
              class="dropdown-item"
            >
              {{ subItem.name }}
            </router-link>
          </div>
        </div>
      </li>
    </ul>
    <div class="line">
      <div class="line2"></div>
    </div>
  </div>
</template>

<script setup>
import { StagewiseToolbar } from '@stagewise/toolbar-vue'
import { computed } from 'vue'
import { navigationItems } from '@/data/products'

const isDevelopment = computed(() => import.meta.env.DEV)

const stagewiseConfig = {
  plugins: [],
}
// 从数据文件中导入导航项
const menuItems = navigationItems
</script>

<style scoped lang="less">
.main-menu {
  width: 100%;
  background-color: #140a47;
  height: 35px;
  /* 添加相对定位，为下拉菜单提供定位基准 */
  position: relative;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  display: flex;
  width: 100%;
}
li a {
  color: rgb(249, 249, 249);
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 1000;
}
&:hover {
  text-decoration: underline;
}

/* 导航项样式 - 添加相对定位和悬浮效果 */
.nav-item {
  flex: 1;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 35px;
  /* 悬浮效果 - 鼠标放上去时显示下拉菜单 */
  &:hover .dropdown-menu {
    /* 显示下拉菜单 - 就像开门一样 */
    opacity: 1;
    visibility: visible;
    /* 向下移动一点点，产生下拉效果 */
    transform: translateY(0);
  }
}

/* 主导航链接样式 */
.nav-link {
  color: rgb(249, 249, 249);
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 1000;
  /* 让链接占满整个导航项区域 */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: underline;
  }
}

/* 下拉菜单容器样式 */
.dropdown-menu {
  /* 绝对定位 - 脱离文档流，不影响其他元素，就像悬浮在空中 */
  position: absolute;
  /* 定位在导航项的正下方 */
  top: 100%;
  left: 0;
  right: 0;
  /* 默认隐藏 - 就像关着的门 */
  opacity: 0;
  visibility: hidden;
  /* 动画过渡效果 - 让显示/隐藏更平滑 */
  transition: all 0.3s ease;
  /* 稍微向上偏移，配合hover时的transform产生下拉效果 */
  transform: translateY(-10px);
  /* 层级 - 确保下拉菜单在最上层显示 */
  z-index: 1000;
  //向左边对其
  justify-content: flex-start;
  display: flex;
}

/* 下拉菜单内容区域 */
.dropdown-content {
  /* 高度自适应 - 根据内容行数自动调整 */
  height: auto;
  min-height: 35px; /* 最小高度 - 确保即使1个球员也有基本高度 */
  // max-height: 300px; /* 减少最大高度 - 回到原来的高度 */
  /* 背景色 - 白色背景让内容更清晰 */
  background-color: white;
  /* 边框 - 给菜单加个边框，看起来更精致 */
  border: 1px solid #ddd;
  /* 圆角 - 让菜单看起来更现代 */
  border-radius: 4px;
  /* 阴影 - 产生立体效果，就像菜单浮在页面上 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* 内边距 - 给内容留点呼吸空间 */
  padding: 15px;
  /* 宽度自适应 - 根据内容自动调整宽度 */
  width: auto;
  min-width: 600px; /* 增加最小宽度 - 确保菜单不会太窄 */
  max-width: 1200px; /* 增加最大宽度 - 防止菜单过宽 */

  /* Grid布局 - 动态列数网格系统！ */
  display: grid;
  /* 动态列数布局 - 根据内容自动调整列数，最多4列 */
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  /* 固定行高 - 让每行高度更紧凑 */
  grid-auto-rows: 25px;
  /* 网格间距 - 减少间距让布局更紧凑 */
  gap: 8px;
  /* 垂直对齐 - 让球员名字在格子中居中对齐 */
  align-items: center;
  /* 水平对齐 - 让球员名字在格子中居中对齐 */
  justify-items: center;

  /* 响应式设计 - 不同屏幕尺寸下的适配 */
  @media (max-width: 900px) {
    /* 中等屏幕时调整最小宽度 */
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    min-width: 400px;
  }

  @media (max-width: 600px) {
    /* 小屏幕时进一步调整 */
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    min-width: 300px;
  }

  @media (max-width: 400px) {
    /* 超小屏幕时单列布局 */
    grid-template-columns: 1fr;
    min-width: 200px;
  }
}

/* 下拉菜单项样式 */
.dropdown-item {
  /* 宽度自适应 - 让Grid控制宽度 */
  width: 100%;
  /* 高度与Grid行高匹配 */
  height: 30px;
  /* 最小高度 - 确保有足够的点击区域 */
  min-height: 30px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  /* 文字颜色 - 深色文字在白色背景上更清晰 */
  color: #333;
  /* 去掉下划线 */
  text-decoration: none;
  /* 字体大小 */
  font-size: 0.875rem;
  /* 过渡效果 - 让悬浮效果更平滑 */
  transition: background-color 0.2s ease;
  /* 文字左对齐 */
  text-align: left;
  /* 圆角 - 让每个项目看起来更精致 */
  border-radius: 4px;
  /* 边框 - 给每个项目一个轻微的边框 */
  border: 1px solid #f0f0f0;

  /* 悬浮效果 - 鼠标放上去时改变背景色 */
  &:hover {
    /* 浅蓝色背景 - 提示用户这是可点击的 */
    background-color: #f0f8ff;
    /* 去掉下划线 */
    text-decoration: none;
    /* 边框颜色变化 */
    border-color: #007bff;
  }
}

.line {
  border: 1px solid rgba(255, 255, 255, 0.3); /* 白色边框，30% 透明度 */
}
.line2 {
  border: 1.5px solid rgba(#100d22); /* 白色边框，30% 透明度 */
}

/* 右对齐下拉菜单样式 - 专门为最右边的导航项设计 */
.nav-item.dropdown-right .dropdown-menu {
  /* 重置定位方式 - 改为右对齐 */
  left: auto !important; /* 取消左边定位 - 就像松开左手 */
  right: 0 !important; /* 设置右边定位 - 就像右手贴墙 */

  /* 调整宽度 - 不再占满整个屏幕 */
  width: auto; /* 宽度自适应内容 */
  min-width: 600px; /* 增加最小宽度 - 确保有足够空间显示所有内容 */
  max-width: 1000px; /* 增加最大宽度 - 给更多空间显示内容 */
}

/* 右对齐时的内容区域微调 */
.nav-item.dropdown-right .dropdown-content {
  /* 确保内容容器也配合右对齐 */
  margin-left: auto; /* 左边距自动 - 把内容推向右边 */
  margin-right: 0; /* 右边距为0 - 紧贴右边 */
  /* 减少最小宽度避免不必要的空白 */
  min-width: 300px;
  /* 减少高度回到原来的样子 */
  max-height: 300px;
  /* 如果内容超出高度，显示滚动条 */
  overflow-y: auto;
}

/* 响应式适配 - 小屏幕时的处理 */
@media (max-width: 768px) {
  .nav-item.dropdown-right .dropdown-menu {
    /* 小屏幕时改为左对齐，避免超出屏幕 */
    left: 0 !important;
    right: auto !important;
    min-width: 400px; /* 增加小屏幕下的最小宽度 */
    max-width: 90vw; /* 使用视口宽度，确保不超出屏幕 */
  }

  .nav-item.dropdown-right .dropdown-content {
    min-width: 400px;
    max-width: 90vw;
  }
}
</style>
