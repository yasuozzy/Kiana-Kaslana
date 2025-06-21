<template>
  <!-- 顶部导航栏，蓝色背景 -->
  <nav class="global-nav">
    <ul class="global-nav__inner-wrapper">
      <li class="global-nav__link-wrapper">
        <!-- 这里的返回按钮，为了单页应用体验，推荐使用 <router-link to="/"> -->
        <a class="global-nav__link" href="/">
          &lt; <!-- 使用HTML实体来显示小于号箭头 -->
        </a>
      </li>
      <li class="global-nav__logo-wrapper">
        <!-- Logo 图片 -->
        <router-link to="/" class="global-nav__logo-wrapper1">
          <!-- <img src="../assets/logo/logo-man-city.svg" alt="Man City Logo" class="city-logo"> -->
        </router-link>
      </li>
    </ul>
  </nav>

  <!-- 登录页面主体 -->
  <div class="login-page-container">
    <!-- 背景图案部分 -->
    <div class="background-pattern"></div>

    <!-- 登录表单卡片 -->
    <div class="login-card">
      <!-- 登录/注册切换标签 -->
      <div class="login-tabs">
        <div class="tab active">登录</div>
        <div class="tab">注册</div>
      </div>

      <!-- 表单内容 -->
      <div class="form-content">
        <!-- 电子邮件/支持者编号输入框 -->
        <div class="form-group">
          <label>电子邮件地址或支持者编号</label>
          <input type="text" placeholder="电子邮件地址或支持者编号" />
        </div>

        <!-- 密码输入框 -->
        <div class="form-group">
          <label>密码</label>
          <div class="password-input">
            <input type="password" placeholder="密码" />
            <span class="eye-icon">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
            </span>
          </div>
        </div>

        <!-- 忘记密码链接 -->
        <div class="forgot-password">
          <a href="#">忘记密码?</a>
        </div>

        <!-- 登录按钮 -->
        <button class="login-btn">登录</button>

        <!-- 提示信息框 -->
        <div class="info-box">
          <p>我们更改了您登录 Man City 的方式。如果您之前通过任何社交网络登录过,<a href="/">请在此处创建新密码以登录您的账户</a></p>
        </div>

        <!-- 蓝色下户线 -->
         <div class="underline">
          <span></span>
         </div>

        <!-- 注册链接 -->
        <div class="register-link">
          <span>没有账户? </span>
          <a href="#" class="register-now">立即注册</a>
        </div>
      </div>
    </div>
  </div>
  <!-- 底部 -->


  <div class="bottom">
    <div class="footer">
      <div class="footer-top">
        <!-- 社交媒体图标 -->
        <div class="social-icons">
          <a href="#" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
          </a>
          <a href="#" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
          </a>
          <a href="#" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
          </a>
          <a href="#" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
          </a>
          <a href="#" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
          </a>
        </div>

        <!-- 返回页首按钮 -->
        <a href="#top" class="back-to-top">返回页首</a>
      </div>

      <!-- 中间的链接 -->
      <div class="footer-links">
          <a href="#">可及性</a>
          <a href="#">公平处理通知</a>
          <a href="#">Cookie 政策</a>
          <a href="#">隐私选项</a>
          <a href="#">使用条款</a>
          <a href="#">帮助和支持</a>
        </div>
      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <a href="#" class="footer-logo">联系风险控制</a>
        <div class="copyright">曼城足球俱乐部 2025</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以添加登录逻辑，比如表单验证、提交登录请求等
</script>

<style scoped lang="less">
/* 顶部导航栏样式 */
.global-nav {
  width: 100%;
  height: 95px; /* 设置导航栏高度 */
  background-color: #98C5E9; /* 曼城浅蓝色背景 */
}

/* 导航栏内部容器样式 */
.global-nav__inner-wrapper{
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
.global-nav__link-wrapper{
  height: 48px;
  background-color: #fff; /* 白色背景 */
  margin-left: 30px; /* 左侧间距 */
}

/* 返回链接文字样式 */
.global-nav__link{
  padding: 12px 24px;
  font-size: 14px;
  line-height: 24px;
}

/* Logo容器样式 */
.global-nav__logo-wrapper{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: 48px;
  background-color: #fff;
}

/* Logo文字样式 */
.global-nav__logo-wrapper1{
  padding: 12px 24px;
  font-size: 14px;
  line-height: 24px;
}

/* 所有链接的基本样式 */
a{
  display: block;
  text-decoration: none; /* 去掉下划线 */
  color: #001838; /* 深蓝色文字 */
}

/* 登录页面容器 */
.login-page-container {
  position: relative;
  width: 100%;
  height: 430px;
  height: calc(100vh - 95px); /* 减去顶部导航栏的高度 */
  background-color: #ffffff; /* 浅蓝色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 防止背景图案溢出 */
}

/* 背景图案 */
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

/* 登录卡片 */
.login-card {
  position: relative;
  width: 638px;
  height: 509px ;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1; /* 确保卡片在背景之上 */
  // overflow: hidden; /* 隐藏溢出内容 */
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
  // overflow: visible; /* 改为可见溢出，避免裁剪边框 */
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

.tab:first-child {
  background-color: rgb(0, 24, 56);
  border-radius: 4px 0 0 4px; /* 左侧圆角 */
  height: 63px; /* 确保高度一致 */
}

.tab:nth-child(2) {
  background-color: #fff;
  color:rgb(0, 24, 56) ;
  border: 2px solid #000;
  border-radius: 0 4px 4px 0; /* 右侧圆角 */
  height: 63px; /* 确保高度一致 */
}

.tab.active {
  color: #38d6ff; /* 曼城蓝色 */
  font-weight: 600;
  // border-bottom: 3px solid #001489;
}

/* 表单内容 */
.form-content {
  padding: 50px 60px 40px 60px;
}

/* 表单组 */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #001832;
  font-weight: 550;
  line-height: 16px;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #39b3ff;
}

/* 密码输入框 */
.password-input {
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #999;
}

/* 忘记密码链接 */
.forgot-password {
  margin-bottom: 24px;

}

.forgot-password a {
  display: inline; //display: inline 是 CSS 属性，让元素变成 “行内显示模式”，就像文字一样并排排列，不独占一行。
  font-size: 13px;
  color: rgb(0,24,56);
  font-weight: 700;

}

/* 登录按钮 */
.login-btn {
  width: 100%;
  padding: 12px;
  background-color: rgb(0, 24, 56); /* 曼城蓝色 */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #1f6083;
}

/* 提示信息框 */
.info-box {
  margin: 24px 0;
  padding: 16px;
  background-color: #e6f7ff; /* 浅蓝色背景 */
  border-left: 7px solid rgba(56,214,255); /* 蓝色边框 */
  border-radius: 4px;
}

.info-box p {
  margin: 0;
  font-size: 16px;
  color: rgb(0, 24, 56);
  line-height: 1.5;
  font-weight: 700;
  line-height: 24px;
}
.info-box a{
 display: inline-block;   //关键：既能并排，又能设置宽度
  border-bottom: 2px solid #000;
}
.info-box a:hover {
  border-bottom: none; /* 鼠标移上时，下划线消失 */
}

//下划线
.underline span{
  //转为块级别,确保有行宽高才能生效下划线
  display: inline-block; /* 或 block */
  width: 100%;         /* 设置宽度 */
  height: 1px;          /* 确保有高度 */
  border-bottom: 2px solid #4bc1f3;
}

/* 注册链接 */
.register-link {
  text-align: center;
  font-size: 14px;
  margin-top: 23px;
  font-weight: 700;
}

.register-link span {
  color: rgb(0, 24, 56);
}

.register-link .register-now {
  display: inline;
  color: rgb(0, 24, 56);
  font-weight: 600;
  margin-left: 4px;
  border-bottom: 2px solid #000;
}

//底部
.bottom{
  width: 100%;
  height: 197px;
  background-color: #8ac0e9;
  margin-top: 50px;
}
.footer{
  height: 133px;
  padding: 32px 42px;
  // max-width: 1200px;
  // margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  gap: 15px; /* 图标之间的间距 */
}

.social-icon {
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-links {
  display: flex;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer-links a {
  color:rgb(0, 24, 56) ;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  text-decoration: none;
  display: inline;

}

.footer-links a:hover {
  text-decoration: underline;
}

.back-to-top {
  color:rgb(0, 24, 56) ;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  border-bottom: 2px solid #000;
  text-decoration: none;
}

.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 20px 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  color: white;
  font-size: 10px;
  font-weight: 400;
  color:rgb(0, 24, 56) ;
  text-decoration: none;
}

.copyright {
  color: white;
  font-size: 10px;
  font-weight: 400;
  color:rgb(0, 24, 56) ;
}
</style>
