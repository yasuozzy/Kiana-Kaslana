<template>
  <div class="product-list-content">
    <div class="product" v-for="(item, index) in products" :key="index">
      <a href="#">
        <img :src="item.image" :alt="item.title" />
      </a>
      <div class="carousel-product-info">{{ item.price }}</div>
      <div class="product-card-title">{{ item.title }}</div>
    </div>
    <div class="carousel-arrow-container">
      <button class="left">左</button>
      <button class="right">右</button>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    image:
      'https://store.chelseafc.com/content/ws/all/7ca00056-6a8a-4c63-b5b5-b414dc298c4a__1600X2160.png?w=1600',
    title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
    price: '147.00 欧元',
  },
  {
    image:
      'https://store.chelseafc.com/content/ws/all/7ca00056-6a8a-4c63-b5b5-b414dc298c4a__1600X2160.png?w=1600',
    title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
    price: '147.00 欧元',
  },
  {
    image:
      'https://store.chelseafc.com/content/ws/all/7ca00056-6a8a-4c63-b5b5-b414dc298c4a__1600X2160.png?w=1600',
    title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
    price: '147.00 欧元',
  },
  {
    image:
      'https://store.chelseafc.com/content/ws/all/7ca00056-6a8a-4c63-b5b5-b414dc298c4a__1600X2160.png?w=1600',
    title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
    price: '147.00 欧元',
  },
  {
    image:
      'https://store.chelseafc.com/content/ws/all/7ca00056-6a8a-4c63-b5b5-b414dc298c4a__1600X2160.png?w=1600',
    title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
    price: '147.00 欧元',
  },
  {
    image:
      'https://store.chelseafc.com/content/ws/all/7ca00056-6a8a-4c63-b5b5-b414dc298c4a__1600X2160.png?w=1600',
    title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
    price: '147.00 欧元',
  },
  {
    image:
      'https://store.chelseafc.com/content/ws/all/7ca00056-6a8a-4c63-b5b5-b414dc298c4a__1600X2160.png?w=1600',
    title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
    price: '147.00 欧元',
  },
  {
    image:
      'https://store.chelseafc.com/content/ws/all/7ca00056-6a8a-4c63-b5b5-b414dc298c4a__1600X2160.png?w=1600',
    title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
    price: '147.00 欧元',
  },
]
</script>

<style scoped lang="less">
@import '@/styles/product-card.less';
.product-list-content {
  position: relative;
  padding: 15px;
  display: flex;
  // flex-wrap: wrap; // 允许换行，这样超过4个会自动换到下一行
  gap: 15px; // 卡片之间的间距
  justify-content: space-between; // 均匀分布
}
.product {
  width: calc(25% - 12px); // 一行4个，每个占25%宽度，减去间距
  flex: 0 0 auto; // 防止伸缩
  box-sizing: border-box;
  margin-bottom: 20px;
}
.product img {
  width: 100%; // 图片宽度100%适应卡片
  height: 405px;
  object-fit: cover; // 保持图片比例，裁剪显示
}

.product {
  width: calc(25% - 12px); // 默认一行4个
}

.carousel-arrow-container {
  line-height: 28px;
}

.carousel-arrow-container .left,
.carousel-arrow-container .right {
  position: absolute;
  bottom: 50%;
  transform: translateY(50%); /* 垂直居中 */
  width: 40px; /* 设置宽度 */
  height: 40px; /* 设置高度 */
  border: 0;
  // border-radius: 50%; /* 圆形按钮 */
  background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  cursor: pointer; /* 鼠标指针变为手型 */
  display: flex;
  align-items: center;
  justify-content: center; /* 内容居中 */
  z-index: 10; /* 确保按钮在产品卡片上方 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.carousel-arrow-container .left {
  left: 30px;
}

.carousel-arrow-container .right {
  right: 30px;
}

/* 添加悬停效果 */
.carousel-arrow-container .left:hover,
.carousel-arrow-container .right:hover {
  background-color: rgba(255, 255, 255, 1); /* 悬停时完全不透明 */
}

@media screen and (max-width: 992px) {
  .product {
    width: calc(33.33% - 12px); // 平板上一行3个
  }
}

@media screen and (max-width: 768px) {
  .product {
    width: calc(50% - 10px); // 手机上一行2个
  }

  .product-list-content {
    padding: 10px;
    gap: 10px;
  }

  .product img {
    height: 280px;
  }

  .carousel-arrow-container .left {
    left: 10px;
  }

  .carousel-arrow-container .right {
    right: 10px;
  }
}

@media screen and (max-width: 480px) {
  .product {
    width: 100%;
  }

  .product-list-content {
    flex-direction: column;
    padding: 8px;
  }

  .product img {
    height: 320px;
  }

  .carousel-arrow-container .left,
  .carousel-arrow-container .right {
    width: 35px;
    height: 35px;
  }
}
</style>
