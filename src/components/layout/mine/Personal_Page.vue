<template>
  <TopBar />
  <HeaderMin />
  <MainNav />
  <div class="wo">
    <div class="chelsea-personal-page">
      <!-- 顶部用户信息展示区域 -->
      <div class="user-profile-header">
        <div class="user-avatar">
          <!-- <i class="user-icon"> -->
          <div class="user-icon">
            <input
              type="file"
              id="avatarFileInput"
              accept="image/*"
              @change="handleFileSelection"
              style="display: none"
            />
            <!-- 显示区域 - 就像相框 -->
            <div class="avatar-display-area" @click="triggerFileSelection">
              <!-- 如果有头像就显示头像，没有就显示加号 -->
              <img
                v-if="userAvatarUrl"
                :src="userAvatarUrl"
                class="user-avatar-image"
                alt="用户头像"
              />
              <div v-else class="upload-placeholder">
                <span class="plus-icon">+</span>
                <p class="upload-hint">点击上传头像</p>
              </div>
            </div>
          </div>
          <!-- </i> -->
          <span class="user-email">{{ userEmail }}</span>
        </div>
      </div>

      <!-- 主要功能卡片网格区域 -->
      <div class="function-cards-grid">
        <!-- 个人详细信息卡片 -->
        <div class="function-card">
          <div class="card-icon">
            <i class="icon-user"></i>
          </div>
          <div class="card-content" @click="navigateToOrderHistory">
            <i class="iconfont icon-dingdan suggestion-icon"></i>
            <h3 class="card-title">历史订单</h3>
            <p class="card-description">查看您的所有历史订单记录</p>
          </div>
        </div>

        <!-- 邮件卡片 -->
        <div class="function-card">
          <div class="card-icon">
            <i class="icon-email"></i>
          </div>
          <div class="card-content">
            <i class="iconfont icon-dizhi suggestion-icon"></i>
            <h3 class="card-title">地址簿</h3>
            <p class="card-description">查看您的地址信息</p>
          </div>
        </div>

        <!-- 偏好设置卡片 -->
        <div class="function-card">
          <div class="card-icon">
            <i class="icon-settings"></i>
          </div>
          <div class="card-content">
            <i class="iconfont icon-zhifu suggestion-icon"></i>
            <h3 class="card-title">支付方式</h3>
            <p class="card-description">管理您的支付方式</p>
          </div>
        </div>

        <!-- 订阅卡片 -->
        <div class="function-card">
          <div class="card-icon">
            <i class="icon-calendar"></i>
          </div>
          <div class="card-content">
            <i class="iconfont icon-dingyue suggestion-icon"></i>
            <h3 class="card-title">订阅</h3>
            <p class="card-description">管理您的订阅服务</p>
          </div>
        </div>

        <!-- 官方支持俱乐部信息卡片 -->
        <div class="function-card highlighted-card">
          <div class="card-icon">
            <i class="icon-support"></i>
          </div>
          <div class="card-content">
            <i class="iconfont icon-huiyuanjulebu suggestion-icon"></i>
            <h3 class="card-title">官方支持俱乐部信息</h3>
            <p class="card-description">加入我们的官方支持俱乐部获取专属权益</p>
          </div>
        </div>
      </div>

      <!-- 切尔西品牌展示区域 -->
      <div class="chelsea-brand-section">
        <div class="brand-logo">
          <h2 class="brand-title">CHELSEA FC</h2>
          <p class="brand-subtitle">蓝军荣耀，永远支持</p>
        </div>
        <div class="team-image">
          <!-- 这里可以放切尔西球员图片 -->
          <div class="player-showcase"></div>
        </div>
      </div>
      🔑 在这里添加router-view，用来显示二级路由内容
      <div class="router-content-area">
        <router-view> </router-view>
      </div>
      <!-- 退出登录按钮区域 -->
      <div class="logout-section">
        <button class="logout-button" @click="logout">登出</button>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script setup>
// 这里只写结构，不写逻辑代码
// 所有的数据都是写死的，没有响应式逻辑
import TopBar from '@/components/layout/TopBar.vue'
import HeaderMin from '@/components/layout/HeaderMin.vue'
import MainNav from '@/components/layout/MainNav.vue'
import SiteFooter from '../../Footer/SiteFooter.vue'
import { useRouter } from 'vue-router' // 导入路由功能
import { ref, computed } from 'vue' // 导入Vue的响应式功能
const routerInstance = useRouter() // 获取路由实例
import { useStore } from 'vuex' // 🔑 新增：导入Vuex状态管理

const store = useStore()
const userEmail = computed(() => {
  // 计算属性，根据Vuex状态动态返回用户邮箱
  // 如果用户已登录且有邮箱信息，就显示真实邮箱
  if (store.state.user && store.state.user.email) {
    return store.state.user.email
  }
  // 如果用户未登录，就显示默认邮箱
  return 's3478006049@icloud.com'
})

// navigateToOrderHistory - 跳转到购物车页面
const navigateToOrderHistory = () => {
  // window.location.href = '/shopping-cart';//通过路由路径跳转到购物车页面
  routerInstance.push('/shopping-cart') // 告诉电梯："去个人中心的订单历史区域"
}

// 存储头像地址的变量 - 就像相册里存照片地址的标签
const userAvatarUrl = ref('')

// 第1步：用户点击触发文件选择 - 就像按下相机快门
const triggerFileSelection = () => {
  console.log('用户点击了选择文件按钮')
  // 网页里找到一个 ID 叫avatarFileInput的元素，把它存到fileInputElement变量里
  const fileInputElement = document.getElementById('avatarFileInput')
  fileInputElement.click() // 模拟点击文件选择器
}

// 第2步：用户选择文件后的处理 - 就像选好照片后的处理
const handleFileSelection = (event) => {
  // event是事件对象，里面装着用户操作的所有信息(比如选了哪个文件、在哪个元素上操作的)
  console.log('用户选择了文件，开始处理')
  // 获取用户选择的文件 event.target 就是用户选文件的那个框
  // event.target.files 就是用户选的文件
  // event.target.files[0] 就是用户选的第一个文件
  const selectedFile = event.target.files[0]

  // 检查是否真的选择了文件
  if (!selectedFile) {
    alert('请选择一个文件')
    return
  }
  // 第3步：验证文件是否合格 validateSelectedFile是一个函数，用来验证文件是否合格
  if (validateSelectedFile(selectedFile)) {
    //selectedFile作为参数传给验证函数，就是用户刚才选的那个文件
    // 文件合格，开始处理
    processAvatarFile(selectedFile)
  }
}

// 第3步：验证文件
const validateSelectedFile = (file) => {
  //参数file就是用户选的那个文件（比如旅游照.png）
  // 检查文件类型 - 只允许图片
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
  if (!allowedTypes.includes(file.type)) {
    //includes()方法用于判断数组是否包含指定的元素 type是这个对象的 “格式属性”
    alert('请选择图片文件（JPG、PNG、GIF格式）')
    return false
  }

  // 检查文件大小 - 不能超过5MB
  const maxSizeInMB = 5 // “5MB” = “5242880 字节”
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024 //5MB = 5×1024×1024 = 5242880
  if (file.size > maxSizeInBytes) {
    alert(`文件太大了！请选择小于${maxSizeInMB}MB的图片`)
    return false
  }

  console.log('文件验证通过！')
  return true
}

// 第4步：处理文件 - 就像制作证件照
const processAvatarFile = (file) => {
  console.log('开始处理头像文件')
  //创建文件读取器 - FileReader()浏览器提供的 “文件读取工具”，专门用来读取本地文件的内容
  const fileReader = new FileReader() //new创建一个扫描仪”（实例化对象），每个FileReader只能用一次，处理新文件需要重新创建
  // 设置读取完成后的处理 onload是事件处理函数，当文件读取加载完完成后，会自动调用这个函数
  fileReader.onload = (event) => {
    //event是事件对象，里面装着文件读取完成的所有信息
    console.log('文件读取完成，准备显示头像')
    // 获取文件的数据URL（base64格式）
    const imageDataUrl = event.target.result //result是fileReader读取到的 “文件内容”（以 DataURL 格式存在）
    //更新头像显示
    updateAvatarDisplay(imageDataUrl)
  }

  // 设置读取错误时的处理，当文件读取失败时（比如文件损坏、没权限访问），会触发
  fileReader.onerror = () => {
    //.onerror 是 JavaScript 里用来 “监听错误” 的工具，专门处理 “加载资源时出问题” 的情况
    console.error('文件读取失败')
    alert('头像上传失败，请重试')
  }
  // 开始读取文件
  fileReader.readAsDataURL(file) //readAsDataURL()方法用于读取读取file（用户选的文件），将其转换为base64编码的字符串
}

// 第5步：更新显示- 就像把制作好的证件照放到相框里
const updateAvatarDisplay = (imageUrl) => {
  console.log('更新头像显示')
  // 🔑 新增：预加载图片，确保图片完全加载后再显示
  const preloadImage = new Image() // 创建一个临时图片对象，就像先在后台准备好照片

  preloadImage.onload = () => {
    // 当临时图片完全加载成功后，才执行
    // 更新响应式变量，Vue会自动更新页面显示 （通常用ref定义，比如const userAvatarUrl = ref('')）
    userAvatarUrl.value = imageUrl //把imageUrl（处理好的图片地址）赋值给userAvatarUrl.value，
    // 🔑 新增：保存到localStorage（就像把照片存到相册）
    localStorage.setItem('userAvatar', imageUrl) //userAvatar是键名，imageUrl是值
    console.log('头像上传成功！')
    // 可以在这里添加成功提示
    alert('头像上传成功！')
  }
  // 🔑 新增：如果图片加载失败
  preloadImage.onerror = () => {
    // 如果图片加载失败
    console.error('图片加载失败')
    alert('头像显示失败，请重试')
  }
  preloadImage.src = imageUrl // 启动临时图片的加载流程（让浏览器开始解析 imageUrl 对应的图片）。
}
// 6页面加载时从本地存储读取头像
const loadSavedAvatar = () => {
  // 🔑 新增：从localStorage读取头像
  const savedAvatar = localStorage.getItem('userAvatar')
  if (savedAvatar) {
    userAvatarUrl.value = savedAvatar
    console.log('已加载保存的头像')
  }
}

// 在组件挂载时调用（添加到script setup最后）
loadSavedAvatar()

// 退出登录模块
const logout = () => {
  // 第1步：清除Vuex中的用户状态
  store.dispatch('logout')

  // 第2步：清除本地存储的用户信息
  localStorage.removeItem('ai') // 删除用户信息
  localStorage.removeItem('userToken') // 删除登录令牌
  localStorage.removeItem('userAvatar') // 删除用户头像

  // 第3步：显示退出成功提示
  console.log('🔓 用户已退出登录')
  alert('退出登录成功！')

  // 第4步：跳转到登录页面
  routerInstance.push('/login')
}
</script>

<style scoped lang="less">
.wo {
  background-color: #e4eef9;
  padding-top: 40px;
}
.chelsea-personal-page {
  max-width: 1200px; // 页面最大宽度
  margin: 0 auto; // 水平居中
  padding: 20px; // 内边距
  // margin-top: 40px;
  min-height: 100vh; // 最小高度占满屏幕
  font-family: 'Arial', sans-serif; // 字体设置
}

/* 顶部用户信息区域样式 */
.user-profile-header {
  background: white; // 白色背景
  border-radius: 12px; // 圆角边框
  margin-bottom: 25px; // 下边距
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // 阴影效果
  // border-left: 4px solid #001489; // 左边蓝色边框（切尔西蓝）
  box-shadow:
    0 4px 20px rgba(3, 152, 252, 0.15),
    0 0 0 1px rgba(26, 147, 222, 0.05); // 淡蓝色外发光 + 淡蓝色边框
}

/* 用户头像区域样式 */
.user-avatar {
  display: flex; // 弹性布局
  width: 100%;
  height: 125px;
  padding: 20px 24px; // 内边距
  align-items: center; // 垂直居中
  gap: 15px; // 元素间距
}

/* 用户图标样式 */
.user-icon {
  width: 80px; // 图标宽度
  height: 80px; // 图标高度
  // background-color: #001489; // 切尔西蓝色背景
  border-radius: 50%; // 圆形
  display: flex; // 弹性布局
  align-items: center; // 垂直居中
  justify-content: center; // 水平居中
  overflow: hidden; /* 🔑 关键属性：隐藏超出圆圈的部分 */
  position: relative; /* 相对定位 - 为里面的图片提供定位参考 */
}
/* 头像图片样式 - 让图片完美适应圆形容器 */
.user-icon img {
  width: 100%; /* 图片宽度占满容器 */
  height: 100%; /* 图片高度占满容器 */
  object-fit: cover; /* 🔑 关键属性：保持比例裁剪，填满容器 */
  border-radius: 50%; /* 图片本身也设为圆形 */
}
/* 用户邮箱文字样式 */
.user-email {
  font-size: 17px; // 字体大小
  line-height: 20px;
  color: #333; // 深灰色文字
  font-weight: 400; // 字体粗细
  line-height: 20px;
}

/* 功能卡片网格容器样式 */
.function-cards-grid {
  display: grid; // 网格布局
  grid-template-columns: repeat(3, 0.4172fr); // 3列等宽布局
  gap: 15px; // 卡片间距
  //  column-gap: 2px; // 列间距（左右卡片的距离）
  margin-bottom: 30px; // 下边距
  place-items: center;
}

/* 单个功能卡片样式 */
.function-card {
  background: white; // 白色背景
  border-radius: 12px; // 圆角边框
  width: 100%;
  height: 195px;
  padding: 20px; // 内边距
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); // 轻微阴影
  transition: all 0.3s ease; // 过渡动画
  cursor: pointer; // 鼠标指针
  border: 2px solid transparent; // 透明边框
  /* 新增的垂直居中样式 */
  display: flex; // 弹性布局
  flex-direction: column; // 垂直排列
  justify-content: center; // 垂直居中
  // 默认就有的淡蓝色虚影效果（不需要悬停）
  box-shadow:
    0 4px 20px rgba(3, 152, 252, 0.15),
    0 0 0 1px rgba(26, 147, 222, 0.05); // 淡蓝色外发光 + 淡蓝色边框
}
.logout-section {
  display: flex;
  //  width: 329px;
  height: 32px;
  justify-content: center;
  align-items: center;
}

.logout-button {
  width: 362px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #fff;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.logout-button:hover {
  background-color: #001832;
  color: #ffffff;
}
/* 卡片悬停效果样式 */
.function-card:hover {
  transform: translateY(-2px); // 向上移动
  box-shadow: 0 1px 16px rgba(0, 20, 137, 0.15); // 蓝色阴影
  border-color: #000000; // 蓝色边框
}

// /* 突出显示的卡片样式 */
// .highlighted-card {
//   border: 2px solid #001489; // 蓝色边框
//   background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%); // 渐变背景
// }

/* 卡片图标区域样式 */
.card-icon {
  margin-bottom: 15px; // 下边距
}

/* 卡片图标样式 */
.card-icon i {
  font-size: 24px; // 图标大小
  color: #001489; // 切尔西蓝色
}
/* 你需要添加这些样式到<style>部分 */
.avatar-uploader .avatar {
  width: 50px; /* 头像宽度，和外层容器一样大 */
  height: 50px; /* 头像高度，和外层容器一样大 */
  border-radius: 50%; /* 圆形头像 */
  object-fit: cover; /* 图片适应容器，不变形 */
  display: block; /* 块级显示 */
}

.avatar-uploader .avatar-uploader-icon {
  font-size: 28px; /* 加号图标大小 */
  color: #8c939d; /* 加号图标颜色 */
  width: 50px; /* 图标容器宽度 */
  height: 50px; /* 图标容器高度 */
  line-height: 50px; /* 垂直居中 */
  text-align: center; /* 水平居中 */
}

.avatar-uploader {
  border: 1px dashed #d9d9d9; /* 虚线边框 */
  border-radius: 50%; /* 圆形边框 */
  cursor: pointer; /* 鼠标指针 */
  position: relative; /* 相对定位 */
  overflow: hidden; /* 隐藏溢出 */
  width: 50px; /* 上传区域宽度 */
  height: 50px; /* 上传区域高度 */
}

.avatar-uploader:hover {
  border-color: #409eff; /* 悬停时边框颜色 */
}
.suggestion-icon {
  font-size: 31px;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .wo {
    padding-top: 20px;
  }

  .chelsea-personal-page {
    padding: 15px;
    min-height: auto;
  }

  /* 用户信息区域 */
  .user-profile-header {
    margin-bottom: 20px;
  }

  .user-avatar {
    height: auto;
    padding: 15px 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .user-icon {
    width: 60px;
    height: 60px;
  }

  .user-email {
    font-size: 15px;
  }

  /* 功能卡片网格 */
  .function-cards-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 20px;
  }

  .function-card {
    height: auto;
    min-height: 140px;
    padding: 15px;
  }

  .suggestion-icon {
    font-size: 26px;
  }

  .card-content h3 {
    font-size: 16px;
  }

  .card-content p {
    font-size: 13px;
  }

  /* 品牌展示区域 */
  .chelsea-brand-section {
    padding: 20px;
  }

  .brand-title {
    font-size: 24px;
  }

  .brand-subtitle {
    font-size: 14px;
  }

  /* 退出登录按钮 */
  .logout-section {
    height: auto;
    padding: 15px 0;
  }

  .logout-button {
    width: 100%;
    max-width: 320px;
    font-size: 15px;
    padding: 10px 14px;
  }
}

@media (max-width: 480px) {
  .chelsea-personal-page {
    padding: 10px;
  }

  .user-avatar {
    padding: 12px 15px;
  }

  .user-icon {
    width: 50px;
    height: 50px;
  }

  .user-email {
    font-size: 14px;
  }

  .function-cards-grid {
    gap: 10px;
  }

  .function-card {
    padding: 12px;
    min-height: 120px;
  }

  .suggestion-icon {
    font-size: 24px;
  }

  .card-content h3 {
    font-size: 15px;
  }

  .card-content p {
    font-size: 12px;
  }

  .logout-button {
    width: 100%;
    font-size: 14px;
  }
}
</style>
