<template>
  <div class="container">
    <div class="breadcrumb">
      <!-- 面包屑导航容器，用于包裹所有导航项 -->
      <a href="#" class="breadcrumb-item">首页</a>
      <!-- 导航项之间的分隔符 -->
      <span class="breadcrumb-separator"> ‒ </span>
      <!-- “按玩家购物”导航链接 -->
      <a href="#" class="breadcrumb-item">按玩家购物</a>
      <span class="breadcrumb-separator"> ‒ </span>
      <!-- 最终当前项（非链接，字体加粗） -->
      <span class="breadcrumb-current">{{ selectedPlayerInfo.name }}</span>
    </div>

    <!-- 筛选和排序栏容器 -->
    <div class="filter-sort-container">
      <!-- 左侧筛选器按钮 -->
      <div class="filter-button">
        <span class="filter-text">滤波器</span>
        <i class="arrow-down"></i>
      </div>

      <!-- 右侧排序按钮 -->
      <div class="sort-button">
        <a-dropdown>
          <a-button class="sort-text"
            >筛选器
            <i class="arrow-up"></i>
          </a-button>
          <template #content>
            <a-dgroup>
              <a-doption class="txtto">畅销品</a-doption>
              <a-doption class="txtto">趋势</a-doption>
              <a-doption class="txtto">价格从低到高</a-doption>
              <a-doption class="txtto">价格从高到低</a-doption>
            </a-dgroup>
          </template>
        </a-dropdown>
        <!-- <span class="sort-text">筛选器</span> -->
        <!-- <i class="arrow-up"></i> -->
      </div>
    </div>
  </div>
</template>

<script setup>
// ref 是Vue的响应式魔法盒子，让数据变化时页面自动更新 就像一个智能相框，里面内容变了，显示的画面也会跟着变
import { ref, onMounted } from 'vue'

// useRoute 是路由工具，就像GPS一样告诉我们现在在哪个页面 可以获取地址栏里的参数，比如用户点击了哪个球员
import { useRoute } from 'vue-router'

// 从球员数据文件导入所有球员信息 byPlayer 就像一本通讯录，里面有所有球员的详细资料
import { byPlayer } from '../../../data/byplayer.js'

// route 变量存储当前页面的GPS信息通过它可以知道用户传递了什么参数
const route = useRoute()

// selectedPlayerInfo 是一个响应式变量，存储当前选中球员的信息
// ref({}) 创建了一个空的魔法盒子，等会儿往里面放球员数据
// 当盒子里的数据变了，页面上的面包屑就会自动更新显示
const selectedPlayerInfo = ref({})

// onMounted 是页面加载完成后的回调函数，就像闹钟响了要做的事
// 当组件"醒来"时，就会执行这里面的代码
onMounted(() => {
  // route.params.playerId 从地址栏获取球员ID
  // 就像从快递单上读取收货地址一样
  const playerIdFromUrl = route.params.playerId

  // 打印调试信息，方便我们检查获取到的ID是否正确
  console.log('面包屑组件获取到的球员ID:', playerIdFromUrl)

  // if 判断：如果地址栏里有球员ID的话
  // playerIdFromUrl 存在且不为空时，执行大括号里的代码
  if (playerIdFromUrl) {
    // byPlayer.find() 在球员通讯录中查找匹配的球员
    // 就像在电话簿里找联系人一样
    // player => player.id == playerIdFromUrl 是查找条件
    // player 是临时变量，代表正在检查的那个球员
    // player.id 是当前球员的ID号
    // == 是比较符号，检查两个值是否相等
    // 整句话意思：找到ID匹配的那个球员
    const foundPlayerData = byPlayer.find((player) => player.id == playerIdFromUrl)

    // 如果找到了匹配的球员（foundPlayerData不为空）
    if (foundPlayerData) {
      // 把找到的球员信息放到响应式变量里
      // selectedPlayerInfo.value 是访问魔法盒子内容的方式
      // = foundPlayerData 是把球员数据放进盒子
      // 一旦盒子内容变了，页面上的号码和姓名就会自动更新
      selectedPlayerInfo.value = foundPlayerData
    }
  }

  // 在控制台打印当前选中的球员信息，方便调试
  console.log('面包屑显示的球员信息:', selectedPlayerInfo.value)
})
</script>

<style scoped lang="less">
.container {
  margin-top: 30px;
  margin-bottom: 30px;
}
/* 整体容器样式 */
.filter-sort-container {
  // width: 100%; /* 占满父容器宽度 */
  height: 104px; /* 固定高度 */
  // background-color: rgb(0, 24, 56);
  background-color: rgb(22, 69, 72);
  display: flex; /* 弹性布局 */
  // justify-content: space-between; /* 左右两端对齐 */
  //去到最左边
  // margin-left: 0;
  justify-content: end;
  align-items: center; /* 垂直居中 */
  padding: 0 30px; /* 左右内边距 */
  box-sizing: border-box; /* 边框盒模型 */
  margin-left: 102px;
  margin-right: 102px;
}

/* 筛选器按钮样式 */
.filter-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin-right: 75px;
  position: relative; /* 为下拉框定位 */
}

/* 筛选器文字样式 */
.filter-text {
  color: white; /* 白色文字 */
  font-size: 23px; /* 字体大小 */
  font-weight: 700; /* 中等粗细 */
  margin-right: 10px; /* 右侧间距 */
}

/* 排序按钮样式 */
.sort-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
  position: relative; /* 为下拉框定位 */
}

// .sort-button:hover {
//   // opacity: 0.8;
// }

/* 排序文字样式 */
.sort-text {
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin-right: 8px;
  text-transform: uppercase;
  // border: 2px solid white; /* 添加白色边框 */
  padding: 8px 15px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  background-color: rgb(22, 69, 72);
}

/* 下拉箭头样式 */
.arrow-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid white;
  margin-left: 5px;
  font-weight: 700;
  font-size: 23px;
  display: inline-block;
}

/* 向上箭头样式 */
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 6px solid white; /* 向上箭头 */
  margin-left: 15px;
  font-weight: 700;
  font-size: 23px;
  display: inline-block;
}
:deep(.arco-btn:hover) {
  background-color: transparent;
  color: #ffffff;
}

:deep(.arco-dropdown-option-content) {
  padding: 15px 35px; /* 内边距 - 控制文字与边框的距离 */
  width: 100px; /* 宽度 - 可以修改这个值来控制选项的宽度 */
  height: 32px; /* 高度 - 可以修改这个值来控制选项的高度 */
  font-size: 16px;
  font-weight: 700;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .container {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  /* 面包屑 */
  .breadcrumb {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 20px;
  }

  .breadcrumb-item,
  .breadcrumb-separator,
  .breadcrumb-current {
    font-size: 13px;
  }

  /* 筛选排序容器 */
  .filter-sort-container {
    height: 70px;
    padding: 0 20px;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
  }

  .filter-button {
    margin-right: 0;
  }

  .filter-text,
  .sort-text {
    font-size: 16px;
  }

  :deep(.arco-dropdown-option-content) {
    padding: 12px 25px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .breadcrumb {
    padding-left: 15px;
    padding-right: 15px;
  }

  .breadcrumb-item,
  .breadcrumb-separator,
  .breadcrumb-current {
    font-size: 12px;
  }

  .filter-sort-container {
    height: 80px;
    padding: 0 15px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .filter-text,
  .sort-text {
    font-size: 14px;
    padding: 6px 12px;
  }
}

/* 面包屑整体容器：控制排版、内边距等 */
.breadcrumb {
  font-family: Arial, sans-serif; /* 可根据实际需求调整字体 */
  color: #0a1931; /* 深蓝色文字，匹配视觉效果 */
  padding-left: 102px;
  padding-right: 102px;
  box-sizing: border-box; /* 边框盒模型 */
  //  margin-top: 20px;
  //  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 30px;
}

/* 面包屑可点击的导航项样式 */
.breadcrumb-item {
  color: #0a1931;
  text-decoration: none; /* 去除链接下划线 */
  font-size: 17px;
  font-weight: 400;
}

/* 导航项之间的分隔符样式 */
.breadcrumb-separator {
  color: #0a1931;
  margin: 6px 6px; /* 分隔符左右留白 */
  // margin-left: 10px;
  font-size: 17px;
  font-weight: 500;
}

/* 最后一项（当前项）的样式：字体加粗 */
.breadcrumb-current {
  font-weight: bold;
  color: #0a1931;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
}
</style>
