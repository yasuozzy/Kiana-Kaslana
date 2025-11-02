<template>
  <!-- 顶部导航栏，包含登录注册等链接 -->
  <TopBar />
  <!-- 搜索框和logo区域 -->
  <HeaderMin />
  <!-- 主导航菜单，包含足球装备等分类链接 -->
  <MainNav />

  <div class="main-content">
    <div class="fotball-gear-page">
      <!-- 足球装备页面的主要内容区域 -->
      <div class="letf">
        <el-collapse v-model="activeNames" @change="handleChange">
          <!-- 这里我们使用 v-for 来遍历 categoryFilters 数组，动态生成每一个筛选组 -->
          <!-- filterGroup 代表 categoryFilters 数组中的每一个对象，比如“排序方式”、“各种门”等 -->
          <!-- :key 是 Vue 列表渲染中非常重要的一个属性，它帮助 Vue 追踪每个列表项的身份，提高渲染效率 -->
          <!-- :title 绑定了筛选组的标题，比如“排序方式” -->
          <!-- :name 绑定了筛选组的唯一标识，用于控制折叠面板的展开/收起 -->

          <!-- 这个盒子显示你选了什么 -->
          <div class="selected-tags" v-if="selectedFilters.length > 0">
            <div class="tags-title">你的选择</div>
            <div class="tags-list">
              <!-- 循环显示每个选中的标签 -->
              <div v-for="tag in selectedFilters" :key="tag.id" class="tag-item">
                <span>{{ tag.label }}</span>
                <button @click="removeTag(tag.id)">✕</button>
              </div>
            </div>
          </div>
          <el-collapse-item
            v-for="filterGroup in categoryFilters"
            :key="filterGroup.name"
            :title="filterGroup.title"
            :name="filterGroup.name"
          >
            <!-- filter-options 是筛选选项的容器 -->
            <!-- :class="{ 'color-options': filterGroup.isColor }" 这是一个动态绑定 class 的语法 -->
            <!-- 它的意思是：如果 filterGroup.isColor 为 true，就给这个 div 添加 color-options 这个 class，否则就不添加 -->
            <!-- 这样我们就可以根据数据来决定是否应用颜色选项的样式 -->
            <div class="filter-options" :class="{ 'color-options': filterGroup.isColor }">
              <!-- 再次使用 v-for 遍历当前筛选组（filterGroup）中的 options 数组 -->
              <!-- option 代表每一个具体的筛选选项，比如“默认”、“守门员”等 -->

              <label
                v-for="option in filterGroup.options"
                :key="option.value"
                :class="{ 'color-item': filterGroup.isColor }"
                :title="option.text"
                @click="handleFilterClick(filterGroup, option)"
              >
                <!-- v-if="!filterGroup.isColor" 判断当前筛选组是否是颜色选项 -->
                <!-- 如果不是颜色选项（比如排序方式、性别/年龄），就显示单选按钮 -->
                <input
                  v-if="!filterGroup.isColor"
                  type="radio"
                  :name="filterGroup.name"
                  :value="option.value"
                />
                <!-- v-if="filterGroup.isColor" 判断当前筛选组是否是颜色选项 -->
                <!-- 如果是颜色选项，就显示颜色圆圈，并且通过 style 绑定背景颜色 -->
                <div
                  v-if="filterGroup.isColor"
                  class="color-circle"
                  :style="{
                    'background-color': option.value,
                    border: option.color === '#ffffff' ? '1px solid #ddd' : 'none',
                  }"
                ></div>
                <!-- 显示选项的文本内容 -->
                <span :class="{ 'color-text': filterGroup.isColor || filterGroup.name === '8' }">{{
                  option.label || option.name
                }}</span>
              </label>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <!-- 商品展示和分页 -->
    <div class="product-display-area">
      <div class="pdp">
        <DisplayComponent />
      </div>
      <!--这里监听分页组件发出的事件，当用户选择新数量时会触发handleUpdateCount函数-->
      <ProductPagination @update-count="handleUpdateCount" />
      <!-- ⭐ 把分类和子分类都传递给商品卡片组件 -->
      <MerchandiseCard
        :product-count="productCount"
        :category="currentCategory"
        :sub-category="currentSubCategory"
      />
    </div>
  </div>

  <!-- 返回首页按钮 -->
  <div>
    <button @click="goHome" class="back-home-btn">返回首页</button>
  </div>
  <!-- 页脚组件 -->
  <SiteFooter />
</template>

<script setup>
//导入需要的组件
import TopBar from '@/components/layout/TopBar.vue' // 顶部导航栏
import HeaderMin from '@/components/layout/HeaderMin.vue' // 头部搜索区域
import MainNav from '@/components/layout/MainNav.vue' // 主导航菜单
import ProductPagination from '@/views/categories/ProductPagination.vue' // 商品分页组件
import DisplayComponent from '@/views/categories/DisplayComponent.vue' // 商品logo展示组件
import MerchandiseCard from '@/views/categories/MerchandiseCard.vue' // 商品卡片组件

import SiteFooter from '@/components/Footer/SiteFooter.vue' // 页脚
import { useRouter, useRoute } from 'vue-router' // 导入路由功能
import { ref, computed } from 'vue' // 导入ref和computed
import { categoryFilters } from '@/data/filterOptions.js' // 导入筛选数据

// 获取路由器实例，用于页面跳转
const router = useRouter()
// ⭐ 获取当前路由信息，用于读取分类数据
const route = useRoute()

// 折叠面板的活跃项
const activeNames = ref(['1'])

// 商品显示数量的响应式变量
const productCount = ref(72)

// 折叠面板变化处理
const handleChange = (val) => {
  console.log(val)
}

// 返回首页的方法
function goHome() {
  router.push('/') // 跳转到首页
}

// 这是处理分页组件发来的"用户选择了新数量"消息的函数
// 参数count就是用户选择的新数量（比如24、48或72）
const handleUpdateCount = (count) => {
  // parseInt是字符串转换成数字的工具   replace是字符串的替换功能，就像用橡皮擦掉特定文字这里是把 "项目" 这两个字（前面有个空格）换成空的（擦掉）比如 "24 项目" 经过这一步就变成了 "24"
  const number = parseInt(count.replace('项目', ''))
  // 更新商品显示数量 作用：告诉商品组件"现在要显示这么多个商品了"
  productCount.value = number
}

// ⭐ 从路由的 meta 中获取分类信息（不再用 props）
// 这样做的好处：URL改变时，组件会自动获取最新的分类信息
const currentCategory = computed(() => {
  // 从路由 meta 中获取 category，如果没有就用默认值
  return route.meta.category || '全部'
})

const currentSubCategory = computed(() => {
  // 从路由 meta 中获取 subCategory，如果没有就用默认值
  return route.meta.subCategory || '全部'
})

// 打印当前分类信息，方便调试
console.log('📂 当前分类:', currentCategory.value, '子分类:', currentSubCategory.value)

// 处理你的选择功能
const selectedFilters = ref([]) // 用来存储用户选择的标签

// 点击筛选项时，把它加到"你的选择"里 filterGroup是筛选组的信息（有很多像是"性别/年龄"这样的组），option 具体的选项（比如"女士"）
const handleFilterClick = (filterGroup, option) => {
  // 🔍 第一步：检查这个商品是不是已经挑过了
  const alreadyPicked = selectedFilters.value.find(
    // item是数组里的每一个元素，item.id是元素的id，item.id === `${filterGroup.name}-${option.value}` 是判断元素的id是否等于筛选组的名字和选项的值拼接起来的字符串
    (item) => item.id === `${filterGroup.name}-${option.value}`,
  )
  // 🎯 第二步：如果没挑过，就加进去
  if (!alreadyPicked) {
    selectedFilters.value.push({
      //push是数组的方法，用来添加元素到数组末尾
      id: `${filterGroup.name}-${option.value}`, // 给标签一个唯一的身份证号 避免重复
      label: option.label || option.name, // 标签上显示的文字（用户能看懂的）。
      value: option.value, // 标签的值
    })
  }
}

// 点小叉叉时，把标签从篮子里拿出来
const removeTag = (tagId) => {
  //tagId是标签的id  是要删除的标签的id
  selectedFilters.value = selectedFilters.value.filter((tag) => tag.id !== tagId) // filter是数组的方法，用来遍历数组，返回一个新数组
}
</script>

<style scoped lang="less">
.main-content {
  display: flex; /* 开启 Flexbox 布局，让子元素可以灵活排列 */
  justify-content: center; /* 让子元素在主轴上（这里是水平方向）居中对齐 */
  // width: 100%; /* 宽度占满父容器 */
  background-color: #ffffff; /* 红色背景 */
  padding: 20px 0; /* 上下各留 20px 的内边距，左右没有内边距 */
  min-height: 100vh; /* 最小高度设置为视口高度的 100%，确保内容区域至少占满一屏 */
  gap: 30px; /* 增加间距 */
}
.fotball-gear-page {
  // min-height: auto; /* 最小高度，确保内容可见 */
  // width: 100%;
  /* 移除 display: flex; 和 flex-direction: column; 因为父元素已经处理了布局 */
  background-color: #ffffff; /* 红色背景 */
}
.product-display-area {
  // width: -10%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center; /* 确保内部元素居中 */
}

.letf {
  width: 232px;
  padding: 16px 24px 0 27px;
  background-color: #fff;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* 移除 float: left; 因为父元素已使用 flex 布局 */
  /* 移除固定高度，让内容撑开 */
}
.letf.title {
  font-weight: 600;
  color: #333;
}

.filter-options {
  padding: 8px 0;
}

.filter-options label {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  margin-bottom: 8px;
  font-size: 4px;
  color: #333;
  cursor: pointer;
  min-height: 32px; /* 确保有足够的高度 */
  gap: 8px; /* 单选按钮和文字之间的间距 */
  font-size: 14px;
  font-weight: 520;
  color: #000000;
}
.filter-options label:hover {
  color: #000000;
  font-weight: 620;
}

.filter-options input[type='checkbox'],
.filter-options input[type='radio'] {
  margin: 0; /* 移除默认margin，使用gap代替 */
  width: 17px;
  height: 17px;
  flex-shrink: 0; /* 防止被压缩 */
}

.color-options {
  display: flex;
  flex-wrap: wrap; /* 如果颜色太多，可以自动换行 */
  gap: 12px; /* 增加间距让布局更清晰 */
  flex-direction: column; /* 改为垂直排列，像其他网站一样 */
}

.color-item {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  gap: 8px; /* 圆圈和文字之间的距离 */
  width: 100%;
  min-height: 36px; /* 最小高度确保对齐 */
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 6px 8px; /* 上下左右留空间 */
  border-radius: 4px;
  box-sizing: border-box; /* 确保padding不影响总宽度 */
}

.color-item:hover {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding-left: 4px;
}

.color-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%; /* 圆形 */
  flex-shrink: 0; /* 防止圆圈被压缩 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* 添加阴影让圆圈更立体 */
}

.color-text {
  font-size: 14px;
  color: #333;
  font-weight: 400;
  line-height: 1.2; /* 修复行高，1px太小了 */
  margin: 0; /* 移除默认margin */
}
.el-collapse {
  width: 232px;
  /* 移除固定高度，让内容自适应 */
}
.txt {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
}

:deep(.el-collapse-item__header) {
  font-size: 16px;
  height: 57px;
  color: #333;
  font-weight: 600;
}
:deep(.el-collapse-item__arrow) {
  font-size: 24px;
}
:deep(.el-collapse-item__content) {
  padding: 0;
}
/* 你的选择区域的样式 */
.selected-tags {
  background-color: #f8f9fa;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.tags-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap; /* 标签太多就自动换行 */
  gap: 8px;
}

.tag-item {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 6px 12px;
  border-radius: 20px; /* 圆角标签，更好看 */
  border: 1px solid #ddd;
  font-size: 14px;
}

.tag-item button {
  margin-left: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  font-size: 16px;
}

.tag-item button:hover {
  color: #ff0000; /* 鼠标悬停时变红 */
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  /* 主容器 */
  .main-content {
    flex-direction: column;
    padding: 10px;
    gap: 20px;
  }

  /* 左侧筛选区域 */
  .letf {
    width: 100%;
    padding: 12px 16px;
  }

  .el-collapse {
    width: 100%;
  }

  :deep(.el-collapse-item__header) {
    font-size: 14px;
    height: 48px;
  }

  :deep(.el-collapse-item__arrow) {
    font-size: 20px;
  }

  .filter-options label {
    font-size: 13px;
    min-height: 28px;
  }

  /* 你的选择区域 */
  .selected-tags {
    padding: 10px;
    margin-bottom: 12px;
  }

  .tags-title {
    font-size: 14px;
  }

  .tag-item {
    padding: 4px 10px;
    font-size: 13px;
  }

  /* 商品展示区域 */
  .product-display-area {
    width: 100%;
  }

  /* 返回首页按钮 */
  .back-home-btn {
    margin: 20px;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 5px;
  }

  .letf {
    padding: 10px 12px;
  }

  :deep(.el-collapse-item__header) {
    font-size: 13px;
    height: 44px;
  }

  .filter-options label {
    font-size: 12px;
  }

  .tags-title {
    font-size: 13px;
  }

  .tag-item {
    font-size: 12px;
  }
}
</style>
