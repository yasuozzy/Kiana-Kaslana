<template>
<div class="header-min">
  <!-- logo区域 -->
<div class="logo-img">
  <a href="">
  <img src="https://store.chelseafc.com/content/assets/__0-182849247423.2669.svg" alt="" url= "https://store.chelseafc.com/content/assets/__0-182849247423.2669.svg">
  </a>
</div>

<div class="header-min-content">
  <a-space direction="vertical" size="large" class="search-input">
    <a-input-search placeholder="我能帮您找到什么?" search-button  />
  </a-space>
</div>
</div>
</template>

<script setup>
// import { ref } from 'vue'
// const input = ref('')/

</script>

<style scoped lang="less">
.header-min{
  background-color: #001489;
  width: 100%;
  height: 120px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.logo-img img{
  width: 267px;
  height: 80px;
  padding: 20px;
}
.logo-img a{
  margin: auto;
  display: block;
  height: 21px;
}
.logo-img {
  width: 366px;
  height: 120px;

}
.search-input {
  width: 580px !important;
  padding-left: 4px;
  padding-right: 4px;
}

/* 增大输入框和搜索按钮的大小 */
:deep(.arco-input-wrapper) {
  height: 39px !important;
}

:deep(.arco-input) {
  font-size: 16px !important;
  // height: 34px !important;
}

/* 搜索按钮变为白色背景 */
:deep(.arco-btn.arco-input-search-btn) {
  background-color: #ffffff !important;
  color: #001489 !important; /* 可选：按钮图标颜色适应白底 */
  border-color: #ffffff !important; /* 可选：边框也设为白色 */
  height: 39px !important;
}
:deep(.arco-btn-icon){
  font-size: 20px !important;
  padding-right: 5px;
}
:deep(.arco-input.arco-input-size-medium){
  font-size: 12.5px !important;
}
</style>