<template>
  <div class="add-to-cart-modal-overlay">
    <div class="add-to-cart-modal-content">
      <div class="modal-header">
        <h2 class="modal-title">已将商品添加到购物车</h2>
        <button class="modal-close-btn" @click="handleCloseClick">×</button>
      </div>
      <div class="modal-body">
        <div class="product-details">
          <!-- <img src="https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw136baca5/images/large/701228890001_pp_01_mcfc.png?sw=800&sh=800&sm=fit" alt="曼城哈兰德面巾" class="product-image"> -->
          <img :src="props.productData.image" alt="props.productDate.name" class="product-image" />
          <div class="product-info">
            <p class="product-name">{{ props.productData.name }}</p>
            <p class="product-attribute">
              尺码:{{ props.selectedSize !== 'null' ? props.selectedSize : '均码' }}
            </p>
            <p class="product-attribute">颜色:{{ props.productData.color || '默认' }}</p>
            <p class="product-price">£ {{ props.productData.price }}</p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="continue-shopping-btn" @click="handleCloseClick">继续购物</button>
        <button class="view-cart-btn" @click="handleViewCart">查看购物车</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router' //引入路由

const router = useRouter() // 2. 获取 router 实例

//创建一个新的方法来处理跳转
const handleViewCart = () => {
  // 关闭当前弹窗
  emit('close-modal')
  router.push({ name: 'ShoppingCart' }) // 4. 使用 router.push 进行跳转
}

const emit = defineEmits(['close-modal'])
const handleCloseClick = () => {
  emit('close-modal')
}
const props = defineProps({
  productData: {
    type: Object, // 接收父组件传递过来的商品数据 商品数据类型是对象
    require: true, // 必须传入商品数据
  },
  // 接收用户选的尺码, 父传子
  selectedSize: {
    type: String,
    default: 'null', // 默认值设置为'null'，与模板中的条件判断保持一致
  },
})
</script>

<style scoped>
/* 知识点：<style scoped> 表示这里的 CSS 样式只对当前组件有效，不会影响到其他组件。
   这就像给每个组件的样式加了一个“保护罩”，避免样式冲突。 */

/* 遮罩层样式 */
.add-to-cart-modal-overlay {
  position: fixed; /* 固定定位，让它相对于浏览器窗口定位 */
  top: 0;
  left: 0;
  width: 100%; /* 宽度占满整个屏幕 */
  height: 100%; /* 高度占满整个屏幕 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景，让背景内容变暗 */
  display: flex; /* 使用Flexbox布局，方便内容居中 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  z-index: 1000; /* 确保弹窗在最上层显示 */
}

/* 弹窗内容区域样式 */
.add-to-cart-modal-content {
  background-color: #fff; /* 白色背景 */
  border-radius: 8px; /* 圆角边框 */
  width: 500px; /* 固定宽度 */
  max-width: 90%; /* 最大宽度不超过90%，防止在小屏幕上过宽 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 阴影效果，增加立体感 */
  overflow: hidden; /* 隐藏溢出内容 */
}

/* 弹窗头部样式 */
.modal-header {
  display: flex; /* Flexbox布局 */
  justify-content: space-between; /* 标题和关闭按钮两端对齐 */
  align-items: center; /* 垂直居中对齐 */
  padding: 20px 25px; /* 内边距 */
  border-bottom: 1px solid #eee; /* 底部边框线 */
}

/* 弹窗标题样式 */
.modal-title {
  font-size: 20px; /* 字体大小 */
  font-weight: bold; /* 粗体 */
  color: #333; /* 字体颜色 */
  margin: 0; /* 移除默认外边距 */
}

/* 关闭按钮样式 */
.modal-close-btn {
  background: none; /* 无背景 */
  border: none; /* 无边框 */
  font-size: 24px; /* 字体大小 */
  color: #999; /* 字体颜色 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
  padding: 5px; /*内边距 */
  line-height: 1; /* 行高 */
  transition: all 0.3s ease; /* 让所有属性的变化都有动画效果，0.3秒完成 */

  transform-origin: center;
}

.modal-close-btn:hover {
  color: #333; /* 鼠标悬停时颜色变深 */
  transform: rotate(99deg);
}

/* 弹窗主体内容样式 */
.modal-body {
  padding: 25px; /* 内边距 */
}

/* 商品详情容器样式 */
.product-details {
  display: flex; /* Flexbox布局 */
  align-items: center; /* 垂直居中对齐 */
  gap: 20px; /* 元素之间的间距 */
}

/* 商品图片样式 */
.product-image {
  width: 100px; /* 固定宽度 */
  height: 100px; /* 固定高度 */
  object-fit: contain; /* 保持图片比例，完整显示 */
  border: 1px solid #eee; /* 边框 */
  border-radius: 4px; /* 圆角 */
  margin-top: -16px;
}

/* 商品文字信息容器样式 */
.product-info {
  flex-grow: 1; /* 占据剩余空间 */
}

/* 商品名称样式 */
.product-name {
  font-size: 18px; /* 字体大小 */
  font-weight: bold; /* 粗体 */
  color: #333; /* 字体颜色 */
  margin-bottom: 8px; /* 底部外边距 */
}

/* 商品属性（颜色、尺码）样式 */
.product-attribute {
  font-size: 14px; /* 字体大小 */
  color: #666; /* 字体颜色 */
  margin-bottom: 4px; /* 底部外边距 */
}

/* 商品价格样式 */
.product-price {
  font-size: 22px; /* 字体大小 */
  font-weight: bold; /* 粗体 */
  color: #333; /* 字体颜色 */
  margin-top: 15px; /* 顶部外边距 */
}

/* 弹窗底部按钮区域样式 */
.modal-footer {
  display: flex; /* Flexbox布局 */
  justify-content: space-around; /* 按钮之间平均分布空间 */
  padding: 20px 25px; /* 内边距 */
  border-top: 1px solid #eee; /* 顶部边框线 */
}

/* “继续购物”按钮样式 */
.continue-shopping-btn {
  background-color: #fff; /* 白色背景 */
  color: #007bff; /* 蓝色字体 */
  border: 1px solid #007bff; /* 蓝色边框 */
  padding: 12px 25px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
  font-size: 16px; /* 字体大小 */
  font-weight: bold; /* 粗体 */
  transition: all 0.3s ease; /* 过渡效果 */
  width: 48%; /* 宽度占一半 */
}

.continue-shopping-btn:hover {
  background-color: #e9f5ff; /* 鼠标悬停时背景变浅 */
}

/* “查看购物车”按钮样式 */
.view-cart-btn {
  background-color: #ffeb3b; /* 黄色背景 */
  color: #333; /* 黑色字体 */
  border: 1px solid #ffeb3b; /* 黄色边框 */
  padding: 12px 25px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
  font-size: 16px; /* 字体大小 */
  font-weight: bold; /* 粗体 */
  transition: all 0.3s ease; /* 过渡效果 */
  width: 48%; /* 宽度占一半 */
}

.view-cart-btn:hover {
  background-color: #ffe000; /* 鼠标悬停时背景变深 */
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .add-to-cart-modal-content {
    width: 95%;
    max-width: 450px;
  }

  .modal-header {
    padding: 15px 20px;
  }

  .modal-title {
    font-size: 18px;
  }

  .modal-body {
    padding: 20px;
  }

  .product-details {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-image {
    width: 100%;
    height: auto;
    max-width: 150px;
  }

  .product-name {
    font-size: 16px;
  }

  .product-price {
    font-size: 20px;
  }

  .modal-footer {
    flex-direction: column;
    padding: 15px 20px;
  }

  .continue-shopping-btn,
  .view-cart-btn {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .add-to-cart-modal-content {
    width: 100%;
    border-radius: 0;
  }

  .modal-header {
    padding: 12px 15px;
  }

  .modal-title {
    font-size: 16px;
  }

  .modal-body {
    padding: 15px;
  }

  .product-name {
    font-size: 15px;
  }

  .product-price {
    font-size: 18px;
  }
}
</style>
