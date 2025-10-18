<template>
  <div class="product-list-title">
    <h4 v-if="title">{{ title }}</h4>
    <div v-if="subtitle" class="carousel-sub-title" _msttexthash="14440842" _msthash="221">
      {{ subtitle }}<a href="" class="product-list-title-price">查看全部</a>
    </div>

    <!-- 🆕 加载状态提示 -->
    <div v-if="loading" class="loading-message">🔄 正在加载商品数据...</div>
    <!-- 🆕 API失败提示（可选） -->
    <div v-if="apiError && !loading" class="error-message">⚠️ 使用离线数据</div>

    <div class="product-list-content">
      <router-link
        v-for="product in displayProducts"
        :key="product.id"
        :to="'/product-detail/' + product.id"
        class="product"
      >
        <img :src="product.image" :alt="product.name" />
        <!-- 价格  .toFixed(2) 保留两位小数 -->
        <div class="carousel-product-info">€ {{ product.price.toFixed(2) }}</div>
        <div class="product-card-title">{{ product.name }}</div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { products } from '@/data/products' // 引入本地商品数据
import { getProducts } from '@/api/index.js' // 引入API请求商品函数
import { computed, ref, onMounted } from 'vue'
// 通过父传子到productDetail修改结构文本
const props = defineProps({
  title: {
    type: String, // 类型为字符串
    default: '25/26 客场套装', // 这是默认值 现在展示的文本
  },
  subtitle: {
    type: String, // 类型为字符串
    default: '伦敦的杰作', // 这是默认值 现在展示的文本
  },
  // 🆕 新增：外部传入的商品数据
  customProducts: {
    type: Array,
    default: null, // ：如果没传数据，就是空的
  },
  // 🆕 新增：显示多少个商品
  limit: {
    type: Number,
    default: 8,
    // 默认显示8个商品
  },
})

// 🆕 新增：API数据
const apiProducts = ref([]) // 创建一个空箱子，等会装API数据
const loading = ref(true) // 创建一个"加载中"的标志
const apiError = ref(false) // API是否失败的标志

// 第二步页面加载时获取 后端传过来的数据给 apiProducts
onMounted(async () => {
  //async是异步延迟执行   onmounted页面加载时执行
  try {
    //  try是尝试执行，如果成功就执行，如果失败就执行catch
    loading.value = true // 开始加载，显示"正在买菜中.
    const apiData = await getProducts() // 获取API数据 等待API返回数据
    apiProducts.value = apiData // 把返回的API数据装进apiProducts
    apiError.value = false // 标记：API成功了
  } catch (error) {
    //error 是错误信息为什么错误
    console.log('❌ API请求失败:', error)
    apiError.value = true // 标记：API失败了
  } finally {
    //不管成功还是失败，都要执行finally
    loading.value = false // 无论成功失败，都结束loading
  }
})

// 🧮 智能选择数据源（这是核心逻辑）
const displayProducts = computed(() => {
  let sourceProducts // 先创建一个空箱子 等会装数据

  // 第一优先级：外部传入的自定义数据
  if (props.customProducts && props.customProducts.length > 0) {
    //如果外部传入的自定义数据存在且长度大于0 才执行
    sourceProducts = props.customProducts // 把外部传入的自定义数据装进sourceProducts
    console.log('📦 使用外部传入的数据')
  }
  // 第二优先级：API数据（如果API成功且有数据
  else if (!apiError.value && apiProducts.value.length > 0) {
    //API成功且有数据 数据大于0才执行
    sourceProducts = apiProducts.value
    console.log('🌐 使用API数据')
  } else {
    // 第三优先级：本地备用数据（兜底方案）
    sourceProducts = products
    console.log('💾 使用本地备用数据')
  } //0, props.limit 意思是：从第0个开始，取limit个  就像：从一堆苹果里拿前8个
  return sourceProducts.slice(0, props.limit)
})
</script>
<style scoped lang="less">
.product-list {
  box-sizing: border-box;
  margin-top: 50px;

  background-color: #ffffff;
}
.product-list-title h4 {
  margin: 0;
  font-size: 16px;
  list-style: 16px;
}
.product-list-title {
  margin: 0;
  font-size: 16px;
  padding: 15px 20px 0 20px;
  background-color: #ffffff;
  box-sizing: border-box;
}
.product-list-content {
  width: 100%;

  // height: 370px;
  display: flex;
  overflow-x: auto; /* 让内容超出时可以横向滚动 */
  flex-wrap: nowrap; /* 防止换行 */
  gap: 10px; /* 卡片之间的间距 */
}
.carousel-sub-title {
  margin-bottom: 10px;
}
.product {
  // width: 100%;
  // height: 326px;
  flex: 0 0 auto; /* 防止伸缩 */
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 40px;
  box-sizing: border-box;
  display: flex; /* 添加flex布局 */
  flex-direction: column; /* 子元素垂直排列 */
  align-items: center; /* 水平居中 */

  /* 新增：去除下划线 */
  text-decoration: none;

  /* 新增：让文字颜色继承父元素，或者直接指定为黑色 */
  color: #242424;
}
.product img {
  // width: 100%;
  width: 320px;
  height: auto;
  object-fit: contain; /* 保持图片比例，完整显示在容器内 */
}
.carousel-product-info {
  font-size: 18px;
  color: #242424;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 10px;
  /* 断词处理 - 防止长单词/URL破坏布局 */
  word-wrap: break-word; /* 允许在单词内部换行，防止长单词溢出 */
  overflow-wrap: break-word; /* 现代浏览器推荐的属性，功能同上，更好的兼容性 */
  white-space: normal; /* 正常换行，空白符和换行符会被合并，文本会在必要时换行 */
  width: 320px; /* 与图片同宽，确保不会更宽 */
  max-width: 100%; /* 确保不超过父元素宽度 */
  text-align: center; /* 文本居中 */
}
.product-card-title {
  font-size: 16px;
  color: #242424;
  word-wrap: break-word;
  overflow-wrap: break-word; //
  white-space: normal; // 允许换行
  width: 320px; /* 与图片同宽，确保不会更宽 */
  max-width: 100%; /* 确保不超过父元素宽度 */
  text-align: center; /* 文本居中 */
  display: -webkit-box; /* 特殊显示模式，配合下面两个属性实现多行文本截断 */
  -webkit-line-clamp: 2; /* 最多换行显示2行 */
  -webkit-box-orient: vertical; /* 定义文本排列方向为垂直方向 */
  overflow: hidden; /* 超出部分隐藏 */
}
.cs-seek-container {
  width: 100%;
  height: 8px;
}
.product-list-title-price {
  float: right; /* 元素浮动到右侧 */
  font-size: 12px;
  color: #262422;
}
/* 滚动条样式 */
.product-list-content::-webkit-scrollbar {
  margin-top: 100px;
  height: 8px; /* 滚动条高度 */
  background: transparent; /* 滚动条轨道背景 */
}

.product-list-content::-webkit-scrollbar-thumb {
  background: #cacaca; /* 滚动条滑块颜色（你喜欢的绿色） */
  border-radius: 4px; /* 圆角 */
  transition: background 0.3s;
}

.product-list-content::-webkit-scrollbar-thumb:hover {
  background: #7f807f; /* 鼠标悬停时更深的绿色 */
}

.product-list-content::-webkit-scrollbar-track {
  background: #f0f0f0; /* 滚动条轨道颜色 */
  border-radius: 4px;
}
</style>
