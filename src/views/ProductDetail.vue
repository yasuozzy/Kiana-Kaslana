<template>
  <div>
    <!-- 顶部组件 -->
    <TopBar />
    <HeaderMin />
    <MainNav :key="$route.fullPath" />

    <!-- 面包屑导航 -->
    <div class="txt">
      <ul>
        <li>
          <a href="">Chelsea</a>
        </li>
        <li>/</li>
        <li>
          <a href="">Chelsea 上衣</a>
        </li>
      </ul>
    </div>

    <!-- 中间是商品详情内容区域 -->
    <div class="product-container">
      <!-- 左侧区域包含图片 -->
      <div class="layout-column-left">
        <!-- 这个div用来包裹小图和大图，让它们并排显示 -->
        <div class="images-wrapper">
          <!-- 小图列表，保持不变 -->
          <div class="ds-slideshow">
            <!-- 为了防止产品数据还没加载完就访问 thumbnails 属性导致报错 确保product和thumbnails都存在   -->
            <div v-if="product && product.thumbnails">
              <div
                class="ds-slideshow-btn"
                :class="{ 'ds-slideshow-btn-selected': index === selectedThumbnailIndex }"
                v-for="(thumbnail, index) in product.thumbnails"
                :key="index"
                @click="selectImage(index)"
              >
                <img :src="thumbnail.url" :alt="thumbnail.name" />
              </div>
            </div>
          </div>

          <!-- 大图区域 -->
          <div class="main-image">
            <!-- 前面加: 表示这是一个动态属性，而不是死的 : 是 v-bind: 的缩写 -->
            <img :src="selectedImage" :alt="product.name" />
          </div>
        </div>
      </div>

      <!-- 右侧区域包含商品信息 -->
      <div class="layout-column-right">
        <!-- 商品信息内容 -->
        <div class="product-info">
          <!-- 商品标题 -->
          <h1 class="product-title">{{ product.name }}</h1>

          <!-- 品牌信息 -->
          <div class="product-brand">
            by <img src="../assets/logo/icons8-nike-64.png" alt="Nike" />
          </div>

          <!-- 价格信息 -->
          <div class="product-price">
            <span>您的价格：￥</span>
            <span class="price-value">{{ product.price.toFixed(2) }}</span>
          </div>

          <!-- 尺寸选择区域 -->
          <div class="size-section">
            <div class="size-header">
              <span>尺寸</span>
              <a href="#" class="size-chart">尺寸表</a>
            </div>

            <div class="size-options">
              <button
                class="size-btn"
                v-for="size in product.sizes"
                :key="size"
                :class="{ 'size-selected': selectedSize === size }"
                @click="selectSize(size)"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- 库存信息 -->
          <div class="stock-info">
            <span>有现货</span>- 此商品在2个工作日内发货。请继续结账以选择运输方法和额外的运输时间。
          </div>

          <!-- 添加到购物车按钮 -->
          <button class="add-to-cart-btn" @click="addToCart">添加到购物车</button>
          <button class="buy-now-btn">个性化定制</button>

          <!-- 替换原有的三个折叠面板 -->
          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
              <!-- 描述面板 -->
              <el-collapse-item title="描述" name="1">
                <div class="collapse-content">
                  这款切尔西 x
                  NFL合作款球衣代表了足球与美式橄榄球文化的完美融合，采用耐克最新的Dri-FIT技术，提供出色的透气性和舒适感。
                </div>
              </el-collapse-item>

              <!-- 详情面板 -->
              <el-collapse-item title="详情" name="2">
                <div>
                  <ul>
                    <li>官方授权Chelsea x NFL合作款球衣</li>
                    <li>采用100%可回收聚酯纤维面料</li>
                    <li>Dri-FIT技术帮助保持干爽和舒适</li>
                    <li>球员版比赛球衣，与球员比赛时穿着的款式相同</li>
                    <li>前胸印有切尔西队徽和NFL标志</li>
                    <li>标准剪裁适合大多数体型</li>
                    <li>可机洗</li>
                  </ul>
                </div>
              </el-collapse-item>

              <!-- 运输面板 -->
              <el-collapse-item title="运输" name="3">
                <div>
                  国际运输可能需要额外的3-7个工作日，具体取决于目的地国家。所有订单均通过安全跟踪的配送方式发送。
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>

    <!-- 产品列表 -->
    <div class="product-list-container">
      <!-- 🆕 修改这里：传递最近预览的商品数据 -->
      <ProductList
        title="最近预览过的"
        :subtitle="''"
        :customProducts="filteredRecentlyViewed"
        :limit="4"
      />
      <!-- :customProducts="filteredRecentlyViewed" 意思是：把我们筛选过的最近预览商品传给ProductList -->
      <!-- :limit="4" 意思是：最多显示4个商品 -->
    </div>

    <div class="product-list-container2">
      <!-- 这个不变，继续显示所有商品 -->
      <ProductList title="也许你会喜欢" :subtitle="''" />
    </div>
    <!-- 底部组 :productData="product"：把当前商品数据传给购物车弹窗 -->
    <AddToCartModal
      v-if="showAddToCartModal"
      :productData="product"
      @close-modal="showAddToCartModal = false"
      :selectedSize="selectedSize"
    />
    <!--:selectedSize="selectedSize"是用户选的尺码-->
    <SiteFooter />
  </div>
</template>

<script setup>
// 引入顶部和底部组件
import TopBar from '@/components/layout/TopBar.vue'
import HeaderMin from '@/components/layout/HeaderMin.vue'
import MainNav from '@/components/layout/MainNav.vue'
import SiteFooter from '@/components/Footer/SiteFooter.vue'
import ProductList from '@/components/Common/ProductList.vue'
import { products } from '@/data/products' // 引入商品数据
import { byPlayer } from '@/data/byplayer' // 🆕 引入球员商品数据
import { useRoute } from 'vue-router' // 引入路由
import { ref, computed, watch, onMounted } from 'vue' // 引入ref和计算属性computed
import { useStore } from 'vuex' // 引入vuex
import AddToCartModal from '@/components/Common/ShoppingCart/AddToCartModal.vue'
import { addToCart as addToCartAPI } from '@/api/caret.js' // 引入添加到购物车API as是别名 新的名字叫addToCartAPI

const store = useStore() // 调用vuex
const route = useRoute() //调用 获取路由参数
// const showAddToCartModal = ref(false) // 控制购物车弹窗是否显示

const productId = computed(() => route.params.id) // 获取路由参数中的商品ID（保持字符串格式，因为球员商品ID是字符串）

const product = computed(() => {
  // 🔍 智能商品查找函数 - 像侦探一样在两个数据库中搜索商品
  const targetId = productId.value

  // 📍 第一步：先在普通商品数据中查找（products.js）
  // 普通商品的ID是数字格式，需要转换
  const normalProduct = products.find((item) => item.id === parseInt(targetId, 10))
  if (normalProduct) {
    console.log('找到普通商品:', normalProduct.name)
    return normalProduct // 找到了就返回
  }

  // 📍 第二步：如果普通商品中没找到，就在球员商品中查找（byplayer.js）
  // 球员商品的ID是字符串格式，如 'm1_1', 'h2_2' 等
  for (const player of byPlayer) {
    if (player.merchandise) {
      // 确保球员有商品数据
      const playerProduct = player.merchandise.find((item) => item.id === targetId)
      if (playerProduct) {
        console.log('找到球员商品:', playerProduct.name, '来自球员:', player.name)
        return playerProduct // 找到了就返回
      }
    }
  }

  // 📍 第三步：如果两个地方都没找到，返回null
  console.warn('未找到商品，ID:', targetId)
  return null
})
const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}
// 移除了有问题的popstate事件监听器
// 这个监听器会在浏览器返回时强制刷新页面，导致Vue路由和组件状态丢失

// 让用户点击小图时可以切换大图
// 1. 添加一个变量来存储当前选中的缩略图索引
const selectedThumbnailIndex = ref(0) // 默认选中第一张图片，使用数字类型

// 2. 添加一个变量来存储当前显示的大图URL
const selectedImage = computed(() => {
  // 确保product和thumbnails存在，避免页面加载时出错
  if (product.value && product.value.thumbnails && product.value.thumbnails.length > 0) {
    // 如果有选中的缩略图索引，则显示对应的图片
    if (selectedThumbnailIndex.value !== null && selectedThumbnailIndex.value !== '') {
      return product.value.thumbnails[selectedThumbnailIndex.value].url
    }
    // 否则默认显示第一张图片
    return product.value.thumbnails[0].url
  }
  // 如果产品数据还未加载，返回空字符串
  return ''
})

// 3. 点击缩略图时切换大图的函数
const selectImage = (index) => {
  // 更新选中的缩略图索引
  selectedThumbnailIndex.value = index
  // 不需要手动设置selectedImage，因为它是计算属性，会自动更新
}
// 4  监听 product 变化，当 product 改变时，
// 将 selectedThumbnailIndex 重置为 0 防止首次进入点不动小图片
watch(product, () => {
  selectedThumbnailIndex.value = 0 // 强制转换成0
})

// 尺码选择区
const selectedSize = ref('null') //储存用户选择尺码一开始啥也没有
// 点击尺码按钮的处理函数
const selectSize = (size) => {
  selectedSize.value = size
}

// 颜色选择区（目前商品没有颜色选择，设置默认值）
const selectedColor = ref('默认色') // 储存用户选择的颜色，目前设置默认值

// 获取最近预览的商品
const recentlyViewedProducts = computed(() => {
  return store.state.recentViewed // 就像问银行："我的最近预览账户里有什么？"
})
//过滤掉当前商品（不在最近预览里显示正在看的商品）
const filteredRecentlyViewed = computed(() => {
  // filter就像筛子，把不要的东西筛掉 // item.id !== productId.value 意思是：ID不等于当前商品ID的才要
  return recentlyViewedProducts.value.filter((item) => item.id !== productId.value)
})

//监听商品变化，当进入新商品页面时自动添加到最近预览
watch(
  product,
  (newProduct) => {
    if (newProduct) {
      // 确保商品数据加载完了再添加
      console.log('添加商品到最近预览:', newProduct.name)
      // 调用store的方法添加商品
      store.dispatch('addToRecentlyViewed', {
        id: newProduct.id, //商品id
        name: newProduct.name, //商品名称
        price: newProduct.price, //商品价格
        image: newProduct.image, //商品图片
      })
    }
  },
  { immediate: true },
) //immediate: true 意思是：页面一加载就执行一次，不等变化,就像：一进门就喊"我来了"，不等别人问

window.addEventListener('popstate', () => {
  window.location.reload()
})

// 购物车弹窗相关 JSON.parse(...)将字符串转换为JavaScript对象或值因为 localStorage 只能存储字符串
//localStorage.getItem('showAddToCartModal') 从浏览器的本地存储中获取名为 'showAddToCartModal' 的值
const showAddToCartModal = ref(JSON.parse(localStorage.getItem('showAddToCartModal')) || false) //如果 localStorage 中没有这个项目，或者值为 null/undefined，就使用 false 作为默认值

// watch监听器函数购物车窗口变化了立即更新
watch(showAddToCartModal, (newValue) => {
  //newValue 这是目标人物变化后的新值,侦探会把这个新情报告诉你。showAddToCartModal 刚刚把值从 false 改成了 true！这是他现在的新值 (newValue)
  //JSON.stringify它负责把 JavaScript 的值（比如布尔值 true，对象、数组等）转换成字符串（String）
  localStorage.setItem('showAddToCartModal', JSON.stringify(newValue)) //就是侦探报告的新值，比如 true
})

// 防止购物弹窗出现时滚动条还能滑动,当组件被“挂载”到页面上（也就是组件第一次显示出来）之后，就会执行这里面的代码。
onMounted(() => {
  document.body.style.overflow = showAddToCartModal.value ? 'hidden' : '' // 判断是否打开水龙头的开关。hidden是关掉水龙头，''是打开水龙头让水流动。
})

// 现在的写法是（只是本地状态管理） 现在只是添加到Vuex 实际项目中是后端状态管理
// const addToCart = () => {
//   // 1. 先把商品真正加到购物车
//   store.dispatch('cart/addProductToCart', {
//     id: product.value.id,
//     name: product.value.name,
//     price: product.value.price,
//     image: product.value.image,
//     selectedSize: selectedSize.value,
//     selectedColor: selectedColor.value,
//     quantity: 1,
//   })

//   // 2. 然后再显示弹窗
//   showAddToCartModal.value = true
// }

//现在是结合后端api调用（实际项目中是后端状态管理）
const addToCart = async () => {
  // 第一步：检查用户有没有选尺码（如果你的商品需要选尺码的话）
  if (selectedSize.value === 'null' || !selectedSize.value) {
    alert('请先选择尺码！')
    return //直接结束，不继续往下执行
  }
  try {
    // 第二步：准备要传给后端的商品信息
    //try是尝试 如果成功就执行then 如果失败就执行catch
    const productInfo = {
      // 商品商品信息传给后端
      // productId: product.value.id,  // 商品ID
      // name: product.value.name,  // 商品名称
      // price: product.value.price,  // 商品价格
      // image: product.value.image,  // 商品图片
      // selectedSize: selectedSize.value,  // 用户选的尺码
      // selectedColor: selectedColor.value,  // 用户选的颜色
      // quantity: 1,  // 商品数量
      productId: product.value.id, // 商品ID
      quantity: 1, // 数量
      selectedSize: selectedSize.value, // 尺码
    }
    console.log('准备添加商品到购物车:', productInfo)

    // 第三步：调用后端API（注意这里用await等待结果）
    const result = await addToCartAPI(productInfo) //把商品信息发送给后端服务器保存 addToCartAPI是后端api productInfo是商品信息

    // 第四步：如果成功了，显示弹窗
    // 第四步：⭐ 关键！从后端返回的数据中提取购物车项ID
    let cartItemId = null
    if (result.data && result.data.items && result.data.items.length > 0) {
      // 找到刚刚添加的商品（通常是最后一个）
      const addedItem = result.data.items.find((item) => item.productId === product.value.id)
      if (addedItem) {
        cartItemId = addedItem.id // ⭐ 这就是购物车项ID！
        console.log('✅ 获取到购物车项ID:', cartItemId)
      }
    }

    // 第五步：把完整信息（包括购物车项ID）保存到本地Vuex
    store.dispatch('cart/addProductToCart', {
      id: product.value.id,
      cartItemId: cartItemId, // ⭐ 保存购物车项ID
      name: product.value.name,
      price: product.value.price,
      image: product.value.image,
      selectedSize: selectedSize.value,
      selectedColor: selectedColor.value,
      quantity: 1,
    })

    console.log('✅ 添加成功！')

    // 显示"已添加到购物车"弹窗
    showAddToCartModal.value = true
  } catch (error) {
    // 第五步：如果失败了，给用户看错误提示
    console.error('添加到购物车失败:', error)

    if (error.response) {
      // 后端返回了错误信息
      if (error.response.status === 401) {
        alert('请先登录！')
      } else if (error.response.status === 400) {
        alert('商品信息不完整，请重试')
      } else {
        alert('添加失败，请稍后再试')
      }
    } else {
      // 网络问题或者其他问题
      alert('网络连接失败，请检查网络')
    }
  }
}
</script>

<style scoped>
@import '@/styles/product-card.less';
.product-container {
  display: flex;
  width: 100%;
  /* 移除固定宽度，让其自适应内容或通过max-width控制 */
  padding: 0;
  box-sizing: border-box;
  background-color: #ffffff;
  /* 新增：确保内容不会超出容器 */
  overflow: hidden;
}

.layout-column-left {
  width: 63%;
  padding: 28px;
  padding-bottom: 0;
  padding-right: 0px;
  /* background-color: #001838; */
  flex-shrink: 0;
}

.layout-column-right {
  flex: 1;
  /* 移除或调整固定宽度，让其自适应 */
  display: flex;
  background-color: #ffffff;
  /* 关键：最大宽度 */
  /* 防止溢出 */
}

.product-info {
  /* 移除固定宽度，让其在 flex 容器中自适应 */
  width: 504px;
  /* 新增：让 product-info 填充 layout-column-right 的所有可用空间 */
  flex: 1;
  padding: 24px;
  padding-bottom: 0;
  /* flex-shrink: 0; */ /* 如果 flex: 1，则不需要 flex-shrink: 0 */
}

.txt {
  background-color: #ffffff; /* 与主容器背景色相同 */
}

.txt ul {
  margin: 0;
  padding: 24px;
  padding-bottom: 0px;
  display: flex;
  list-style: none;
  font-size: 14px;
  color: #000000; /* 白色文字 */
}

.txt ul li a {
  color: #000000; /* 白色文字 */
  text-decoration: none;
}

.ds-slideshow {
  width: 104px;
  margin-right: 20px; /* 与大图的间距 */
  height: 833px; /* 与大图高度一致 */
  display: block;
  overflow-y: scroll; /* 使用scroll而不是auto，确保始终有滚动功能 */
  /* 隐藏滚动条 - 所有浏览器通用方案 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

/* Chrome, Safari, Opera等webkit浏览器 */
.ds-slideshow::-webkit-scrollbar {
  width: 0px; /* 完全移除滚动条的宽度 */
  background: transparent; /* 透明背景 */
}

.ds-slideshow-btn {
  width: 100%;
  height: 100px;
  border-bottom: 0px solid #ffffff;
  margin-bottom: 24px;
  /* border: 2px solid #000000;   改为白色边框 */
  box-sizing: border-box; /* 确保边框计算在宽度内 */
  overflow: hidden; /* 确保内容不溢出 */
  border-radius: 10px;
}

.ds-slideshow-btn img {
  width: 100px;
  height: 96px;
  object-fit: cover;
  /* mix-blend-mode: multiply; 使图片与背景混合，去除白色背景 */
}

.ds-slideshow-btn-active {
  display: -webkit-flex;
}

/* 选中的缩略图按钮样式 */
.ds-slideshow-btn-selected {
  border: 2px solid #000000; /* 使用蓝色边框突出显示选中的缩略图 */
  box-shadow: 0 0 5px rgba(0, 102, 204, 0.5); /* 添加蓝色阴影效果增强视觉反馈 */
}

/* 添加这些CSS */
.images-wrapper {
  display: flex; /* 使用flexbox水平排列元素 */
  flex-direction: row; /*  确保是水平方向 */
}

.main-image {
  /* width: calc(100% - 10px);  减去缩略图宽度和间距 */
  height: 838px;
  /* background-color: #d91a1a; 与容器背景色相同 */
  display: flex;
  /* align-items: center;
  justify-content: center; */
}

.main-image img {
  width: 891px;
  height: 891px;
  /* height: 838px; */
  /* 新增：确保图片不会超出容器 */
  /* max-width: 100%;
  max-height: 100%; */
  /* mix-blend-mode: multiply; 使图片与背景混合，去除白色背景 */
  object-fit: contain; /* 保持图片比例 */
}

/* 商品标题样式 - 对应图片中"切尔西 x NFL耐克俱乐部世界杯客场球衣" */
.product-title {
  font-size: 22px; /* 大号字体确保标题突出 */
  font-weight: 600; /* 粗体显示增强重要性 */
  margin-bottom: 10px; /* 下方留出10px间距与品牌信息分隔 */
  line-height: 1.2; /* 行高稍微紧凑以适应多行标题 */
  color: #030303; /* 白色文字适应深色背景 */
}

/* 品牌展示区域 - 对应图片中"by Nike"部分 */
.product-brand {
  display: flex; /* 使用flex布局让品牌文字和logo并排 */
  align-items: center; /* 垂直居中对齐 */
  margin-bottom: 20px; /* 下方留出20px间距与价格区域分隔 */
  font-size: 18px; /* 适中字号确保可读性 */
  font-weight: 600;
}

/* 品牌logo样式 */
.product-brand img {
  margin-left: 5px; /* logo与by文字间隔5px */
  height: 20px; /* 控制logo高度为20px */
  vertical-align: middle; /* 确保与文字垂直对齐 */
  width: 40px;
  height: 30px;
}

/* 价格显示区域 - 对应图片中"您的价格：€122.00" */
.product-price {
  margin-bottom: 25px; /* 与下方尺寸选择区域间隔25px */
  font-size: 16px; /* 基础文字大小 */
  font-weight: 600;
  color: #000000; /* 白色文字适应深色背景 */
}

/* 价格数值突出显示 */
.price-value {
  font-weight: bold; /* 价格数字加粗显示 */
  font-size: 18px; /* 比基础文字稍大 */
}

/* 尺寸选择区域标题部分 - 对应图片中"尺寸"和"尺寸表"部分 */
.size-header {
  display: flex; /* 使用flex布局使左右两端对齐 */
  justify-content: space-between; /* 左侧显示"尺寸"，右侧显示"尺寸表" */
  margin-bottom: 15px; /* 与尺码按钮组间隔10px */
  font-size: 16px; /* 标准字号 */
  font-weight: 600;
}

/* 尺寸表链接样式 */
.size-chart {
  color: #000000; /* 白色文字 */
  text-decoration: none; /* 去除下划线 */
  border-bottom: 1px solid #000000; /* 添加底部边框代替下划线，更优雅 */
  font-weight: 400;
  font-size: 14px;
}

/* 尺码按钮组容器 - 对应图片中S、M、L、XL、2XL按钮区域 */
.size-options {
  width: 647px;
  /* height: 92px; */
  height: 100%;
  display: flex; /* 使用flex布局横向排列尺码按钮 */
  flex-wrap: wrap; /* 允许按钮换行显示 */
  gap: 11px; /* 按钮之间的间隔为10px */
  margin-bottom: 20px; /* 与库存信息区域间隔20px */
}

/* 尺码按钮样式 */

.size-btn {
  width: 125px;
  height: 50px;
  border: 1px solid #ccc; /* 浅灰色边框 */
  background-color: #fff; /* 白色背景 */
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
  font-size: 16px; /* 字体大小 */
  display: flex; /* 使用flex布局使文字居中 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  font-weight: 600;
  /*  确保所有相关属性都有过渡效果 */
  transition:
    background-color 0.7s ease,
    color 0.7s ease,
    border-color 0.7s ease,
    transform 0.7s ease;
}

.size-btn:hover {
  background-color: #000; /* 鼠标悬停时直接变为黑色 */
  color: #fff; /* 文字变为白色 */
  border-color: #000; /* 边框变为黑色 */
  transform: scale(1.05); /* 轻微放大效果 */
}

.size-btn:active {
  background-color: #000; /* 点击时背景色变为黑色 */
  color: #fff; /* 文字变为白色 */
  transition-duration: 0.1s; /* 点击时动画速度加快，提供更即时的反馈 */
}

.size-btn.size-selected {
  background-color: #000; /* 选中状态保持黑色背景 */
  color: #fff; /* 选中状态文字白色 */
  border-color: #000; /* 选中状态边框黑色 */
}

/* 库存信息区域 - 对应图片中"有现货-此商品在2个工作日内发货..."文字 */
.stock-info {
  font-size: 16px; /* 较小字号适合次要信息 */
  margin-bottom: 20px; /* 与购物车按钮间隔20px */
  line-height: 1.4; /* 行高增加提高多行文本可读性 */
  color: #000000; /* 白色文字适应深色背景 */
  font-weight: 500;
}

.stock-info span {
  font-size: 16px; /* 较小字号适合次要信息 */
  font-weight: 700;
}

/* 添加到购物车按钮 - 对应图片中黑色大按钮 */
.add-to-cart-btn {
  width: 100%; /* 按钮宽度100%撑满容器 */

  padding: 15px 0; /* 上下padding增加按钮高度 */
  background-color: #000; /* 黑色背景 */
  color: #fff; /* 白色文字 */
  border: none; /* 去除边框 */
  font-size: 16px; /* 适中字号 */
  font-weight: bold; /* 粗体文字增强可见性 */
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
  margin-bottom: 30px; /* 与下方折叠面板间隔30px */
}
.buy-now-btn {
  width: 100%; /* 按钮宽度100%撑满容器 */
  height: 52px;
  padding: 15px 0; /* 上下padding增加按钮高度 */
  background-color: #ffffff; /* 黑色背景 */
  color: #000000; /* 白色文字 */
  border: 1px solid #000;
  font-size: 16px; /* 适中字号 */
  font-weight: bold; /* 粗体文字增强可见性 */
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
  margin-bottom: 30px; /* 与下方折叠面板间隔30px */
}
.buy-now-btn:hover {
  background-color: #333;
  color: #fff;
}

/* 购物车按钮悬停效果 */
.add-to-cart-btn:hover {
  background-color: #333; /* 悬停时背景色变浅 */
}

/* 折叠面板容器 - 对应图片中"描述"、"详情"、"运输"三个折叠区域 */
.collapsible-section {
  border-bottom: 1px solid #ddd; /* 底部添加浅色分隔线 */
  margin-bottom: 10px; /* 面板之间间隔10px */
}

/* 折叠面板标题行 */
.collapsible-header {
  display: flex; /* 使用flex布局实现两端对齐 */
  justify-content: space-between; /* 左侧标题文字，右侧展开/折叠图标 */
  padding: 15px 0; /* 上下padding增加可点击区域 */
  cursor: pointer; /* 鼠标悬停显示手型光标 */
  font-weight: bold; /* 标题文字加粗 */
  color: #000000; /* 白色文字适应深色背景 */
}

/* 折叠/展开图标 */
.toggle-icon {
  font-size: 12px; /* 控制图标大小 */
}

/* 折叠面板内容区域 */
.collapsible-content {
  max-height: 0; /* 默认高度为0（收起状态） */
  overflow: hidden; /* 隐藏溢出内容 */
  transition: max-height 0.3s ease; /* 添加平滑过渡动画 */
  padding: 0 0 0 0; /* 收起状态下内边距为0 */
  color: #000000; /* 文字颜色改为黑色 */
}

/* 内容区域展开后的样式 */
.collapsible-content.expanded {
  padding-bottom: 15px; /* 展开状态下恢复内边距 */
}

/* 详情列表样式修改为黑色文字 */
.collapsible-content ul {
  padding-left: 20px;
  margin: 0;
  color: #000000;
}

/* 列表项样式修改为黑色文字 */
.collapsible-content li {
  margin-bottom: 5px;
  color: #000000;
}

/* 隐藏复选框 */
.toggle-checkbox {
  display: none;
}

/* Element Plus 折叠面板自定义样式 */
:deep(.el-collapse-item__header) {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  background-color: transparent; /* 去掉默认背景色 */
}

:deep(.el-collapse-item__content) {
  padding: 10px 0 15px;
  color: #000000;
  font-size: 14px;
}

:deep(.el-collapse-item__arrow) {
  font-size: 12px;
  margin-right: 0;
}

/* 修改列表样式 */
:deep(.el-collapse-item__content) ul {
  padding-left: 20px;
  margin: 0;
}

:deep(.el-collapse-item__content) li {
  margin-bottom: 5px;
  color: #000000;
}

/* 移除折叠面板默认的边框 */
:deep(.el-collapse) {
  border-top: none;
  border-bottom: none;
}

:deep(.el-collapse-item:last-child .el-collapse-item__header) {
  border-bottom: 1px solid #ddd;
}

/* 折叠面板之间的间距 */
:deep(.el-collapse-item) {
  margin-bottom: 10px;
}

.product-list-container {
  padding: 24px;
  padding-bottom: 10px;
  margin-top: 30px;
  margin-bottom: 80px; /* 调整这个值来控制两个列表之间的间距 */
}
.product-list-container2 {
  padding: 24px;
  padding-bottom: 10px;
  /* 如果需要，也可以添加 margin-top */
}

.lists-spacer {
  height: 40px; /* 根据需要调整这个高度 */
}
:deep(.product-list-title h4) {
  margin-bottom: 20px;
}
</style>
