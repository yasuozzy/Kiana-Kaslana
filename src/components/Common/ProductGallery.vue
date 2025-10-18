<template>
  <div class="product-gallery">
    <a href="#">
      <img
        src="https://store.chelseafc.com/content/ws/all/c498eb87-6ea9-47af-85d3-800ebe42dbf8__1600X900.png"
        alt=""
      />
    </a>
    <div class="image-text-container">
      <div class="image-text-title">The Varsity Collection</div>
      <div class="image-card-subtitle">探索运动与时尚的融合</div>
      <a href="#"> <button class="image-text-button">立即选购</button></a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.product-gallery {
  width: 100%;
  min-height: 637px; // 改为最小高度，让容器可以自适应
  margin-bottom: 40px; // 添加底部间距，避免被下方组件遮挡
  padding-top: 20px !important;
  padding: 40px;
  background-color: #ffffff;
  position: relative; /* 关键！ */
  //居中
  // display: flex;
  // justify-content: center;
  // align-items: center;
}
.image-text-container {
  position: absolute;
  top: 50px;
  left: 50px; /* 让文字区域叠加在图片左上角 */
  width: 446px;
  height: 386px;
  padding: 32px;
  background-color: transparent; // 透明背景
  display: flex;
  flex-direction: column; // 垂直排列
  justify-content: flex-start; // 顶部对齐
}

.image-text-title {
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.image-card-subtitle {
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.4;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.image-text-button {
  width: 88px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  border: 0px solid #000;
  color: #000000;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: auto; // 自动推到容器底部
}

.image-text-button:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}
img {
  width: 100%;
  height: 900px; // 改为100%适应容器高度，避免溢出
  object-fit: cover; // 保持图片比例
  display: block;
}
</style>
