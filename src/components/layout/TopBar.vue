<template>
  <div class="top-bar">
    <ul class="top-bar-list">
      <li><a href="">礼品卡</a></li>
      <li><a href="">跟踪订单</a></li>
      <li><a href="">帮助</a></li>

      <li>
        <router-link to="/login">我们的账户</router-link>
      </li>

        <el-dropdown trigger="click">
          <span class="top-bar-link">
        语言<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleClick ">Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
        <el-dropdown trigger="click">
          <span class="top-bar-link">
        欧元<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </ul>
    <div class="top-bar-cart">
        <i class="iconfont icon-gouwuche"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
  alert('button click')
}
</script>

<style scoped lang="less">

.top-bar {
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
  padding-left: 0px;
}

.top-bar-item{
  display: inline-flex;
  align-content: center;
  width: 50px;
  font-size: 14px;
}
.top-bar-item-2{
 padding-right: 12px;
}
.top-bar-cart{
  height: 40px;
  width: 55px;
  line-height: 35px;
  text-align: center;
  background-color: #001489;
  position: absolute;
  right: 0;
  top: 0;
}
.top-bar-list{
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none; // 去掉列表前面的点
  // // background-color: #d62525;
  padding: 0;
 margin: 0;
  transform: translateX(-70px);
}
.top-bar-list li{
  margin-right: 20px;
  align-items: center;
  display: flex;
  height: 100%;
  font-size: 9px;
  padding-left: 10px;
  padding-right: 15px;
  margin: 0;

}
.top-bar :deep(.el-button) {
  background: transparent !important;
  border: none !important;
  color: #222 !important;
  box-shadow: none !important;
  height: 40px;
  line-height: 50px;
  // padding: 0 10px;
  font-size: 14px;
  font-weight: normal;
  border-radius: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none !important;
}

.top-bar :deep(.el-button):hover {
  color: #222 !important;
  background: transparent !important;
}

.top-bar :deep(.el-button:focus),
.top-bar :deep(.el-button:active) {
  outline: none !important;
  box-shadow: none !important;
}

.top-bar :deep(.el-icon) {
  color: inherit !important;
  font-size: 12px !important;
}
.top-bar-list a {
  text-decoration: none;
  color: #000;
  font-size: 12px;
}

.top-bar-link {
  color: #222;
  font-size: 11.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  background: transparent;
  border: none;
}
.top-bar-link:active,
.top-bar-link:focus,
.top-bar-link:hover {
  color: #222;
  background: transparent;
  outline: none;
}
.body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.el-dropdown-menu{
padding: 0 !important;

}
:deep(.el-dropdown__popper) {
  position: absolute !important;
  left: 0 !important;
  top: 40px !important;
  margin-top: 0 !important;
  inset: unset !important;
}
</style>
