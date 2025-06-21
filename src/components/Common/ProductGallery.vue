<template>
   <div class="product-gallery">
   <a href="#">
      <img src="https://store.chelseafc.com/content/ws/all/c47c61e1-b9c1-4f98-8187-6f47a75efe28__3200X1800.png" alt="">
    </a>
    <div class="image-text-container">
     <a href="#">
      <button class="image-text-button"> 立即选购</button></a>
    </div>
   </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.product-gallery {
  width: 100%;
  height: 637px;
  margin-top: 20px;
  background-color: #ca0000;
  position: relative; /* 关键！ */
}
.image-text-container {
  position: absolute;
  top: 200px; left: 0; /* 让绿色盒子叠加在图片左上角 */
  width: 446px;
  height: 386px;
  padding: 32px;
  background-color: #33cb00;
  z-index: 2; /* 保证在图片上方 */
  background-color: transparent; // 透明背景
}
.image-text-button{
  position: absolute;
  left: 32px;
  bottom: 35px;
  width: 88px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  border: 0px solid #000;
  color: #000000;
  background-color: #ffffff;
}
img{
  width: 100%;
  height: 637px;
  display: block;
}
</style>