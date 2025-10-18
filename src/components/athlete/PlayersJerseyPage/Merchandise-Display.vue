<template>
  <!-- 商品展示容器 -->
  <div class="merchandise-container">
    <!-- 商品网格布局 -->
    <div class="product-grid">
      <div
        class="product-card"
        v-for="product in paginatedPlayerGoods"
        :key="product.id"
        @click="jumpToProductDetail(product)"
      >
        <!-- 商品图片区域 -->
        <div class="product-image">
          <img :src="product.image" alt="product.title" />
        </div>
        <!-- 商品信息区域 -->
        <div class="product-info">
          <!-- 动态显示商品标题 -->
          <h3 class="product-title">{{ product.title }}</h3>
          <!-- 动态显示商品价格 -->
          <p class="product-price">€ {{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
    <div class="pagination-container">
      <a-pagination
        :total="totalProductCount"
        :current="currentPageFromUrl"
        :page-size="itemsPerPageCount"
        @change="handlePageJump"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { byPlayer } from '../../../data/byplayer.js'

// route 存储当前页面的GPS信息，包含球员ID等参数
const route = useRoute()
const playerGoods = ref([]) // 创建一个响应式变量，用于存储商品数据，数据变化时自动更新视图

// onMounted 是页面加载完成后的回调函数，就像定时闹钟
onMounted(() => {
  // route.params.playerId 从地址栏提取球员ID
  const selectedPlayerId = route.params.playerId
  if (selectedPlayerId) {
    // 整句话意思：在所有球员中找到ID匹配的那一个
    const foundPlayer = byPlayer.find((player) => player.id == selectedPlayerId)
    // 如果找到了匹配的球员
    if (foundPlayer) {
      // foundPlayer.merchandise 是这个球员的商品数组
      playerGoods.value = foundPlayer.merchandise || []
    }
  }
})

// 处理分页区
const routerTool = useRouter() // 用来跳转页面
const currentRoute = useRoute() // 用来获取当前页面信息

// 每页显示的商品数量
const itemsPerPageCount = computed(() => {
  return 1 //每页显示35件商品
})
// 计算商品总数
const totalProductCount = computed(() => {
  return playerGoods.value.length
})
// 从网址中获取当前页码 从当前路由的 “查询参数” 里拿page的值 如果没有就默认第1页
const currentPageFromUrl = computed(() => {
  return parseInt(currentRoute.query.page) || 1 // parseInt 把拿到的参数转成数字'1'转成1
})
// 页面跳转函数 - 这是核心功能 newPageNumber 就是用户点击的新页码存放位置
const handlePageJump = (newPageNumber) => {
  console.log('用户要跳转到第', newPageNumber, '页')
  //使用新的页码更新网址
  routerTool.push({
    // routerTool是路由工具 push是跳转页面
    path: currentRoute.path, // 保持当前页面路径不变
    query: {
      ...currentRoute.query, // 保持当前页面查询参数不变
      page: newPageNumber, // 更新网址中的页码参数
    },
  })
}

// 计算当前页码的商品数据
const paginatedPlayerGoods = computed(() => {
  // 计算当前页码的商品数据
  const startIndex = (currentPageFromUrl.value - 1) * itemsPerPageCount.value
  const endIndex = startIndex + itemsPerPageCount.value //计算最后一个书架最后一本书的位置。
  // slice(startIndex, endIndex) 意思是：从第 startIndex 个开始，截取到第 endIndex 个之前。然后把这10本书返回展示
  return playerGoods.value.slice(startIndex, endIndex) // slice是数组的方法，用来截取数组
})

// 跳转到商品详情页的函数 - productItem是用户点击的商品对象
const jumpToProductDetail = (productItem) => {
  console.log('用户点击了商品:', productItem.title) // 调试信息，看看点击了哪个商品

  // 🎯 现在byplayer.js数据已经完整了，直接跳转即可！
  // 不需要再手动构造数据，因为ProductDetail页面会根据ID自动获取完整数据
  routerTool.push({
    path: `/product-detail/${productItem.id}`, // 跳转到商品详情页，传递商品ID
    query: {
      from: 'player-merchandise', // 📍 标记来源：来自球员商品页面
      playerId: route.params.playerId, // 🏷️ 额外传递球员ID，方便详情页知道来自哪个球员
    },
  })
}
</script>

<style scoped lang="less">
/* 商品展示整体容器 */
.merchandise-container {
  // width: 100%; /* 占满父容器宽度 */
  padding: 20px; /* 内边距留出呼吸空间 */
  box-sizing: border-box; /* 边框盒模型 */

  margin-right: 102px;
  margin-left: 102px;
}

/* 商品网格布局容器 */
.product-grid {
  display: flex; /* 弹性布局 */
  flex-wrap: wrap; /* 允许换行 */
  gap: 20px; /* 卡片之间的间距 */
  justify-content: flex-start; /* 左对齐排列 */
}

/* 单个商品卡片 */
.product-card {
  flex: 0 0 calc(33.333% - 14px); /* 占据1/3宽度，减去间距，一行显示3个 */
  background-color: white; /* 白色背景 */
  border-radius: 8px; /* 圆角边框 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 轻微阴影 */
  overflow: hidden; /* 隐藏超出内容 */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* 动画过渡 */
  cursor: pointer; /* 鼠标指针 */
}

/* 卡片悬停效果 */
.product-card:hover {
  transform: translateY(-5px); /* 向上浮动 */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15); /* 加深阴影 */
}

/* 商品图片区域 */
.product-image {
  // height: 460px; /* 固定高度 */
  // height: 571px; /* 占满容器高度 */
  padding: 45px;
  background-color: #f5f5f5; /* 浅灰色背景 */
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  // overflow: hidden; /* 隐藏超出部分 */
}

/* 商品图片 */
.product-image img {
  width: 373px; /* 占满容器宽度 */

  object-fit: cover; /* 保持比例裁剪 */
  object-position: center; /* 居中显示 */
  transition: transform 0.3s ease; /* 缩放动画 */
  // background-color: #e8f4f8; /* 淡蓝色背景 */
}

/* 图片悬停放大效果 */
.product-card:hover .product-image img {
  transform: scale(1.05); /* 轻微放大 */
}

/* 商品信息区域 */
.product-info {
  padding: 15px; /* 内边距 */
  text-align: left; /* 左对齐 */
}

/* 商品标题 */
.product-title {
  font-size: 16px; /* 字体大小 */
  font-weight: 400; /* 中等粗细 */
  color: #333; /* 深灰色 */
  margin: 0 0 8px 0; /* 下边距 */
  line-height: 1.4; /* 行高 */
  display: -webkit-box; /* 多行显示 */
  // -webkit-line-clamp: 2; /* 最多显示2行 */
  -webkit-box-orient: vertical; /* 垂直方向 */
  overflow: hidden; /* 隐藏超出文字 */
  text-overflow: ellipsis; /* 超出显示省略号 */
}

/* 商品价格 */
.product-price {
  font-size: 17px; /* 字体大小 */
  font-weight: 600; /* 粗体 */
  // color: #e74c3c; /* 红色价格 */
  margin: 0; /* 无外边距 */
  color: rgb(0, 24, 56);
}

/* 响应式设计 - 平板屏幕 */
@media (max-width: 1024px) {
  .product-card {
    flex: 0 0 calc(50% - 10px); /* 平板屏幕改为两列布局 */
  }
}

/* 响应式设计 - 手机屏幕 */
@media (max-width: 768px) {
  .merchandise-container {
    padding: 15px; /* 减少内边距 */
  }

  .product-grid {
    gap: 15px; /* 减少间距 */
  }

  .product-card {
    flex: 0 0 calc(50% - 7.5px); /* 两列布局 */
  }

  .product-image {
    height: 200px; /* 减小图片高度 */
  }

  .product-info {
    padding: 12px; /* 减少内边距 */
  }

  .product-title {
    font-size: 13px; /* 减小标题字体 */
  }

  .product-price {
    font-size: 15px; /* 减小价格字体 */
  }
}

/* 响应式设计 - 小屏手机 */
@media (max-width: 480px) {
  .product-card {
    flex: 0 0 100%; /* 单列布局 */
  }

  .product-image {
    height: 180px; /* 进一步减小高度 */
  }
}
/* 分页容器 */
.pagination-container {
  display: flex;
  justify-content: center;
  padding: 50px 24px 0 24px;
}

:deep(.arco-pagination) {
  display: flex;
  justify-content: center;
}
</style>
