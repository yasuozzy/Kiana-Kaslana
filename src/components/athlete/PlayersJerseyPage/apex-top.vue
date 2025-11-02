<template>
  <!-- 整个页面容器 - 包含顶部横幅和主体内容 -->
  <div class="apex-page">
    <!-- 顶部黄色横幅区域 - 显示取消信息 -->
    <div class="top-banner">
      <span class="banner-text">探索我们的 2025/26 第三套套件</span>
    </div>

    <!-- 右侧球衣展示区域 - 包含图片和描述文字 -->
    <div class="jersey-section">
      <!-- 球衣图片容器 - 展示曼城球衣 -->
      <div class="jersey-image">
        <img
          src="../../../assets/logo/plp_banner_1445x800_desktop_home_jersey_2526.jpg"
          alt="曼城球衣"
          class="jersey-img"
        />
      </div>

      <!-- 主体内容区域 - 蓝色背景包含球员信息和球衣图片 -->
      <div class="main-content">
        <!-- 左侧球员信息区域 - 包含位置和姓名 -->
        <div class="player-info">
          <h1 class="position">{{ currentPlayer.position || '前锋' }}</h1>
          <!-- 球员位置标题 -->
          <h2 class="player-name">{{ currentPlayer.name || '埃尔林·哈兰德' }}</h2>
          <!-- 球员姓名 -->
        </div>

        <!-- 球员描述文字区域 - 介绍球员特点 -->
        <div class="player-description">
          <p>
            {{ currentPlayer.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <FilterSortBar />
  <Merchandise-Display />
  <FooterComponent />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import FilterSortBar from './FilterSortBar.vue'
import MerchandiseDisplay from './Merchandise-Display.vue'
import FooterComponent from './FooterComponent.vue'
import { byPlayer } from '../../../data/byplayer.js' // 引入球员数据
const route = useRoute()
console.log('当前路由参数:', route.params, route.query)

const currentPlayer = ref({}) // 当前显示的球员信息
// 页面加载时执行
onMounted(() => {
  // 获取路由参数中的球员ID
  const playerId = route.params.playerId

  if (playerId) {
    // 根据ID找到对应的球员
    const player = byPlayer.find((p) => p.id == playerId)
    if (player) {
      currentPlayer.value = player
    }
  }

  console.log('当前球员:', currentPlayer.value)
})
</script>

<style scoped lang="less">
/* 整个页面容器样式 - 设置基本布局 */
.apex-page {
  width: 100%; /* 占满整个宽度 */
  min-height: 400px; /* 最小高度保证内容显示 */
  position: relative; /* 相对定位，方便子元素绝对定位 */
}

/* 顶部黄色横幅样式 - 醒目的提示信息 */
.top-banner {
  background-color: #ffff00; /* 亮黄色背景，吸引注意力 */
  width: 100%; /* 占满整个宽度 */
  height: 35px; /* 固定高度，不会太高影响美观 */
  display: flex; /* 弹性布局，方便居中对齐 */
  align-items: center; /* 垂直居中对齐文字 */
  justify-content: center; /* 水平居中对齐文字 */
  position: relative; /* 相对定位 */
  z-index: 10; /* 层级较高，确保在最上层显示 */
}

/* 横幅文字样式 - 清晰易读的提示文字 */
.banner-text {
  color: #000; /* 黑色文字，在黄色背景上对比度高 */
  font-size: 16px; /* 适中的字体大小 */
  font-weight: 700; /* 中等粗细，既不会太细也不会太粗 */
}

/* 主体内容区域样式 - 蓝色渐变背景 */
.main-content {
  background-color: #001838;
  width: 100%; /* 占满整个宽度 */
  min-height: 212px; /* 最小高度确保内容完整显示 */
  display: flex; /* 弹性布局，左右分栏 */
  align-items: center; /* 垂直居中对齐内容 */
  padding: 40px 60px; /* 内边距，给内容留出呼吸空间 */
  box-sizing: border-box; /* 边框盒模型，padding不会增加总宽度 */
  position: relative; /* 相对定位，方便子元素定位 */
  padding-left: 98px;
}

/* 左侧球员信息区域样式 - 突出显示球员基本信息 */
.player-info {
  flex: 1; /* 占据左侧空间 */
  color: white; /* 白色文字，在蓝色背景上清晰可见 */
  z-index: 5; /* 适中层级，确保文字显示 */
}

/* 球员位置标题样式 - 大号醒目标题 */
.position {
  font-size: 72px; /* 超大字体，作为主要视觉焦点 */
  font-weight: bold; /* 粗体，增强视觉冲击力 */
  margin: 0 0 20px 0; /* 下方留出间距，与姓名分开 */
  line-height: 1; /* 行高为1，紧凑显示 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* 文字阴影，增加立体感 */
}

/* 球员姓名样式 - 副标题显示姓名 */
.player-name {
  font-size: 28px; /* 较大字体，但小于位置标题 */
  font-weight: 300; /* 较细字体，与位置标题形成对比 */
  margin: 0; /* 无外边距，紧凑布局 */
  opacity: 0.9; /* 略微透明，层次感更好 */
  color: #3bd6ff;
}

/* 右侧球衣展示区域样式 - 图片和文字的容器 */
.jersey-section {
  flex: 1; /* 占据右侧空间 */
  display: flex; /* 弹性布局，垂直排列 */
  flex-direction: column; /* 垂直方向排列子元素 */
  align-items: center; /* 水平居中对齐 */
  position: relative; /* 相对定位 */
}

/* 球衣图片容器样式 - 包装球衣图片 */
.jersey-image {
  width: 100%; /* 固定宽度，保持图片比例 */
  height: 190px;
  overflow: hidden; /* 超出容器的部分隐藏 */
  background-color: #a32929;
  // margin-bottom: 30px; /* 下方留出间距，与描述文字分开 */
  position: relative; /* 相对定位 */
  // z-index: 3; /* 适中层级 */
}

/* 球衣图片样式 - 实际的图片显示效果 */
.jersey-img {
  background-color: #a32929;
  object-position: center top; /* 显示图片的上半部分（球衣部分） */
  object-position: 30% 25%; /* 左边30%，上边25%的位置 */
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3)); /* 投影效果，增加立体感 */
}

/* 球员描述文字区域样式 - 详细介绍文字 */
.player-description {
  max-width: 710px; /* 最大宽度限制，避免文字过宽难以阅读 */
  //  height: 140px;
  color: #3bd6ff;
  font-size: 15px; /* 适中的字体大小，易于阅读 */
  line-height: 1.6; /* 行高1.6，增加可读性 */
  text-align: justify; /* 两端对齐，整齐美观 */
  position: absolute; /* 绝对定位，可以精确控制位置 */
  bottom: 40px; /* 距离底部20px */
  right: 20px; /* 距离右侧20px */
  z-index: 2; /* 较低层级，不会遮挡主要内容 */
  padding-bottom: 5px;
  margin-right: 5%;
  font-weight: 400;
}

/* 描述文字段落样式 - 段落间距和格式 */
.player-description p {
  margin: 0; /* 无外边距，紧凑布局 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* 文字阴影，增加可读性 */
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  /* 顶部横幅 */
  .top-banner {
    height: 30px;
  }

  .banner-text {
    font-size: 13px;
  }

  /* 主体内容 */
  .main-content {
    flex-direction: column;
    padding: 20px 15px;
    text-align: center;
    min-height: auto;
    padding-left: 15px;
  }

  /* 球员信息 */
  .position {
    font-size: 42px;
    margin-bottom: 15px;
  }

  .player-name {
    font-size: 20px;
    margin-bottom: 15px;
  }

  /* 球衣区域 */
  .jersey-section {
    width: 100%;
    margin-top: 20px;
  }

  .jersey-image {
    height: 150px;
    width: 100%;
  }

  .jersey-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 描述文字 */
  .player-description {
    position: static;
    max-width: 100%;
    margin: 15px 0;
    padding: 0;
    font-size: 13px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .top-banner {
    height: 28px;
  }

  .banner-text {
    font-size: 12px;
  }

  .main-content {
    padding: 15px 10px;
  }

  .position {
    font-size: 32px;
  }

  .player-name {
    font-size: 18px;
  }

  .jersey-image {
    height: 120px;
  }

  .player-description {
    font-size: 12px;
  }
}
</style>
