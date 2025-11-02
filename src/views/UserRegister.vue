<template>
  <!-- 顶部导航栏 - 复用登录页的导航样式，保持品牌一致性 -->
  <nav class="global-nav">
    <ul class="global-nav__inner-wrapper">
      <li class="global-nav__link-wrapper">
        <!-- 返回按钮，左侧白色背景按钮 -->
        <a class="global-nav__link" href="/">
          &lt;
          <!-- 使用HTML实体显示小于号作为返回箭头 -->
        </a>
      </li>
      <li class="global-nav__logo-wrapper">
        <!-- 俱乐部Logo，放在中间位置，强调品牌形象 -->
        <!-- 曼城俱乐部Logo图片 -->
        <img src="../assets/logo/2016.png" alt="Man City Logo" class="city-logo" />
      </li>
    </ul>
  </nav>

  <!-- 注册页面主体 - 包含背景和表单卡片 -->
  <div class="login-page-container">
    <!-- 背景图案部分 - 蓝色波浪背景增强品牌感，右侧展示球员图片 -->
    <div class="background-pattern"></div>

    <!-- 注册表单卡片 - 白色卡片提供清晰的视觉对比，突出表单内容 -->
    <div class="login-card">
      <!-- 登录/注册切换标签 - 提供用户导航选项 -->
      <div class="login-tabs">
        <!-- 登录标签 - 深蓝底白色文字 -->
        <div class="tab" @click="goToLogin">登录</div>
        <!-- 点击登录按钮，跳转到登录页 -->
        <!-- 注册标签 - 当前激活状态，白底深蓝文字，带边框 -->
        <div class="tab active">注册</div>
      </div>

      <!-- 注册表单内容 - 用户填写信息的主要区域 -->
      <div class="form-content">
        <!-- 必填字段说明 - 蓝色竖条标记，灰色文字说明 -->
        <div class="required-fields"><span class="asterisk">*</span> 指示必填字段</div>

        <!-- 出生日期选择 - 三个并排的下拉框 -->
        <div class="form-group">
          <label><span class="asterisk">*</span> 出生日期</label>
          <div class="date-selector">
            <!-- 日期下拉框 -->
            <select class="date-select" v-model="data.birthDay">
              <option value="">日</option>
              <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
            </select>
            <!-- 月份下拉框 -->
            <select class="date-select" v-model="data.birthMonth">
              <option value="">月</option>
              <option v-for="month in 12" :key="month" :value="month">{{ month }}</option>
            </select>
            <!-- 年份下拉框 -->
            <select class="date-select" v-model="data.birthYear">
              <option value="">年</option>
              <option v-for="year in 50" :key="year" :value="2025 - year">{{ 2025 - year }}</option>
            </select>
            <!-- 帮助图标，提供额外信息 -->
            <div class="help-icon">?</div>
          </div>
          <p class="helper-text">您必须提供您的出生日期，因为这将用于将来的身份识别和安全。</p>
          <span v-if="errors.birthDate" class="error-text">{{ errors.birthDate }}</span>
        </div>

        <!-- 电子邮件地址输入框 -->
        <div class="form-group">
          <label><span class="asterisk">*</span> 电子邮件地址</label>
          <input type="email" placeholder="电子邮件地址" class="form-input" v-model="data.email" />
          <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
        </div>

        <!-- 密码输入框 -->
        <div class="form-group">
          <label><span class="asterisk">*</span> 密码</label>
          <div class="password-input">
            <input type="password" placeholder="密码" class="form-input" v-model="data.password" />
            <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
            <span class="eye-icon">
              <!-- 眼睛图标 - 用于切换密码可见性 -->
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="eye"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <!-- 确认密码输入框 -->
        <div class="form-group">
          <label><span class="asterisk">*</span> 确认密码</label>
          <div class="password-input">
            <input
              type="password"
              placeholder="确认密码"
              class="form-input"
              v-model="data.confirmPassword"
            />
            <span v-if="errors.confirmPassword" class="error-text">{{
              errors.confirmPassword
            }}</span>
            <span class="eye-icon">
              <!-- 眼睛图标 - 同上 -->
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="eye"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <!-- 订阅选项 - 包含是/否按钮选择 -->
        <div class="form-group">
          <label
            ><span class="asterisk">*</span>
            您想通过接收我们的独家电子邮件，第一时间了解我们的比赛、新签约、门票和俱乐部新闻以及合作伙伴优惠吗？</label
          >
          <div class="subscription-options">
            <!-- 是按钮  :class="{ active: yesButtonActive }" 就是告诉 Vue：
           “、当 yesButtonActive 为 true 时，给这个按钮加上 active 类；否则就去掉。”、 -->
            <button class="option-btn" :class="{ active: yesButtonActive }" @click="selectYes()">
              是的
            </button>
            <!-- 否按钮 -->
            <button class="option-btn" :class="{ active: noButtonActive }" @click="selectNo()">
              不
            </button>
          </div>
          <p class="helper-text">我们代表合作伙伴发送优惠新闻，但不会直接与他们分享您的信息。</p>
        </div>

        <!-- 隐私政策说明 - 蓝底白字提示框 -->
        <div class="privacy-notice">
          <p>
            提交您的详细信息，即表示您同意城市足球集团根据我们的<a href="#" class="privacy-link"
              >隐私政策</a
            >使用您的数据。我们使用您的数据来个性化和改善您在我们平台上的体验，提供您请求的服务并了解您的兴趣。
          </p>
        </div>

        <!-- 注册按钮 - 深蓝底白字，显眼的提交按钮 -->
        <button class="register-btn" @click="handleRegister" :disabled="isRegistering">
          {{ isRegistering ? '注册中...' : '注册' }}
        </button>

        <!-- 分隔线 - 视觉上分隔注册按钮和登录链接 -->
        <div class="divider"></div>

        <!-- 已有账户跳转登录链接 -->
        <div class="login-link">
          <span>已经有账户? </span>
          <a href="/" class="login-now">登录</a>
        </div>
        <!-- 显示注册过程中的错误信息 -->
        <div v-if="regi" class="register-error">
          {{ regi }}
        </div>
      </div>
    </div>
  </div>

  <!-- 底部区域 - 社交媒体、链接和版权信息 -->
  <div class="bottom">
    <div class="footer">
      <!-- 顶部区域 - 社交媒体图标和返回顶部按钮 -->
      <div class="footer-top">
        <!-- 社交媒体图标 -->
        <div class="social-icons">
          <a href="#" class="social-icon">
            <!-- YouTube图标 -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path>
            </svg>
          </a>
          <a href="#" class="social-icon">
            <!-- Instagram图标 -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              ></path>
            </svg>
          </a>
          <a href="#" class="social-icon">
            <!-- Twitter/X图标 -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              ></path>
            </svg>
          </a>
          <a href="#" class="social-icon">
            <!-- Facebook图标 -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path>
            </svg>
          </a>
        </div>

        <!-- 返回顶部按钮 -->
        <a href="#top" class="back-to-top">返回页首</a>
      </div>

      <!-- 中间链接区域 - 各种政策和帮助链接 -->
      <div class="footer-links">
        <a href="#">可及性</a>
        <a href="#">公平处理通知</a>
        <a href="#">Cookie政策</a>
        <a href="#">隐私选项</a>
        <a href="#">使用条款</a>
        <a href="#">帮助和支持</a>
      </div>

      <!-- 分隔线 -->
      <div class="footer-divider"></div>

      <!-- 底部版权区域 -->
      <div class="footer-bottom">
        <a href="#" class="footer-logo">联系风险控制</a>
        <div class="copyright">曼城足球俱乐部 2025</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里为注册页面的脚本，逻辑部分后续自己添加
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue' //  新增：导入reactive用于创建响应式对象
// import { useStore } from 'vuex' // 如果后续需要使用 Vuex，取消此行注释
import { ElMessage } from 'element-plus'
import { registerUser } from '@/api/index.js' // 🔥 新增：导入我们写的axios函数

/***** 注册页面初始化 - 第1步：获取必要实例 *****/
const router = useRouter() //引入路由 ，用于页面跳转
// const store = useStore() // 如果后续需要使用 Vuex，取消此行注释
//跳转到登录页的方法
function goToLogin() {
  router.push('/login')
}

///***** 注册页面初始化 - 第2步：定义用户数据对象 *****/
// 创建响应式用户数据对象，包含所有注册表单字段
// reactive()是Vue3的响应式API，当数据变化时UI会自动更新
const data = reactive({
  name: '', // 用户输入的用户名
  email: '', // 用户输入的电子邮件地址
  password: '', // 用户输入的密码
  confirmPassword: '', // 用户输入的确认密码
  birthDate: '', // 用户输入的出生日期
  subscribe: false, // 用户是否订阅
  birthDay: '', // 出生日期-日
  birthMonth: '', // 出生日期-月
  birthYear: '', // 出生日期-年
})

/***** 注册页面初始化 - 第3步：定义按钮状态 *****/
// 创建响应式错误信息对象，与表单字段一一对应
// 用于存储和显示每个字段的验证错误信息
const errors = reactive({
  name: '', // 用户名错误信息
  email: '', // 电子邮件地址错误信息
  password: '', // 密码错误信息
  confirmPassword: '', // 确认密码错误信息
  birthDate: '', // 出生日期错误信息
})

/***** 注册页面初始化 - 第4步：定义UI状态变量 *****/
// 跟踪注册状态的变量，用于控制按钮状态和显示文字
const isRegistering = ref(false) // 是否正在注册 ，用于禁用按钮防止重复提交
const regi = ref('') // 注册过程中的错误信息，用于显示给用户

/***** 表单验证功能 - 验证用户输入 *****/
// 验证表单的函数，检查所有字段是否符合要求
function validateForm() {
  /***** 表单验证流程 - 第1步：初始化验证状态 *****/
  // 假设一开始表单是有效的
  let isValid = true
  /***** 表单验证流程 - 第2步：验证邮箱 *****/
  // 检查用户是否输入了电子邮件
  if (!data.email) {
    // 如果为空，设置错误信息
    errors.email = '请输入电子邮件地址' //"在错误对象中，给邮箱字段设置一个错误提示"
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    // 如果不为空但格式不正确（没有@或域名），设置错误信息
    // 正则表达式 /^\S+@\S+\.\S+$/ 检查是否符合邮箱格式
    errors.email = '请输入有效的电子邮件地址'
    isValid = false
  } else {
    // 如果邮箱格式正确，清除错误信息
    errors.email = ''
  }

  /***** 表单验证流程 - 第3步：验证密码 *****/
  if (!data.password) {
    // 如果密码为空，设置错误信息
    errors.password = '请输入密码'
    isValid = false
  } else if (data.password.length < 6) {
    //拿到用户输入密码然后对比长度
    // 如果密码长度小于6位，设置错误信息
    errors.password = '密码至少6位'
    isValid = false
  } else {
    // 如果密码长度大于等于6位，清除错误信息
    errors.password = ''
  }

  // 表单验证流程 - 第4步：验证确认密码
  if (!data.confirmPassword) {
    // 如果确认密码为空，设置错误信息
    errors.confirmPassword = '请确认密码'
    isValid = false
  } else if (data.password !== data.confirmPassword) {
    // 如果确认密码与密码不匹配，设置错误信息
    errors.confirmPassword = '密码不匹配'
    isValid = false
  } else {
    // 如果确认密码与密码匹配，清除错误信息
    errors.confirmPassword = ''
  }

  /***** 表单验证流程 - 第5步：验证出生日期 *****/
  if (!data.birthDay || !data.birthMonth || !data.birthYear) {
    // 如果任何一个日期字段为空，设置错误信息
    errors.birthDate = '请选择出生日期'
    isValid = false
  } else {
    // 如果日期字段不为空，清除错误信息
    errors.birthDate = ''
  }
  /***** 表单验证流程 - 第6步：返回最终验证结果 *****/
  // 如果所有验证都通过，isValid为true；任何验证失败，isValid为false
  return isValid
}

/***** 注册提交功能 - 处理用户注册 *****/
// 处理注册的函数，当用户点击注册按钮时调用
function handleRegister() {
  /***** 注册流程 - 第1步：清除旧错误 *****/
  // 重置错误信息，避免显示旧的错误
  regi.value = ''

  /***** 注册流程 - 第2步：验证表单 *****/
  // 调用validateForm函数验证所有表单字段
  if (!validateForm()) {
    // 如果验证失败，终止注册流程
    return
  }
  /***** 注册流程 - 第3步：更新UI状态 *****/
  // 设置注册中状态为true，禁用注册按钮防止重复提交
  isRegistering.value = true

  /***** 注册流程 - 第4步：调用我们在api/index.js里写的registerUser函数 *****/
  // 准备要发送的注册数据
  const userData = {
    username: data.email, // 使用邮箱作为用户名（最简单的解决方案）
    email: data.email, //email是邮箱 userData.email是用户输入的邮箱
    password: data.password, //password是密码 userData.password是用户输入的密码
    birthDate: `${data.birthYear}-${data.birthMonth}-${data.birthDay}`,
    // 🔥 修改：可能后端需要的字段名不同，我们试试几种可能的名字
    subscribe: data.subscribe, // 是否订阅 - 布尔值
    subscribeToNewsletter: data.subscribe, // 订阅新闻字段
    newsletter: data.subscribe, // 另一个可能的字段名
    // 🔥 新增：一些后端可能需要的额外字段
    confirmPassword: data.confirmPassword, // 确认密码
    acceptTerms: true, // 同意条款（默认为true）
  }
  // 🔥 新增：在发送前打印数据，方便调试
  console.log('📤 即将发送的注册数据：', userData)
  console.log('📅 生日格式：', userData.birthDate)

  // 调用我们在api/index.js里写的registerUser函数
  registerUser(userData)
    .then((result) => {
      // result是注册成功后的结果
      // 打印注册成功信息，方便调试
      console.log('注册成功', result)

      /***** 注册流程 - 第6步：显示成功信息 *****/
      // AntDesignVue等效实现
      ElMessage.success('注册成功，欢迎加入曼城大家庭！')

      /***** 注册流程 - 第7步：恢复UI状态 *****/
      // 将按钮状态恢复为"注册"，而不是"注册中..."
      isRegistering.value = false

      /***** 注册流程 - 第8步：页面跳转 *****/
      // 注册成功后，引导用户前往登录页面
      router.push('/login')
    })
    /***** 注册流程 - 第9步：处理失败结果 *****/
    // .catch()只在Promise失败(reject)后执行
    // error参数是store中reject()传递的错误对象
    .catch((error) => {
      // 打印注册失败信息，方便调试
      console.log('注册失败', error)

      /***** 注册流程 - 第10步：显示错误信息 *****/
      // 将错误信息显示给用户
      // 如果error对象有message属性，使用它，否则显示默认错误消息
      regi.value = '注册失败，邮箱被使用过了'

      /***** 注册流程 - 第11步：恢复UI状态 *****/
      // 将按钮状态恢复为"注册"，而不是"注册中..."
      isRegistering.value = false
    })
}

// 定义是的和不按钮的背景色和字体颜色
const yesButtonActive = ref(false)
const noButtonActive = ref(false)

// 改变点击是后的颜色
function selectYes() {
  yesButtonActive.value = true //点击后变色

  noButtonActive.value = false // 点击不时,不换色
}
// 改变点击不后的颜色
function selectNo() {
  yesButtonActive.value = false //点击是时后不换色
  noButtonActive.value = true // 点击不时换色
}
</script>

<style scoped lang="less">
/* 顶部导航栏样式 - 与登录页保持一致 */
.global-nav {
  width: 100%;
  height: 95px; /* 设置导航栏高度 */
  background-color: #98c5e9; /* 曼城浅蓝色背景 */
}

/* 导航栏内部容器样式 */
.global-nav__inner-wrapper {
  justify-content: flex-start;
  position: relative;
  height: 100%;
  display: flex; /* 使用flex布局 */
  padding: 12px;
  margin: 0;
  box-sizing: border-box;
  list-style: none; /* 去掉列表默认的点 */
  align-items: center; /* 垂直居中对齐 */
}

/* 返回按钮样式 */
.global-nav__link-wrapper {
  height: 48px;
  background-color: #fff; /* 白色背景 */
  margin-left: 30px; /* 左侧间距 */
}

/* 返回链接文字样式 */
.global-nav__link {
  padding: 12px 24px;
  font-size: 14px;
  line-height: 24px;
}

/* Logo容器样式 */
.global-nav__logo-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: 48px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Logo文字样式 */
.global-nav__logo-wrapper1 {
  padding: 12px 24px;
  font-size: 14px;
  line-height: 24px;
}

/* 城市Logo样式 */
.city-logo {
  width: 40px;
  height: 40px;
}

/* 所有链接的基本样式 */
a {
  display: block;
  text-decoration: none; /* 去掉下划线 */
  color: #001838; /* 深蓝色文字 */
}

/* 注册页面容器 */
.login-page-container {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 95px); /* 减去顶部导航栏的高度 */
  background-color: #ffffff; /* 浅蓝色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 防止背景图案溢出 */
  padding: 40px 0;
}

/* 背景图案 - 复用登录页的波浪背景 */
.background-pattern {
  position: absolute;
  width: 100%;
  height: 430px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/logo/preimage.jpg'); /* 使用你的图片路径 */
  background-size: cover;
  background-position: center;
  opacity: 0.5; /* 降低不透明度，使其作为背景 */
  z-index: 0;
}

/* 注册卡片 */
.login-card {
  position: relative;
  width: 638px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1; /* 确保卡片在背景之上 */
  margin: 40px 0;
}

/* 登录/注册切换标签 */
.login-tabs {
  position: absolute;
  top: -35px;
  left: 50%; /* 使用左侧50%定位 */
  transform: translateX(-50%); /* 向左移动自身宽度的50%，实现水平居中 */
  width: 360px; /* 两个标签的总宽度 */
  height: 63px;
  display: flex;
}

.tab {
  width: 180px;
  height: 63px; /* 统一高度 */
  padding: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box; /* 确保边框计算在宽高内 */
}

/* 左侧登录标签样式 */
.tab:first-child {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 24, 56); /* 白色文字 */
  border-radius: 4px 0 0 4px; /* 左侧圆角 */
  height: 63px; /* 确保高度一致 */
}

/* 右侧注册标签样式 - 当前激活状态 */
.tab:nth-child(2) {
  background-color: rgb(0, 24, 56);
  color: rgb(0, 24, 56);
  border: 2px solid #000;
  border-radius: 0 4px 4px 0; /* 右侧圆角 */
  height: 63px; /* 确保高度一致 */
}

/* 标签激活状态 */
.tab.active {
  color: #38d6ff; /* 曼城蓝色 */
  font-weight: 600;
}

/* 表单内容 */
.form-content {
  padding: 50px 60px 40px 60px;
}

/* 必填字段提示区域 */
.required-fields {
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
  padding-left: 8px;
  border-left: 3px solid #38d6ff; /* 左侧蓝色竖条 */
}

/* 红色星号标记必填字段 */
.asterisk {
  color: red;
  margin-right: 4px;
}

/* 表单组 */
.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #001832;
  font-weight: 550;
  line-height: 16px;
}

/* 日期选择器容器 */
.date-selector {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* 日期下拉框样式 */
.date-select {
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  appearance: none; /* 移除默认的下拉箭头 */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
}

/* 帮助图标 */
.help-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}

/* 表单输入框通用样式 */
.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  outline: none;
}

.form-input:focus {
  border-color: #39b3ff;
}

/* 帮助文本 */
.helper-text {
  margin-top: 5px;
  font-size: 12px;
  color: #666;
}

/* 密码输入框 */
.password-input {
  position: relative;
}

/* 眼睛图标 */
.eye-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #999;
}

/* 订阅选项容器 */
.subscription-options {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

/* 是/否按钮样式 */
.option-btn {
  flex: 1;
  padding: 12px;
  background-color: #f5f5f5;
  color: rgb(0, 24, 56);
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  font-weight: 600;
}

.option-btn:hover {
  background-color: #e0e0e0;
}
.option-btn.active {
  background-color: rgb(0, 24, 56);
  color: rgba(56, 214, 255);
}

/* 隐私政策提示框 */
.privacy-notice {
  margin: 24px 0;
  padding: 16px;
  background-color: #e6f7ff; /* 浅蓝色背景 */
  border-left: 7px solid rgba(56, 214, 255); /* 蓝色边框 */
  border-radius: 4px;
}

.privacy-notice p {
  margin: 0;
  font-size: 14px;
  color: #001838;
  line-height: 1.5;
}

/* 隐私政策链接样式 */
.privacy-link {
  display: inline;
  color: #001838;
  text-decoration: underline;
  font-weight: 600;
}

/* 注册按钮 */
.register-btn {
  width: 100%;
  padding: 12px;
  background-color: rgb(0, 24, 56); /* 曼城深蓝色 */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: background-color 0.3s ease;
}

.register-btn:hover {
  background-color: #1f6083;
}

/* 分隔线 */
.divider {
  height: 1px;
  background-color: #ddd;
  margin: 24px 0;
}

/* 登录链接 */
.login-link {
  text-align: center;
  font-size: 14px;
  margin-top: 16px;
  color: #001838;
  font-weight: 700;
}

.login-link .login-now {
  display: inline;
  color: #001838;
  font-weight: 600;
  margin-left: 4px;
  border-bottom: 2px solid #000;
}

/* 错误文本样式 */
.error-text {
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
  display: block;
}

/* 注册错误消息样式 */
.register-error {
  background-color: #fff2f0;
  border: 1px solid #ffccc7;
  color: #ff4d4f;
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 16px;
  font-size: 14px;
}

/* 底部样式 - 与登录页保持一致 */
.bottom {
  width: 100%;
  background-color: #8ac0e9;
  padding-top: 20px;
}

.footer {
  padding: 32px 42px;
}

/* 底部顶部区域 */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

/* 社交媒体图标区 */
.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 返回顶部链接 */
.back-to-top {
  color: #001838;
  font-size: 13px;
  font-weight: 700;
  border-bottom: 2px solid #000;
}

/* 底部链接区 */
.footer-links {
  display: flex;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer-links a {
  color: #001838;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  text-decoration: none;
  display: inline;
}

.footer-links a:hover {
  text-decoration: underline;
}

/* 底部分隔线 */
.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 20px 0;
}

/* 底部版权区 */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  color: #001838;
  font-size: 10px;
  font-weight: 400;
  text-decoration: none;
}

.copyright {
  color: #001838;
  font-size: 10px;
  font-weight: 400;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  /* 导航栏 */
  .global-nav {
    height: 70px;
  }

  .global-nav__link-wrapper {
    margin-left: 15px;
    height: 40px;
  }

  .global-nav__link {
    padding: 8px 16px;
    font-size: 12px;
  }

  .global-nav__logo-wrapper {
    width: 60px;
    height: 40px;
  }

  .city-logo {
    width: 35px;
    height: 35px;
  }

  /* 页面容器 */
  .login-page-container {
    min-height: calc(100vh - 70px);
    padding: 20px 10px;
  }

  .background-pattern {
    height: 300px;
  }

  /* 注册卡片 */
  .login-card {
    width: 95%;
    max-width: 450px;
    margin: 20px 0;
  }

  /* 标签 */
  .login-tabs {
    width: 280px;
    top: -30px;
    height: 50px;
  }

  .tab {
    width: 140px;
    height: 50px;
    font-size: 30px;
    padding: 5px;
  }

  .tab:first-child,
  .tab:nth-child(2) {
    height: 50px;
  }

  /* 表单内容 */
  .form-content {
    padding: 40px 30px 30px 30px;
  }

  /* 表单组 */
  .form-group label {
    font-size: 14px;
  }

  .date-select,
  .form-input {
    padding: 10px;
    font-size: 13px;
  }

  /* 帮助文本 */
  .helper-text {
    font-size: 11px;
  }

  /* 隐私政策提示框 */
  .privacy-notice {
    padding: 12px;
    margin: 20px 0;
  }

  .privacy-notice p {
    font-size: 12px;
  }

  /* 注册按钮 */
  .register-btn {
    font-size: 14px;
    padding: 10px;
    margin-top: 20px;
  }

  /* 底部 */
  .bottom {
    padding-top: 15px;
  }

  .footer {
    padding: 20px 24px;
  }

  .footer-top {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 15px;
  }

  .social-icons {
    gap: 12px;
  }

  .social-icon svg {
    width: 20px;
    height: 20px;
  }

  .back-to-top {
    font-size: 12px;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 12px;
    font-size: 11px;
  }

  .footer-links a {
    font-size: 11px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .login-card {
    width: 100%;
    border-radius: 0;
  }

  .form-content {
    padding: 40px 20px 20px 20px;
  }

  .login-tabs {
    width: 240px;
    height: 45px;
  }

  .tab {
    width: 120px;
    height: 45px;
    font-size: 24px;
  }

  .tab:first-child,
  .tab:nth-child(2) {
    height: 45px;
  }

  .date-selector {
    flex-direction: column;
    gap: 8px;
  }

  .date-select {
    width: 100%;
  }

  .subscription-options {
    flex-direction: column;
    gap: 8px;
  }

  .option-btn {
    width: 100%;
  }

  .footer-links {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
