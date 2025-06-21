<template>
  <div class="home-kit-section">
    <div class="kit-container">
      <div class="kit-image">
        <a href="#">
        <img src="../../assets/logo/mc.jpg" alt="曼城2025/26主场套件" />
      </a>
      </div>
    </div>
    <div class="kit-description">
        <h4 class="kit-title">将腰带带回家</h4>
        <p class="kit-text">在曼城历史上，我们的 2025/26 赛季主场球衣第一次采用了腰带——标志性的对角线条纹设计 外出日。与鲜明的 Sky Blue 搭配，并为下一代重新构想，它是与我们的过去的联系，也是对我们未来的致敬，并提醒我们在这里、球场内外都以不同的方式做事。</p>
        <a href="https://shop.mancity.com/ca/en/kits/our-2025-26-home-kit-range/" class="shop-now-btn">立即选购</a>
      </div>
  </div>
</template>

<script setup>
// 可以根据需要导入组件和功能
</script>

<style scoped lang="less">
.home-kit-section {
  width: 100%;
  // height: 424px;
  background-color: #fff;
  padding: 0;
  margin: 0;
}

.kit-container {
  // position: relative;
  width: 100%;
  overflow: hidden; /* 防止内容溢出 */

}
img{
  width: 100%;
  height: 424px;
  object-position: center; // 确保图片居中显示
  object-fit: cover; // 保持比例填充其
}

.kit-description {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
   padding-top: 15px;
    text-align: center;


  .kit-title {
    margin: 0;
    font-weight: bold;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 33px;
    color: #001838;
 }


  .kit-text {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 30px;
    // max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .shop-now-btn {
    display: inline-block;
    background-color: #001838;
    color: #fff;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0033a0;
    }
  }
}

// @media (max-width: 768px) {
//   .kit-description {
//     padding: 30px 15px;

//     .kit-title {
//       font-size: 32px;
//     }

//     .kit-text {
//       font-size: 14px;
//     }

//     .shop-now-btn {
//       padding: 12px 30px;
//       font-size: 14px;
//     }
//   }

</style>
