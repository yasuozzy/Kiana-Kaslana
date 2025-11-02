<template>
  <div class="merchandise-container">
    <!-- 商品网格容器，一行显示3个商品 -->
    <div class="product-grid">
      <!-- 第一行商品 -->
      <div
        class="product-card"
        v-for="product in filteredProducts"
        :key="product.id"
        @click="navigateToProductDetail(product)"
      >
        <div class="product-image">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-info">
          <h3 class="product-title">{{ product.name }}</h3>
          <p class="product-price">¥{{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    ·<a-pagination
      :total="totalProductCount"
      :current="currentPageFromUrl"
      :page-size="itemsPerPageCount"
      @change="handlePageJump"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { products } from '@/data/products.js'
import { computed } from 'vue' // 导入计算属性，就像智能计算器
import { useRouter, useRoute } from 'vue-router' //导入路由控制器

// 获取路由工具
const routerTool = useRouter() // 用来跳转页面
const currentRoute = useRoute() // 用来获取当前页面信息

// 这里定义cardProps，用来接收父组件传来的商品数量和分类信息
// defineProps是Vue3的新语法，用来定义组件可以接收哪些数据
const cardProps = defineProps({
  productCount: {
    type: Number,
    default: 72,
  },
  category: {
    type: String,
    default: '球衣',
  },
  // ⭐ 新增：接收子分类参数
  subCategory: {
    type: String,
    default: '全部',
  },
})

// 打印接收到的分类信息，方便调试
console.log(
  '🏷️ MerchandiseCard 接收到的分类:',
  cardProps.category,
  '子分类:',
  cardProps.subCategory,
)

// 创建路由控制器实例 - 就像拿到了"传送门遥控器"
const routerNavigator = useRouter()
// 🆕 商品点击跳转函数 - 这是"传送门"的核心逻辑 ,productItem会把当前这个商品的所有信息拿到
const navigateToProductDetail = (productItem) => {
  // 打印调试信息，看看用户点击了什么商品
  console.log('用户点击了商品:', productItem.name)
  // 用来跳转页面 - 就像按下"传送门"按钮
  routerNavigator.push({
    name: 'ProductDetail', // 这是告诉路由：“我的目的地是那个名叫 'ProductDetail' 的页面”
    params: {
      //   params它是一个对象，里面包含的是要镶嵌到URL路径里的参数,如何精确地找到你想要的数据。
      id: productItem.id, //这是商品ID，你把它带过去”。目标页面（商品详情页）就可以用这个 id 去数据库查询并显示对应的商品信息了。
    },
  })
}

// 控制按钮点击每页显示的商品数量 🔑 规则1 每个货架放多少件商品？
const itemsPerPageCount = computed(() => {
  return cardProps.productCount // 使用父组件传来的数量 比如：72件/货架
})

// ⭐ 筛选商品的核心函数 - 根据分类和子分类筛选
// 这个函数会被多个地方使用，所以单独提取出来
const filterProductsByCategory = () => {
  // 第一步：根据主分类筛选
  let filtered = products.filter((product) => {
    return product.category === cardProps.category
  })

  // 第二步：如果有子分类，并且子分类不是"全部"，再进行二次筛选
  if (cardProps.subCategory && cardProps.subCategory !== '全部') {
    filtered = filtered.filter((product) => {
      // 商品的 subCategory 字段要匹配子分类
      // 比如：商品是"儿童球衣"，子分类也是"儿童球衣"，才会被选中
      return product.subCategory === cardProps.subCategory
    })
  }

  // 第三步：如果筛选后没有商品，就显示该主分类的所有商品
  if (filtered.length === 0) {
    filtered = products.filter((product) => {
      return product.category === cardProps.category
    })
  }

  // 第四步：如果主分类也没有商品，就显示所有商品（兜底方案）
  if (filtered.length === 0) {
    filtered = products
  }

  console.log(
    `🔍 筛选结果: 分类="${cardProps.category}", 子分类="${cardProps.subCategory}", 找到 ${filtered.length} 件商品`,
  )
  return filtered
}

// 计算商品总数 🔑 关键变量2：总共有多少个商品
const totalProductCount = computed(() => {
  return filterProductsByCategory().length
})

// 从网址中获取当前页码// 🔑 关键变量3：当前在第几页
const currentPageFromUrl = computed(() => {
  // 从网址参数中获取page值，如果没有就默认第1页  比如：?page=3 就是第3页
  return parseInt(currentRoute.query.page) || 1
})

// 页面跳转函数 - 这是核心功能
const handlePageJump = (newPageNumber) => {
  console.log('用户要跳转到第', newPageNumber, '页')
  //使用路由跳转到新页面
  routerTool.push({
    path: currentRoute.path, // 这就像是"网页导航仪"，告诉浏览器要跳转到哪里
    query: {
      ...currentRoute.query, // 保持在当前页面路径不变（比如还是在/categories/球衣页面）
      page: newPageNumber, // 只更新网址中的页码参数（比如从?page=1变成?page=3）
    },
  })
}

// ⭐ 核心逻辑：根据分类和子分类筛选商品，并根据URL页码显示对应的商品
const filteredProducts = computed(() => {
  console.log('当前要显示的分类:', cardProps.category, '子分类:', cardProps.subCategory)

  // ⭐ 使用新的筛选函数，支持主分类和子分类
  const categoryProducts = filterProductsByCategory()

  // 第二步：计算分页
  // currentPageFromUrl.value: 当前是第几页（比如第2页）
  // - 1: 因为数组索引从0开始，第2页要从索引1开始
  // * itemsPerPageCount.value: 每页显示的商品数量（比如每页显示72件）
  const startIndex = (currentPageFromUrl.value - 1) * itemsPerPageCount.value
  const endIndex = startIndex + itemsPerPageCount.value // 计算结束位置

  // 第三步：截取当前页的商品
  // slice: 从数组中截取一部分，从 startIndex 到 endIndex
  const currentPageProducts = categoryProducts.slice(startIndex, endIndex)

  console.log(`📄 当前第${currentPageFromUrl.value}页，显示 ${currentPageProducts.length} 件商品`)
  return currentPageProducts
})
</script>

<style scoped>
.merchandise-container {
  padding: 20px;
  /* margin: 0 auto; */
  width: 100%;
}

.product-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 20px;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.product-image {
  overflow: hidden;
  background-color: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 16px;
}

.product-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .merchandise-container {
    padding: 15px;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 15px;
  }

  .product-card {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  }

  .product-card:hover {
    transform: translateY(-3px);
  }

  .product-image img {
    height: auto;
  }

  .product-info {
    padding: 12px;
  }

  .product-title {
    font-size: 13px;
    -webkit-line-clamp: 2;
  }

  .product-price {
    font-size: 15px;
  }

  :deep(.arco-pagination) {
    padding: 35px 15px 0 15px;
  }
}

@media (max-width: 480px) {
  .merchandise-container {
    padding: 12px;
  }

  .product-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .product-info {
    padding: 10px;
  }

  .product-title {
    font-size: 12px;
  }

  .product-price {
    font-size: 14px;
  }

  :deep(.arco-pagination) {
    padding: 30px 12px 0 12px;
  }
}

:deep(.arco-pagination) {
  display: flex;
  justify-content: center;
  padding: 50px 24px 0 24px;
}
</style>
