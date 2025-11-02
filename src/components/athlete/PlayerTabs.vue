<template>
  <div class="title">
    <h4 class="title-text">按球员购买</h4>
  </div>

  <div class="player-tabs">
    <div class="content">
      <div class="player-list-wrapper">
        <div class="player-list" :style="{ transform: `translateX(-${currentPage * 100}%)` }">
          <!-- 遍历所有球员，而不是只显示部分 -->
          <picture v-for="(playerItem, index) in player" :key="index">
            <a @click="goToPlaye(playerItem)">
              <figure>
                <!-- 图片的alt属性是用来描述图片的，当图片无法显示时，会显示alt属性 :sre是动态控制 -->
                <img :src="playerItem.img" :alt="playerItem.name" />
                <figcaption class="player-name">
                  <p class="player-number">{{ playerItem.number }} {{ playerItem.name }}</p>
                </figcaption>
              </figure>
            </a>
          </picture>
        </div>
      </div>
      <button class="left" @click="handleLeft"><i class="iconfont icon-zuobian good"></i></button>
      <button class="right" @click="handleRight"><i class="iconfont icon-youbian good"></i></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { byPlayer } from '../../data/byplayer.js'
import { useRouter } from 'vue-router'
const router = useRouter()
// 1 使用导入的数据创建响应式变量

const player = ref(byPlayer) // byPlayer是从数据文件来的，不是组件内部定义的

// 2. 当前页码，从0开始
const currentPage = ref(0)
// 3. 每页显示数量固定为5个球员
const playersPerPage = 5
// 4. 计算总页数
const totalPages = Math.ceil(player.value.length / playersPerPage)

const handleLeft = () => {
  // 如果不是第一页，则页码减1
  if (currentPage.value > 0) {
    currentPage.value--
  }
}
const handleRight = () => {
  // 如果还有下一页，则页码加1
  if (currentPage.value < totalPages - 1) {
    currentPage.value++
  }
}

const goToPlaye = (playerData) => {
  // 跳转到球员详情页，并传递球员信息
  router.push({
    name: 'PlayerDetail', // 路由名称
    params: { playerId: playerData.id }, // 传递球员ID
    query: { name: playerData.name }, // 也可以传递其他信息
  })
}
</script>

<style scoped lang="less">
// 整体区域
.player-tabs {
  width: 100%;
  padding: 20px 0; // 只保留上下内边距
  padding-top: 0;
  box-sizing: border-box;
  background-color: #ffffff;
}

// 标题区域
.title {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: #ffffff;
}
.title-text {
  font-size: 33px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 0;
  padding-bottom: 0;
  margin: 0;
  line-height: 40px;
}

// 内容区域
a {
  text-decoration: none;
}
.content {
  width: 100%;
  padding: 0; // 使用padding代替margin
  position: relative;
  box-sizing: border-box; // 确保padding不会增加宽度
}

// 新增：包裹层，用于隐藏溢出的球员
.player-list-wrapper {
  width: 100%;
  overflow: hidden; // 隐藏超出部分
}

.player-list {
  display: flex;
  gap: 20px; // 使用gap控制间距
  flex-wrap: nowrap; // 不允许换行
  transition: transform 0.6s ease-in-out; // 平滑滑动动画
  width: 100%; // 每页占100%宽度
}
img {
  /* 移除 object-fit 和 object-position，让图片自然显示 */
  height: 310px;
  width: 295px;
  display: block; // 消除图片底部间隙
  object-fit: cover; /* 保持比例裁剪，而不是拉伸 */
  object-position: center top; /* 关键：显示图片的上部分 */
}
/* 球员卡片 - 每个占据五分之一空间 */
picture {
  flex: 0 0 calc(20% - 20px); // 每个占20%宽度，减去gap的影响
  min-width: 0; // 防止内容撑开flex项目
}

.player-name {
  background-color: transparent; // 透明背景
}
.player-number {
  padding: 20px;
  margin: 0;
  text-align: center;
  font:
    500 23px KippaxModernCnd,
    Gotham Narrow,
    GothamNarrow,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif;
  line-height: 22px;
  letter-spacing: 0.23px;
  color: #001838;
}

// 按钮区域
.left {
  position: absolute;
  top: 140px;
  left: 40px;
  background-color: transparent;
  border: 0px solid #001838;
}
.right {
  position: absolute;
  top: 140px;
  right: 1px;
  background-color: transparent;
  border: 0px solid #001838;
}
.good {
  font-size: 24px;
  font-weight: 700;
}
.good:hover {
  display: inline-block;
  transform: scale(2);
  transition: transform 0.3s ease;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  /* 标题区域 */
  .title {
    height: auto;
    margin-top: 5px;
  }

  .title-text {
    font-size: 24px;
    padding: 15px;
    padding-left: 20px;
    line-height: 30px;
  }

  /* 球员列表 */
  .player-tabs {
    padding: 15px 0;
  }

  picture {
    flex: 0 0 calc(50% - 10px);
  }

  img {
    height: 220px;
    width: 100%;
  }

  .player-number {
    padding: 12px;
    font-size: 18px;
    line-height: 20px;
  }

  /* 按钮 */
  .left {
    left: 10px;
    top: 100px;
  }

  .right {
    right: 10px;
    top: 100px;
  }

  .good {
    font-size: 20px;
  }

  .good:hover {
    transform: scale(1.5);
  }
}

@media (max-width: 480px) {
  .title-text {
    font-size: 20px;
    padding: 12px;
    padding-left: 15px;
  }

  picture {
    flex: 0 0 100%;
  }

  img {
    height: 250px;
    width: 100%;
  }

  .player-number {
    font-size: 16px;
    padding: 10px;
  }

  .left,
  .right {
    top: 120px;
  }

  .left {
    left: 5px;
  }

  .right {
    right: 5px;
  }
}
</style>
