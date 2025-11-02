<template>
  <div>
    <!-- 显示顶部导航栏的条件：如果不是从个人中心来的就显示 -->
    <TopBar v-if="!isInPersonalPage" />
    <HeaderMin />
    <MainNav />

    <!-- 购物车主要内容区域 -->
    <div class="cart-container">
      <!-- PayPal提示信息 -->
      <div class="paypal-notice">
        <span class="notice-icon">⚠</span>
        PayPal无法处理您的订单，请选择其他付款方式。
      </div>

      <!-- <button @click="handleClearCart" class="clear-cart-btn">清空购物车</button> -->

      <div class="cart-containergo">
        <!-- PayPal提示信息 -->
        <div class="paypal-noticego">
          <span class="notice-icongo">⚠</span>
          物品可能售罄，请立即订购！
        </div>
      </div>

      <!-- 购物车内容 -->
      <div class="cart-content">
        <!-- 左侧商品信息 -->
        <div class="product-section">
          <!-- 如果购物车为空 -->
          <div v-if="isCartEmpty" class="empty-cart-message">
            <h3>您的购物车是空的</h3>
            <p>快去添加一些商品吧！</p>
          </div>

          <!-- 如果购物车有商品，循环显示每个商品 -->
          <div v-else>
            <div
              v-for="(cartItem, index) in cartItems"
              :key="`cart-item-${cartItem.id}-${cartItem.selectedSize}-${cartItem.selectedColor}`"
              class="product-item"
            >
              <!-- 商品图片 -->
              <div class="product-image">
                <img :src="cartItem.image" :alt="cartItem.name" />
              </div>

              <!-- 商品详情 -->
              <div class="product-details">
                <h3 class="product-title">{{ cartItem.name }}</h3>
                <div class="product-options">
                  <div class="size-selector">
                    <label>尺寸</label>
                    <select
                      class="size-select"
                      :value="cartItem.selectedSize"
                      @change="handleSizeChange(index, $event.target.value)"
                    >
                      <!-- 先显示当前选中的尺码（即使它不在标准尺码列表中） -->
                      <option
                        v-if="
                          cartItem.selectedSize &&
                          !getProductSizes(cartItem).includes(cartItem.selectedSize)
                        "
                        :value="cartItem.selectedSize"
                      >
                        {{ cartItem.selectedSize }}
                      </option>

                      <!-- 然后显示该商品支持的所有标准尺码 -->
                      <option v-for="size in getProductSizes(cartItem)" :key="size" :value="size">
                        {{ size }}
                      </option>

                      <!-- 如果没有可用尺码，显示默认选项 -->
                      <option v-if="getProductSizes(cartItem).length === 0" value="均码">
                        均码
                      </option>
                    </select>
                  </div>
                  <div class="quantity-selector">
                    <label>数量</label>
                    <select
                      class="quantity-select"
                      :value="cartItem.quantity"
                      @change="handleQuantityChange(index, parseInt($event.target.value))"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>

                <!-- 商品描述 -->
                <div class="product-description">
                  品牌：{{ cartItem.brand || 'Nike' }} | 颜色：{{ cartItem.selectedColor }}
                </div>
                <div class="product-descriptiongo">
                  此商品在一个工作日内发货。请继续结账以选择运输方法和额外的运输时间。
                </div>
              </div>

              <!-- 商品价格 -->
              <div class="product-price">
                <span class="price"
                  >¥{{ (cartItem.price * cartItem.quantity).toFixed(2) }}
                  <button class="remove-btn" @click="handleRemoveItem(index)" title="移除商品">
                    ×
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧订单摘要 -->
        <div class="order-summary">
          <div class="summary-card">
            <h3 class="summary-title">
              有优惠券？
              <span class="expand-icon" @click="toggleCouponInput">+</span>
            </h3>

            <!-- 优惠券输入模块 (与summary-title相同尺寸和外观) -->
            <div v-if="showCouponInput" class="coupon-input-container">
              <div class="coupon-input-wrapper">
                <input
                  type="text"
                  class="coupon-input"
                  placeholder="请输入优惠券代码"
                  @keyup.enter="handleApplyCoupon"
                />
                <!-- @keyup.enter是回车事件回车执行,不要写成@keyup 这个事件会在每次按下并松开键盘上的任何按键时触发-->
              </div>
            </div>

            <div class="order-details">
              <h4>订单摘要</h4>
              <div class="price-row">
                <span>商品小计</span>
                <span>¥{{ cartTotalPrice }}</span>
              </div>
              <div class="price-row">
                <span>商品数量</span>
                <span>{{ cartItemsCount }} 件</span>
              </div>
              <div class="price-row total">
                <span>购物车合计</span>
                <span>¥{{ cartTotalPrice }}</span>
              </div>

              <!-- 新增：优惠券信息显示 使用了优惠卷才显示 -->
              <div v-if="appliedCoupon" class="price-row coupon-row">
                <span>优惠券 ({{ appliedCoupon }})</span>
                <!-- 优惠券金额  -->
                <span>-¥{{ discountAmount.toFixed(2) }}</span>
              </div>

              <div class="price-row total">
                <span>购物车优惠后价格</span>
                <!--appliedCoupon是  finalPric是 优惠券使用了优惠卷才显示 否则显示购物车总价 -->
                <span>¥{{ appliedCoupon ? finalPrice.toFixed(2) : cartTotalPrice }}</span>
              </div>
            </div>

            <!-- 付款按钮 -->
            <div class="payment-buttons">
              <button class="buy-now-btn" :disabled="isCartEmpty" @click="handleCheckout">
                🔒 立即购买
              </button>
              <button class="paypal-btn" :disabled="isCartEmpty">💳 PayPal付款</button>
            </div>

            <div class="security-notice">继续购物</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</template>

<script setup>
import TopBar from '@/components/layout/TopBar.vue'
import HeaderMin from '@/components/layout/HeaderMin.vue'
import MainNav from '@/components/layout/MainNav.vue'
import { validateCoupon, calculateDiscount } from '@/store/utils/couponManager.js'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex' // 使用 cartVuex状态管理
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { products } from '@/data/products.js'
import { getCartItems, updateCartQuantity, removeFromCart } from '@/api/caret.js'
import SiteFooter from '@/components/Footer/SiteFooter.vue'

const route = useRoute()
const router = useRouter() // 获取路由实例，用于页面跳转 比如说跳转到付款的

// 判断是不是从个人中心过来的（检查路线包不包含"/personal/"）
const isInPersonalPage = route.path.includes('/personal/')

// useStore - 获取Vuex仓库的"钥匙"
const store = useStore()

// 计算属性 - 从Vuex获取购物车数据 这些数据会随着购物车变化自动更新，就像"智能显示器"
// 1. 拿"购物车商品列表"（直接从仓库的"货架"上拿原始数据）
// store.state.cart.cartItemsList：仓库（store）→ 购物车模块（cart）→ 商品列表货架（cartItemsList）
const cartItems = computed(() => store.state.cart.cartItemsList)
// 2. 拿"商品总数量"（从仓库的"计算好的价签"上拿，不用自己算）
// store.getters['cart/cartItemsCount']：仓库→购物车模块的"智能计算器"（getters）→ 总数量结果
const cartItemsCount = computed(() => store.getters['cart/cartItemsCount'])
// 3. 拿"购物车总价"（同上，直接用仓库算好的结果）
const cartTotalPrice = computed(() => store.getters['cart/cartTotalPrice'])
// 4. 拿"购物车是否为空"（仓库算好的判断结果）
const isCartEmpty = computed(() => store.getters['cart/isCartEmpty'])

// handleSizeChange - 处理尺寸变化 当用户改变商品尺寸时调用这个方法
//触发时机：用户在下拉框选新尺寸时（对应页面里的 @change="handleSizeChange(index, $event.target.value)"）
const handleSizeChange = (itemIndex, newSize) => {
  // 给仓库管理员发指令："改购物车模块里的尺寸，参数是'哪件商品'和'新尺寸'"
  store.dispatch('cart/updateProductSize', {
    itemIndex, // 商品在购物车中的索引（比如第0件、第1件）
    newSize, // 用户选的新尺寸（比如L）
  })
}

// handleQuantityChange - 处理数量变化 当用户改变商品数量时调用这个方法
const handleQuantityChange = async (itemIndex, newQuantity) => {
  try {
    // 第一步：获取这个商品的ID（因为后端API需要购物车商品的ID）
    const cartItem = cartItems.value[itemIndex] //cartItems.value当前购物车的商品 [itemIndex]找到指定商品
    console.log('🔄 准备修改数量:', cartItem)

    // 获取购物车项ID（不是商品ID！）
    const cartItemId = cartItem.cartItemId //cartItem.cartItemId找到购物车项ID

    if (!cartItemId) {
      // 如果没有购物车项ID（旧数据），只更新本地
      console.warn('⚠️ 该商品没有购物车项ID，只更新本地数据')
      store.dispatch('cart/updateProductQuantity', {
        itemIndex,
        newQuantity,
      })
      return
    }

    console.log(`正在更新商品数量... ID: ${cartItemId}, 新数量: ${newQuantity}`)

    // 第二步：调用后端API updateCartQuantity要修改数量 cartItemId是要修改哪个商品 newQuantity要改成多少数量 await是等待操作完成
    const result = await updateCartQuantity(cartItemId, newQuantity)
    console.log('更新成功！', result)

    // 第三步：同时更新本地Vuex
    store.dispatch('cart/updateProductQuantity', {
      itemIndex,
      newQuantity,
    })
  } catch (error) {
    console.error('更新数量失败:', error)
    alert('更新失败，请重试')

    if (error.response && error.response.status === 404) {
      console.warn('⚠️ 后端找不到该商品，可能已被删除')
      alert('该商品可能已不存在，请刷新页面')
    } else {
      alert('修改失败，请重试')
    }
  }
}

// handleRemoveItem - 处理移除商品  当用户点击删除按钮时调用这个方法
const handleRemoveItem = async (itemIndex) => {
  //itemIndex是要删除哪个商品
  if (!confirm('确定要删除吗？')) {
    return // 用户点了"取消"，就不删除
  }

  try {
    // 第一步：获取所有商品的ID 找到指定位置的那个商品
    const cartItem = cartItems.value[itemIndex]
    console.log('🗑️ 准备删除商品:', cartItem)

    // ⭐ 关键：使用购物车项ID，不是商品ID！
    const cartItemId = cartItem.cartItemId // 注意这里改成了 cartItemId

    // 现在才能使用 cartItemId
    console.log(`📤 购物车项ID: ${cartItemId}`)

    if (!cartItemId) {
      // 如果没有购物车项ID（可能是之前本地添加的旧数据）
      console.warn('⚠️ 该商品没有购物车项ID，可能是本地数据，直接删除本地')
      store.dispatch('cart/removeProductFromCart', itemIndex)
      alert('商品已删除（本地）')
      return
    }

    // 第二步：调用后端API删除
    const result = await removeFromCart(cartItemId)
    console.log('删除成功！', result)

    // 第三步：同时删除本地Vuex里的数据
    store.dispatch('cart/removeProductFromCart', itemIndex)
    alert('商品已删除')
  } catch (error) {
    console.error('删除失败:', error)
    alert('删除失败，请重试')
  }
}

// handleCheckout - 处理结账  当用户点击立即购买时调用这个方法
const handleCheckout = () => {
  if (isCartEmpty.value) {
    //isCartEmpty 是 computed 变量，
    alert('购物车是空的，请先添加商品')
    return
  }
  // 跳转到结账页面
  router.push({ name: 'Checkout' })
}

const appliedCoupon = ref(null) // 当前使用的优惠券（开始是空的）
// const discountAmount = ref(0) //  开始是0优惠了多少钱
// const finalPrice = ref(0) // 开始是0最终价格

//处理优惠券输入
const showCouponInput = ref(false)

// 切换优惠券输入模块的显示状态
const toggleCouponInput = () => {
  showCouponInput.value = !showCouponInput.value //如果当前是隐藏的，就切换为显示的；如果当前是显示的，就切换为隐藏的
}

// 处理应用优惠券的逻辑
const handleApplyCoupon = () => {
  const couponInput = document.querySelector('.coupon-input') // 获取找到优惠券输入框
  //判断是否获取到了避免null  couponInput.value用户输入的 trim() 去掉首尾空
  if (couponInput && couponInput.value.trim()) {
    // 先获取用户输入的优惠券代码（这行代码的作用是去掉用户输入的优惠券代码两端的空格）
    const couponCode = couponInput.value.trim()

    // 检查优惠券是否有效（就像检查这张优惠券是不是真的）
    const coupon = validateCoupon(couponCode) //validateCoupon是验证优惠券的函数，couponCode是用户输入的优惠券代码

    if (coupon) {
      // 优惠券有效！
      appliedCoupon.value = couponCode // 把优惠券的名称赋值给appliedCoupon couponCode是优惠券代码
      const originalPrice = cartTotalPrice.value // 把购物车总价赋值给originalPrice cartTotalPrice.value就是总价

      //用优惠券计算打折后的价格 couponCode 是优惠券代码，originalPrice是原价
      finalPrice.value = calculateDiscount(couponCode, originalPrice)

      //算出省了多少钱（原价 - 折后价）  originalPrice是原价 - finalPrice.value 是折后价 赋值给discountAmount
      discountAmount.value = originalPrice - finalPrice.value

      // alert(`优惠券应用成功！您节省了 ¥${discountAmount.value.toFixed(2)} `)
      if (coupon.type === 'fixed') {
        // 如果优惠券是固定金额 coupon.name是优惠券的名称
        alert(`优惠券应用成功！${coupon.name}，为您节省了 ¥${discountAmount.value.toFixed(2)}`)
      } else {
        // 如果优惠券是折扣率
        //折扣优惠券（比如9折）
        const discountRate = coupon.discount * 10 + '折' // 计算折扣率
        alert(
          `优惠券应用成功！${coupon.name}（${discountRate}），为您节省了 ¥${discountAmount.value.toFixed(2)}`,
        )
      }
    } else {
      alert('优惠券代码无效，请检查后重试')
    }

    // 应用成功后可以清空输入框并隐藏输入模块
    couponInput.value = '' // 清空输入框
    showCouponInput.value = false // 隐藏输入模块
  }
}

// 响应式计算优惠金额 - 当购物车总价或优惠券变化时自动重新计算
const discountAmount = computed(() => {
  if (!appliedCoupon.value) return 0 // 没有优惠券就返回0
  const coupon = validateCoupon(appliedCoupon.value) // 获取优惠券信息
  if (!coupon) return 0 // 优惠券无效返回0

  const originalPrice = cartTotalPrice.value // 获取当前购物车总价
  if (coupon.type === 'fixed') {
    return coupon.discount // 固定金额优惠券 - 直接返回优惠金额
  } else {
    return originalPrice * coupon.discount // 百分比折扣 - 计算优惠金额
  }
})

// 响应式计算最终价格 - 当购物车总价或优惠券变化时自动重新计算
const finalPrice = computed(() => {
  if (!appliedCoupon.value) return cartTotalPrice.value // 如果没有优惠券就返回原价
  const good = validateCoupon(appliedCoupon.value) // 获取优惠券信息 把优惠券信息赋值给good validateCoupon是验证优惠券的函数，appliedCoupon.value是用户输入的优惠券代码

  if (!good) return cartTotalPrice.value // 优惠券无效返回原价
  const originalPrice = cartTotalPrice.value // 获取当前购物车总价 赋值给originalPrice
  // 计算优惠后价格 calculateDiscount是计算优惠后的价格函数，appliedCoupon.value是用户输入的优惠券代码，originalPrice是原价
  return calculateDiscount(appliedCoupon.value, originalPrice)
})

// 处理购物车尺码显示问题
const getProductSizes = (cartItem) => {
  // 从购物车商品数据中获取商品的所有尺码 p：临时变量，代表集合里的每个商品
  //p.id === cartItem.id：查找条件，意思是 “商品的 id 和购物车商品项的 id 一样”，就像用商品编号匹配
  const product = products.find((p) => p.id === cartItem.id)
  // 2. 如果找到商品且有尺码列表，返回尺码；否则返回空数组
  //先判断是否找到商品（product 存在 并且这个商品有尺码列表（product.sizes 存在）
  return product && product.sizes ? product.sizes : []
}

// 页面加载时获取购物车数据
onMounted(async () => {
  try {
    console.log('正在从后端获取购物车数据...')
    //进入页面 调用API获取购物车商品列表
    const response = await getCartItems() //先等待getCartItems()返回结果 赋值给response
    // 假设后端返回的数据格式是 { data: [...商品列表] }
    // 你需要根据你后端实际返回的数据格式来调整
    if (response && response.data && response.data.items) {
      const backendItems = response.data.items

      console.log(`✅ 从后端获取到 ${backendItems.length} 个商品`)

      // 转换后端数据格式为前端Vuex格式
      const formattedItems = backendItems.map((item) => ({
        id: item.productId, // 商品ID
        cartItemId: item.id, // ⭐ 购物车项ID（这个很重要！）
        name: item.productName, // 商品名称
        price: item.price, // 价格
        image: item.productImage, // 图片
        selectedSize: item.size || '均码',
        selectedColor: '默认',
        quantity: item.quantity,
      }))

      console.log('📋 格式化后的数据:', formattedItems)

      // 直接用后端数据替换本地数据（后端数据是权威的）
      store.state.cart.cartItemsList = formattedItems
      localStorage.setItem('shoppingCartData', JSON.stringify(formattedItems))

      console.log('✅ 购物车数据同步成功！')
    }
  } catch (error) {
    console.error('获取购物车失败:', error)

    if (error.response && error.response.status === 401) {
      alert('请先登录查看购物车')
    } else {
      // 如果后端获取失败，就用本地Vuex的数据
      console.log('使用本地购物车数据')
    }
  }
})

// 清空购物车
// const handleClearCart = async () => {
//   if (!confirm('确定要清空整个购物车吗？')) {
//     return
//   }
//   try {
//     alert('正在清空购物车...')

//     // 调用后端API
//     const result = await clearCart()
//     alert('清空成功！', result)

//     // 同时清空本地Vuex
//     store.commit('cart/CLEAR_CART')
//     alert('购物车已清空')
//   } catch (error) {
//     console.error('清空失败:', error)
//     alert('清空失败，请重试')
//   }
// }
</script>

<style scoped>
/* 购物车容器 - 这是整个购物车页面的最外层容器 */
.cart-container {
  max-width: 100%; /* 限制最大宽度，让页面在大屏幕上不会太宽 */
  /* margin: 0 auto; 水平居中显示 */
  padding: 20px; /* 内边距，让内容不贴边 */
  /* max-height: 385px; 移除高度限制，让内容完全显示 */
  font-family: Arial, sans-serif; /* 设置字体 */
}

/* PayPal提示信息 - 页面顶部的橙色警告条 */
.paypal-notice {
  background-color: #fff3cd; /* 浅黄色背景 */
  border: 1px solid #ffeaa7; /* 黄色边框 */
  color: #856404; /* 深黄色文字 */
  padding: 12px 16px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  margin-bottom: 20px; /* 下方间距 */
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  display: none;
}

/* 警告图标 - 提示信息前面的感叹号 */
.notice-icon {
  margin-right: 8px; /* 右边距 */
  font-weight: bold; /* 加粗 */
}
.cart-containergo {
  max-width: 100%; /* 限制最大宽度，让页面在大屏幕上不会太宽 */
  /* margin: 0 auto; 水平居中显示 */
  padding: 20px; /* 内边距，让内容不贴边 */
  /* max-height: 385px; 移除高度限制 */
  font-family: Arial, sans-serif; /* 设置字体 */
}
.paypal-noticego {
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* 下方间距 */
  color: #1fff62;
  font-weight: 600;
}

/* 购物车内容区域 - 包含左右两个主要部分 */
.cart-content {
  display: flex; /* 弹性布局，让左右两部分并排显示 */
  gap: 30px; /* 左右两部分之间的间距 */
  align-items: flex-start; /* 顶部对齐 */
}

/* 左侧商品区域 - 显示商品信息的部分 */
.product-section {
  /* flex: 2; 占据2/3的宽度 */
  /* width: 995px; */
  width: 1100px;
  padding-left: 60px;
  padding-right: 30px;
}

/* 单个商品项 - 每个商品的容器 */
.product-item {
  display: flex; /* 弹性布局，让图片、详情、价格横向排列 */
  gap: 20px; /* 各部分之间的间距 */
  padding: 20px; /* 内边距 */
  border: 1px solid #e0e0e0; /* 浅灰色边框 */
  border-radius: 8px; /* 圆角 */
  background-color: #fff; /* 白色背景 */
  margin-bottom: 20px;
}

/* 商品图片容器 - 包含商品图片 */
.product-image {
  flex-shrink: 0; /* 不允许缩小 */
  width: 180px;
  height: 180px;
}

/* 商品图片 - 实际的图片元素 */
.product-image img {
  width: 180px; /* 固定宽度 */
  height: 180px; /* 固定高度 */
  object-fit: cover; /* 保持比例裁剪 */
  border-radius: 4px; /* 小圆角 */
}

/* 商品详情区域 - 包含标题、选项、描述 */
.product-details {
  flex: 1; /* 占据剩余空间 */
}

/* 商品标题 - 商品名称 */
.product-title {
  font-size: 13px; /* 字体大小 */
  font-weight: 400; /* 字体粗细 */
  margin: 0 0 15px 0; /* 外边距，只有下边距 */
  color: #333; /* 深灰色文字 */
}

/* 商品选项容器 - 包含尺寸和数量选择器 */
.product-options {
  display: flex; /* 弹性布局 */
  gap: 20px; /* 选项之间的间距 */
  margin-bottom: 15px; /* 下边距 */
}

/* 尺寸选择器和数量选择器 - 通用样式 */
.size-selector,
.quantity-selector {
  display: flex; /* 弹性布局 */
  flex-direction: column; /* 垂直排列 */
  gap: 5px; /* 标签和选择框之间的间距 */
}

/* 选择器标签 - "尺寸"和"数量"文字 */
.size-selector label,
.quantity-selector label {
  font-size: 14px; /* 字体大小 */
  color: #666; /* 灰色文字 */
  font-weight: 500; /* 字体粗细 */
}

/* 选择框 - 尺寸和数量的下拉框 */
.size-select,
.quantity-select {
  padding: 8px 12px; /* 内边距 */
  border: 1px solid #ddd; /* 边框 */
  border-radius: 4px; /* 圆角 */
  background-color: #fff; /* 白色背景 */
  font-size: 14px; /* 字体大小 */
  min-width: 80px; /* 最小宽度 */
}

/* 商品描述 - 商品的详细介绍文字 */
.product-description {
  font-size: 14px; /* 字体大小 */
  color: #666; /* 灰色文字 */
  line-height: 1.5; /* 行高，让文字更易读 */
}
.product-descriptiongo {
  padding-top: 15px;
  font-size: 12px; /* 字体大小 */
  font-weight: 400;
  color: rgb(36, 126, 12);
}

/* 商品价格区域 - 包含价格和删除按钮 */
.product-price {
  display: flex; /* 弹性布局 */
  flex-direction: column; /*  垂直排列 */
  align-items: flex-end; /* 右对齐 */
  gap: 10px; /* 价格和按钮之间的间距 */
}

/* 价格文字 - 显示商品价格 */
.price {
  font-size: 18px; /* 字体大小 */
  font-weight: 600; /* 字体粗细 */
  color: #333; /* 深灰色文字 */
}

/* 删除按钮 - 移除商品的×按钮 */
.remove-btn {
  background: none; /* 无背景 */
  border: none; /* 无边框 */
  font-size: 20px; /* 字体大小 */
  color: #999; /* 灰色文字 */
  cursor: pointer; /* 鼠标指针 */
  padding: 5px; /* 内边距 */
  margin-left: 40px;
  border-radius: 50%; /* 圆形 */
  width: 30px; /* 固定宽度 */
  height: 30px; /* 固定高度 */
  /* display: flex; 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /*  水平居中 */
}

/* 删除按钮悬停效果 - 鼠标悬停时的样式 */
.remove-btn:hover {
  background-color: #f5f5f5; /* 浅灰色背景 */
  color: #666; /* 深一点的灰色文字 */
}

/* 右侧订单摘要区域 - 显示价格和付款按钮 */
.order-summary {
  /* flex: 0.7;  占据1/3的宽度 */
  width: 348px; /* 最小宽度 */
  /* height: 341px; 移除固定高度，让内容自适应 */
  margin-left: 30px;
  margin-right: 60px;
}

/* 摘要卡片 - 订单摘要的容器 */
.summary-card {
  /* width: 300px; 最小宽度 */
  /* height: 341px; */
  border: 1px solid #e0e0e0; /* 边框 */
  border-radius: 8px; /* 圆角 */
  padding: 20px; /* 内边距 */
  background-color: #fff; /* 白色背景 */
}

/* 摘要标题 - "有优惠券？"部分 */
.summary-title {
  display: flex; /* 弹性布局 */
  justify-content: space-between; /* 两端对齐 */
  align-items: center; /* 垂直居中 */
  font-size: 16px; /* 字体大小 */
  margin: 0 0 20px 0; /* 外边距 */
  padding-bottom: 15px; /* 下内边距 */
  border-bottom: 1px solid #eee; /* 下边框 */
}

/* 展开图标 - "+"号 */
.expand-icon {
  font-size: 18px; /* 字体大小 */
  color: #666; /* 灰色文字 */
  cursor: pointer;
}

/* 订单详情区域 - 包含价格明细 */
.order-details h4 {
  font-size: 16px; /* 字体大小 */
  margin: 0 0 15px 0; /* 外边距 */
  color: #333; /* 深灰色文字 */
  background-color: #fff;
}

/* 价格行 - 每一行价格信息 */
.price-row {
  display: flex; /* 弹性布局 */
  justify-content: space-between; /* 两端对齐 */
  margin-bottom: 10px; /* 下边距 */
  font-size: 14px; /* 字体大小 */
  color: #666; /* 灰色文字 */
}

/* 总计行 - 购物车合计那一行 */
.price-row.total {
  font-weight: 600; /* 字体粗细 */
  font-size: 16px; /* 字体大小 */
  color: #333; /* 深灰色文字 */
  padding-top: 10px; /* 上内边距 */
  border-top: 1px solid #eee; /* 上边框 */
  margin-top: 10px; /* 上外边距 */
}

/* 付款按钮容器 - 包含两个付款按钮 */
.payment-buttons {
  margin-top: 20px; /* 上外边距 */
  display: flex; /* 弹性布局 */
  flex-direction: column; /* 垂直排列 */
  gap: 10px; /* 按钮之间的间距 */
}

/* 立即购买按钮 - 黑色的主要按钮 */
.buy-now-btn {
  background-color: #333; /* 深灰色背景 */
  color: white; /* 白色文字 */
  border: none; /* 无边框 */
  padding: 12px 20px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  font-size: 16px; /* 字体大小 */
  cursor: pointer; /* 鼠标指针 */
  font-weight: 500; /* 字体粗细 */
}

/* 立即购买按钮悬停效果 */
.buy-now-btn:hover {
  background-color: #555; /* 稍浅的灰色 */
}

/* PayPal按钮 - 蓝色的PayPal付款按钮 */
.paypal-btn {
  background-color: #0070ba; /* PayPal蓝色 */
  color: white; /* 白色文字 */
  border: none; /* 无边框 */
  padding: 12px 20px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  font-size: 16px; /* 字体大小 */
  cursor: pointer; /* 鼠标指针 */
  font-weight: 500; /* 字体粗细 */
}

/* PayPal按钮悬停效果 */
.paypal-btn:hover {
  background-color: #005ea6; /* 深一点的蓝色 */
}

/* 安全提示 - 底部的安全信息 */
.security-notice {
  margin-top: 15px; /* 上外边距 */
  font-size: 12px; /* 小字体 */
  color: #999; /* 浅灰色文字 */
  text-align: center; /* 居中对齐 */
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .cart-container,
  .cart-containergo {
    padding: 10px;
  }

  .cart-content {
    flex-direction: column;
    gap: 20px;
  }

  .product-section {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  .product-item {
    flex-direction: column;
    padding: 15px;
  }

  .product-image {
    width: 100%;
    height: auto;
  }

  .product-image img {
    width: 100%;
    height: auto;
  }

  .product-options {
    flex-direction: row;
    gap: 15px;
  }

  .size-select,
  .quantity-select {
    min-width: auto;
  }

  .product-price {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .remove-btn {
    margin-left: 0;
  }

  .order-summary {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .summary-card {
    width: 100%;
  }

  .payment-buttons {
    margin-top: 15px;
  }
}

@media (max-width: 480px) {
  .cart-container,
  .cart-containergo {
    padding: 8px;
  }

  .product-item {
    padding: 12px;
  }

  .product-title {
    font-size: 12px;
  }

  .product-options {
    flex-direction: column;
    gap: 10px;
  }

  .price {
    font-size: 16px;
  }

  .summary-title {
    font-size: 14px;
  }

  .price-row {
    font-size: 13px;
  }

  .buy-now-btn,
  .paypal-btn {
    font-size: 14px;
    padding: 10px 15px;
  }
}
/* 优惠券输入模块容器 (与summary-title相同尺寸和外观) */
.coupon-input-container {
  display: flex; /* 弹性布局 */
  justify-content: space-between; /* 两端对齐 */
  align-items: center; /* 垂直居中 */
  font-size: 16px; /* 字体大小 */
  margin: 0 0 20px 0; /* 外边距 */
  padding-bottom: 15px; /* 下内边距 */
  border-bottom: 1px solid #eee; /* 下边框 */
}

/* 优惠券输入包装器 */
.coupon-input-wrapper {
  display: flex;
  gap: 10px;
  width: 100%;
}

/* 优惠券输入框 */
.coupon-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

/* 优惠券输入框聚焦效果 */
.coupon-input:focus {
  border-color: #0070ba;
}

/* 应用优惠券按钮 */
.apply-coupon-btn {
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
}

/* 应用优惠券按钮悬停效果 */
.apply-coupon-btn:hover {
  background-color: #555;
}
/* 优惠券行样式 - 显示优惠券信息 */
.coupon-row {
  color: #28a745; /* 绿色文字，表示优惠 */
  font-weight: 500; /* 稍微加粗 */
}

/* 优惠券行悬停效果 */
.coupon-row:hover {
  background-color: #f8f9fa; /* 浅灰色背景 */
}
</style>
