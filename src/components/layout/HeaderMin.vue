<template>
  <div class="header-min">
    <!-- logo区域 -->
    <div class="logo-img">
      <a href="">
        <img
          src="https://store.chelseafc.com/content/assets/__0-182849247423.2669.svg"
          alt=""
          url="https://store.chelseafc.com/content/assets/__0-182849247423.2669.svg"
        />
      </a>
    </div>

    <div class="header-min-content">
      <!-- 🔑 新增一个包裹容器，让下拉框相对于它定位 -->
      <div class="search-container">
        <a-space
          direction="vertical"
          size="large"
          class="search-input"
          :class="{ 'has-suggestions': showSuggestions }"
        >
          <!-- @search：监听 "搜索动作"（比如用户点了搜索按钮，或按了回车键） -->
          <!-- @press-enter 是前端框架 封装的「回车键监听指令」 监听「回车键（Enter 键）的按下行为」-->
          <a-input-search
            v-model="searchKeyword"
            placeholder="我能帮您找到什么?"
            search-button
            @search="handleSearch"
            @press-enter="handleSearch"
          />
        </a-space>
        <!-- 新增：建议列表（下拉框） -->
        <!-- v-if 就像"开关"，showSuggestions 为 true 才显示 -->
        <div v-if="showSuggestions" class="suggestions-dropdown">
          <!-- v-for 就像"循环打印"，把 suggestions 数组里的每一项都画出来 -->
          <div
            v-for="(item, index) in suggestions"
            :key="index"
            class="suggestion-item"
            @click="selectSuggestion(item)"
          >
            <span class="suggestion-content">
              <span class="suggestion-text">{{ item.text }}</span>
              <i class="iconfont icon-yifu suggestion-icon"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { watch } from 'vue' // watch 就像"监控器"
import { getSearchSuggestions, searchProducts } from '@/api/index.js'

// ✅ 这是杯子，用来装用户输入的关键词
const searchKeyword = ref('')
// watch 是"监控器"，它会一直盯着 searchKeyword
watch(searchKeyword, (newValue) => {
  // newValue 就是用户最新输入的内容
  console.log('用户刚打了：', newValue)

  // 调用一个函数去获取建议
  getSuggestions(newValue)
})

// 用一个变量存储建议列表
const suggestions = ref([]) // 空数组，等会儿装建议数据
const showSuggestions = ref(false) // 控制是否显示下拉框

// 获取建议的函数
const getSuggestions = (keyword) => {
  // 如果用户输入为空，就不显示建议
  if (!keyword || keyword.trim() === '') {
    suggestions.value = [] // 清空建议
    showSuggestions.value = false // 隐藏下拉框
    return
  }

  // 调用API（就像打电话问管理员）
  getSearchSuggestions(keyword)
    .then((response) => {
      //打来盒子response 从盒子里拿出手提袋response.data response.data.suggestions  从手提袋里拿出塑料袋（这才是苹果！）
      suggestions.value = response.data.suggestions
      showSuggestions.value = true // 显示下拉框
    })
    .catch((error) => {
      console.log('❌ 获取建议失败：', error)
      suggestions.value = []
      showSuggestions.value = false
    })
}
// ✅ 新增：搜索函数（应该加在这里）
const handleSearch = () => {
  console.log('🔍 用户搜索：', searchKeyword.value)

  // 检查是否为空
  if (!searchKeyword.value || searchKeyword.value.trim() === '') {
    console.log('⚠️ 请输入搜索内容')
    return
  }

  // 调用搜索API
  searchProducts(searchKeyword.value)
    .then((response) => {
      console.log('✅ 搜索成功！', response.data)
    })
    .catch((error) => {
      console.log('❌ 搜索失败：', error)
    })
}

// 用户点击某个建议时触发
const selectSuggestion = (item) => {
  // 把建议填到搜索框里
  searchKeyword.value = item.text

  // 隐藏下拉框
  showSuggestions.value = false
  // 立即执行搜索
  handleSearch()
}
</script>

<style scoped lang="less">
.header-min {
  background-color: #001489;
  width: 100%;
  height: 120px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #001489;
  width: 100%;
}
// .logo-img {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
.logo-img img {
  // width: 267px;
  width: 100%;
  height: 118px;
  // height: 100%;
  padding: 20px;
}
.logo-img a {
  margin: auto;
  display: block;
  height: 21px;
}
.logo-img {
  width: 366px;
  height: 120px;
}

/* 🔑 新增：搜索容器，用于相对定位 */
.search-container {
  position: relative; /* 让下拉框相对于这个容器定位 */
  margin-left: 100px; /* 左边距 */
}

.search-input {
  width: 600px !important;
  height: 45px;
  padding-left: 4px;
  padding-right: 4px;
}

/* 默认状态：四个角都是圆角（椭圆形） */
:deep(.arco-input-outer) {
  border-radius: 20px !important; /* 四个角都设置圆角 */
  overflow: hidden; /* 确保内部元素也遵循圆角 */
  transition: border-radius 0.2s ease; /* 平滑过渡动画 */
}

/* 当有下拉建议时：上面圆角，下面直角 */
.search-input.has-suggestions :deep(.arco-input-outer) {
  border-radius: 20px 20px 0 0 !important; /* 上圆下直 */
}

/* 增大输入框和搜索按钮的大小 */
:deep(.arco-input-wrapper) {
  height: 39px !important;
}

:deep(.arco-input) {
  font-size: 16px !important;
}

// /* 搜索按钮变为白色背景 */
:deep(.arco-btn.arco-input-search-btn) {
  background-color: #ffffff !important;
  color: #001489 !important; /* 可选：按钮图标颜色适应白底 */
  border-color: #ffffff !important; /* 可选：边框也设为白色 */
  height: 39px !important;
}
:deep(.arco-btn-icon) {
  font-size: 20px !important;
  padding-right: 5px;
}
:deep(.arco-input.arco-input-size-medium) {
  font-size: 12.5px !important;
}
:deep(.arco-input-wrapper) {
  border-bottom: none;
}
/* ===== 隐藏蓝色竖条 ===== */
/* 去掉输入框的所有边框 */
:deep(.arco-input-wrapper) {
  border: none !important;
  box-shadow: none !important;
}

/* 去掉搜索按钮的左边框 */
:deep(.arco-btn.arco-input-search-btn) {
  border-left: none !important;
}

// /* 建议下拉框容器 */
.suggestions-dropdown {
  position: absolute; /* 绝对定位，相对于 .search-container */
  top: 87%; /* 紧贴搜索框底部 */
  left: 4px; /* 左对齐 */
  width: 592px; /* 和搜索框一样宽 */
  background-color: white; /* 白色背景 */
  border-radius: 0 0 20px 20px; /* 底部圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  max-height: 400px; /* 最高400px，超过就滚动 */
  overflow-y: auto; /* 超过高度就显示滚动条 */
  z-index: 1000; /* 层级最高，覆盖其他元素 */
}

/* 每一条建议 */
.suggestion-item {
  padding: 10px 15px; /* 内边距 */
  cursor: pointer; /* 鼠标变成手指，提示可以点击 */
  font-size: 14px; /* 字体大小 */
  color: #333; /* 字体颜色 */
  border-bottom: 1px solid #f0f0f0; /* 每条建议之间的分隔线 */
}

/* 鼠标悬停效果 */
.suggestion-item:hover {
  background-color: #f0f8ff; /* 浅蓝色背景 */
  border-left: 4px solid #1216ff;
}

/* 最后一个建议项添加底部圆角 */
.suggestion-item:last-child {
  border-radius: 0 0 20px 20px; /* 底部圆角 */
  border-bottom: none; /* 去掉最后一条的分隔线 */
}

.suggestion-item {
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
  /* 新增：让内容水平排列 */
  display: flex;
  justify-content: space-between; /* 两端对齐 */
  align-items: center; /* 垂直居中 */
}

.suggestion-content {
  width: 100%;
  display: flex;
  justify-content: space-between; //两端对齐
  align-items: center; //垂直居中
}

.suggestion-text {
  flex: 1; /* 文字占据剩余空间 */
}

.suggestion-icon {
  font-size: 16px;
  color: #001489;
  margin-left: 10px; /* 和文字保持间距 */
}
</style>
