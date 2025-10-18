<template>
  <div class="hero-section">
    <!-- 轮播图 -->
    <a href="">
      <transition name="fade">
        <!-- 图片的过渡动画 <transition> 是Vue的内置组件 :key="activeIndex" 确保Vue能正确识别元素的变化-->
        <img :key="activeIndex" :src="articles[activeIndex].img" alt="logo" />
      </transition>
      <div class="hero-section-content-title">
        <!-- <h1>{{ articles[activeIndex].title }}</h1> -->
        <transition name="fade">
          <h1 :key="activeIndex">{{ articles[activeIndex].title }}</h1>
        </transition>
      </div>
    </a>

    <!-- 轮播图的按钮 -->
    <div class="container">
      <div class="toggle-container">
        <button class="left" @click="handleLeftClick">左</button>
        <button class="right" @click="handleRightClick1">右</button>
      </div>
    </div>

    <!-- 新闻 -->
    <div class="interview">
      <!-- 遍历数组，index是下标，article是数组里面的内容 article是变量名用来临时代表循环中的每一篇文章 -->
      <li v-for="(article, index) in articles" :key="index">
        <!-- active用来根据条件给元素添加或移除 CSS 类。虽然你在代码里没看到直接定义的 active 类，但它肯定在下面CSS 样式里！//结果为true就加上active标签 -->
        <button class="article-category" :class="{ active: index === activeIndex }">
          <a href="" class="article-category-text">{{ article.category }}</a>
          <a href=""
            ><span class="article-title">{{ article.title }}</span></a
          >
          <span class="underline"></span>
        </button>
      </li>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 顶部用 import 导入图片，底部用 import 导入图片
import img1 from '../../assets/logo/qex1.jpg'
import img2 from '../../assets/logo/qex2.jpg'
import img3 from '../../assets/logo/qieerxienzo.jpg'
// 数组里面存放内容最新信息
const articles = ref([
  {
    category: '采访',
    title: '达里奥·埃苏戈希望在切尔西创造历史',
    img: img1,
  },
  {
    category: '采访',
    title: '恩佐·费尔南德斯：蓝图的一部分',
    img: img2,
  },
  {
    category: '采访',
    title: '奇尔维尔解释庆祝动作并展望未来',
    img: img3,
  },
])

// 1 当前选中的下标
const activeIndex = ref(0) // 只是初始值是第一章，数据在articles里面
// 1. 用于保存定时器ID（全局变量，组件销毁时也能清除）
let timer = null

function startTimer() {
  //停止定时器的函数
  //  先清除旧定时器，避免多个定时器叠加
  if (timer) clearInterval(timer) //timer是一个变量，它保存着之前创建的定时器。  clearInterval(timer)的作用是停止之前的定时器。
  // 创建新定时器，每10秒更新一次activeIndex
  timer = setInterval(() => {
    //当你调用 setInterval() 函数时，它会返回一个定时器 ID（一个数字），这个数字就是定时器的ID。timer 是一个变量，它保存了定时器的 ID
    // 使用模运算来实现循环
    // (0 + 1) % 3 = 1
    // (1 + 1) % 3 = 2
    // (2 + 1) % 3 = 0  -> 回到第一个
    // 在 Vue 3 中，当你用 ref() 创建响应式数据时，Vue 会把数据 "包" 在一个特殊的盒子里，
    // 这个盒子叫 RefImpl。你不能直接访问盒子里的数据，必须通过 .value 打开盒子才能拿到数据。
    // 所以，activeIndex.value 是盒子里的数据，而 activeIndex 是盒子本身。
    //articles.value 是数组本身（通过 .value 打开盒子）
    // articles.value.length 是数组的长度（这里是 3，因为有 3 篇文章）
    activeIndex.value = (activeIndex.value + 1) % articles.value.length
  }, 10000)
}
//定时器，每10秒更新一次activeIndex
onMounted(() => {
  startTimer() // / 页面一加载(一打开)就自动轮播,不写就直接停在第一个了
})
// 2 点击左按钮
const handleLeftClick = () => {
  // 检查当前是否是第一篇（索引0）

  if (activeIndex.value === 0) {
    // 如果是第一篇，跳到最后一篇（总长度-1 = 4）
    activeIndex.value = articles.value.length - 1
  } else {
    // 如果不是第一篇，跳到前一篇
    activeIndex.value--
  }
  startTimer() // 刷新定时器
}
//3  点击右按钮
const handleRightClick1 = () => {
  // 当前是最后一篇（索引 = 总长度-1 = 4）时
  if (activeIndex.value === articles.value.length - 1) {
    // 如果是最后一篇，跳到第一篇
    activeIndex.value = 0
  } else {
    // 如果不是最后一篇，跳到下一篇
    activeIndex.value++
  }
  startTimer() // 刷新定时器
}
</script>

<style scoped lang="less">
.hero-section {
  width: 100%;
  height: 700px; /* 保持原有的高度 */
  background-color: #1a1a1a; /* 修改背景颜色为深色，与图片背景匹配 */
  position: relative; /* 关键：设置为相对定位，以便子元素可以绝对定位 */
}
a {
  display: block; /* 确保链接是一个块级元素，可以包含图片和文本 */
  position: relative; /* 链接也设置为相对定位，确保文本在图片内部 */
  width: 100%; /* 确保链接宽度与父容器一致 */
  height: 100%; /* 确保链接高度与父容器一致 */
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* 图片宽度填充父容器 */
  height: 700px; /* 图片高度填充父容器 */
  object-fit: cover; /* 保持图片比例，裁剪多余部分 */
}

.hero-section-content-title {
  position: absolute; /* 关键：设置为绝对3定位 */
  bottom: 300px; /* 定位到图片底部 */
  // top: 0;
  right: 50px; /* 定位到图片左侧 */
  width: 100%; /* 宽度*/
  color: white; /* 文字颜色设置为白色*/
  padding: 10px 20px; /* 内边距 */
  box-sizing: border-box; /* 包含内边距在宽度内 */
  width: 526px;
}
h1 {
  margin: 0; /* 移除h1默认的外边距 */
  font-size: 2.75em; /* 调整字体大小 */
}
.container {
  position: absolute;
  bottom: 143px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1246px;
  width: calc(100% - 230px); /* 100% 减去左右边距 (115px * 2) */
  height: 48px;
  border: 0;
  display: flex; //自适应盒子大小
  justify-content: flex-end; //去到最右边
  box-sizing: border-box;
}

@media (max-width: 1476px) {
  .container {
    width: calc(100% - 60px);
    left: 30px;
    transform: none;
  }
}
.left {
  width: 48px;
  height: 48px;
  background-color: #0033cc;
  margin-right: 4px;
  border: 0;
}
.right {
  width: 48px;
  height: 48px;
  background-color: #0033cc;
  border: 0;
}
.interview {
  position: absolute;
  bottom: 23px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1246px;
  width: calc(100% - 230px); /* 100% 减去左右边距 (115px * 2) */
  height: 106px;
  display: flex;
  background-color: #fff;
  box-sizing: border-box;
}

@media (max-width: 1476px) {
  .interview {
    width: calc(100% - 60px);
    left: 30px;
    transform: none;
  }
}
.article-category {
  position: relative; /* 关键：设为相对定位，成为.underline的参照物 */
  display: block;
  width: 100%;
  height: 100%; /* 重新启用，让button能填满li的高度 */
  border: 0;
  outline: none;
  background-color: transparent;
  padding: 18px 24px; /* 将内边距移到此处 */
  box-sizing: border-box; /* 关键：让padding被计算在height/width内，布局更稳定 */
  text-align: left;
}
a {
  text-decoration: none;
}
/* interview li：让每个li变成竖着排的卡片，内容上下排列，横向分布 */
.interview li {
  width: 373px;
  height: 46px;
  flex: 1;
  padding: 0; /* 将内边距从 li 移动到下面的 button */
  justify-content: flex-start;
  list-style: none;
}
.article-category-text {
  display: block; /* 让a变成块级，方便对齐 */
  text-align: left; /* 文字左对齐 */
  padding-left: 0; /* 去掉多余的内边距 */
  margin-left: 0; /* 去掉多余的外边距 */
  color: #03f;
  font-size: 14px;
  font-weight: 600;
  list-style: none;
  margin-bottom: 15px;
}
.article-title {
  color: #0033cc;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3333333333;
}
.underline {
  position: absolute;
  bottom: -60px;
  left: 0;
  width: 0; /* 初始宽度为0 */
  height: 5px;
  background-color: #0033cc;
  border-radius: 20px;
  z-index: 1;
  /* 默认没有动画 */
}

/* 当.article-category拥有active类时，其下的.underline才播放动画 */
.article-category.active .underline {
  animation: underline-grow 10s forwards linear;
}

@keyframes underline-grow {
  from {
    width: 0;
  }
  to {
    width: 100%; /* 相对于button的100%宽度 */
  }
}

/* 添加过渡动画相关的样式 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
