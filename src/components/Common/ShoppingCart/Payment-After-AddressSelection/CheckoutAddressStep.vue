<template>
  <div class="checkout-page">
    <!-- Header -->
    <header class="checkout-header">
      <div class="header-container">
        <div class="logo">
          <img
            src="https://store.chelseafc.com/content/ws/all/5f2bb399-8eeb-4abc-a51e-72facc7eaf63.svg"
            alt="CFC LDN Logo"
          />
        </div>
        <div class="cart-icon">
          <div class="cart-badge">1</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 2L7 6H3C1.9 6 1 6.9 1 8V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V8C23 6.9 22.1 6 21 6H17L15 2H9Z"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </header>

    <!-- Promo Banner -->
    <div class="promo-banner">所有订单免费英国送货！使用代码 <strong>FREESHIP</strong></div>

    <!-- Main Content -->
    <div class="checkout-content">
      <div class="checkout-form">
        <!-- Security Badge -->
        <h1 class="section-title">安全结账</h1>

        <!-- PayPal Button -->
        <div class="paypal-section">
          <button class="paypal-button">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M7 10h10v1H7z" />
            </svg>
            PayPal Checkout
          </button>
        </div>

        <!-- Contact Section -->
        <div class="form-section">
          <div class="section-header">
            <h2 class="section-subtitle">联系</h2>
            <a href="#" class="login-link">登录</a>
          </div>

          <div class="form-group">
            <input type="email" class="form-input error" placeholder="电子邮件*" />
            <span class="error-message">此字段为必填项。</span>
          </div>
        </div>

        <!-- Shipping Address Section -->
        <div class="form-section">
          <h2 class="section-subtitle">送货地址</h2>

          <div class="form-group">
            <label class="form-label">选择国家/地区</label>
            <select class="form-select">
              <option value="GB">英国</option>
              <option value="US">美国</option>
              <option value="CN">中国</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <input type="text" class="form-input error" placeholder="名字*" />
              <span class="error-message">此字段为必填项。</span>
            </div>
            <div class="form-group">
              <input type="text" class="form-input error" placeholder="姓*" />
              <span class="error-message">此字段为必填项。</span>
            </div>
          </div>

          <div class="form-group">
            <input type="tel" class="form-input" placeholder="电话*" />
          </div>

          <div class="form-group">
            <div class="search-input-wrapper">
              <svg
                class="search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <input type="text" class="form-input search-input error" placeholder="搜索地址*" />
            </div>
            <span class="error-message">这个地址太短了。</span>
          </div>

          <div class="form-group">
            <input type="text" class="form-input" placeholder="地址 2（Apt、Unit、Ste 等）" />
          </div>

          <div class="form-row three-columns">
            <div class="form-group">
              <input type="text" class="form-input error" placeholder="城镇/城市*" />
              <span class="error-message">这个城市名字太短了。</span>
            </div>
            <div class="form-group">
              <input type="text" class="form-input" placeholder="县" />
            </div>
            <div class="form-group">
              <input type="text" class="form-input" placeholder="邮政编码*" />
            </div>
          </div>

          <!-- Consent Checkboxes -->
          <div class="consent-section">
            <p class="consent-intro">
              勾选以下方框，即表示您同意通过电子邮件和短信收到以下促销的产品、服务、特别优惠、活动和促销详细信息：
            </p>

            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" class="checkbox-input" />
                <span class="checkbox-text">
                  Fanatics（International）Limited，经营切尔西足球俱乐部官方网上商店
                </span>
              </label>
            </div>

            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" class="checkbox-input" />
                <span class="checkbox-text">
                  切尔西足球俱乐部（包括†队切尔西足球俱乐部的官方合作伙伴（勾选此框，即表示您确认您已年满
                  18 岁））
                </span>
              </label>
            </div>

            <div class="privacy-links">
              <a href="#" class="privacy-link">Fanatics 隐私政策</a>
              <a href="#" class="privacy-link">切尔西足球俱乐部隐私政策</a>
            </div>
          </div>

          <!-- Continue Button -->
          <button class="continue-button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" stroke-width="2" />
              <path
                d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11"
                stroke="white"
                stroke-width="2"
              />
              <circle cx="12" cy="16" r="1" fill="white" />
            </svg>
            继续结账
          </button>
        </div>
      </div>

      <!-- Order Review Banner -->
      <div class="review-banner">
        <h2 class="review-title">ALMOST THERE!</h2>
        <p class="review-subtitle">REVIEW YOUR ORDER BEFORE IT'S FINAL</p>
      </div>

      <!-- Footer Icons -->
      <div class="footer-icons">
        <div class="social-icons">
          <button class="icon-button chinese">中</button>
          <button class="icon-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
              />
            </svg>
          </button>
          <button class="icon-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
              />
            </svg>
          </button>
          <button class="icon-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
              />
            </svg>
          </button>
        </div>
        <div class="mascot">
          <img src="https://via.placeholder.com/80x80?text=Mascot" alt="Mascot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutAddressStep',
  data() {
    return {
      // 数据写死，逻辑由用户自己实现
    }
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box; /* 盒模型包含边框和内边距 */
  margin: 0; /* 清除默认外边距 */
  padding: 0; /* 清除默认内边距 */
}

.checkout-page {
  min-height: 100vh; /* 最小高度为视口高度 */
  background-color: #f5f5f5; /* 浅灰色背景 */
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 系统字体 */
}

/* Header 头部区域 */
.checkout-header {
  background-color: white; /* 白色背景 */
  border-bottom: 1px solid #e0e0e0; /* 底部浅灰色边框 */
  padding: 12px 0; /* 上下内边距12px */
}

.header-container {
  max-width: 100%; /* 最大宽度1200px */
  /* margin: 0 auto; 水平居中 */
  padding: 0 40px; /* 左右内边距20px */
  display: flex; /* 弹性布局 */
  justify-content: space-between; /* 两端对齐 */
  align-items: center; /* 垂直居中 */
}

.logo img {
  height: 40px; /* logo高度40px */
}

.cart-icon {
  position: relative; /* 相对定位 */
  cursor: pointer; /* 鼠标指针样式 */
}

.cart-badge {
  position: absolute; /* 绝对定位 */
  top: -8px; /* 向上偏移8px */
  right: -8px; /* 向右偏移8px */
  background-color: #003da5; /* 蓝色背景 */
  color: white; /* 白色文字 */
  border-radius: 50%; /* 圆形 */
  width: 20px; /* 宽度20px */
  height: 20px; /* 高度20px */
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  font-size: 12px; /* 字体大小12px */
  font-weight: bold; /* 粗体 */
}

/* Promo Banner 促销横幅 */
.promo-banner {
  background-color: #003da5; /* 蓝色背景 */
  color: white; /* 白色文字 */
  text-align: center; /* 文字居中 */
  padding: 12px 20px; /* 内边距 */
  font-size: 14px; /* 字体大小14px */
}

.promo-banner strong {
  font-weight: 700; /* 加粗 */
}

/* Main Content 主要内容区域 */
.checkout-content {
  max-width: 800px; /* 最大宽度800px */
  margin: 0 auto; /* 水平居中 */
  padding: 40px 20px; /* 内边距 */
}

.checkout-form {
  background-color: white; /* 白色背景 */
  padding: 40px; /* 内边距40px */
  border-radius: 8px; /* 圆角8px */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  margin-bottom: 40px; /* 底部外边距40px */
}

/* Section Titles 标题区域 */
.section-title {
  font-size: 28px; /* 字体大小28px */
  font-weight: 600; /* 半粗体 */
  margin-bottom: 24px; /* 底部外边距24px */
  color: #1a1a1a; /* 深灰色文字 */
}

.section-subtitle {
  font-size: 20px; /* 字体大小20px */
  font-weight: 600; /* 半粗体 */
  margin-bottom: 20px; /* 底部外边距20px */
  color: #1a1a1a; /* 深灰色文字 */
}

/* PayPal Section PayPal支付区域 */
.paypal-section {
  margin-bottom: 32px; /* 底部外边距32px */
}

.paypal-button {
  width: 100%; /* 宽度100% */
  background-color: #0070ba; /* PayPal蓝色背景 */
  color: white; /* 白色文字 */
  border: none; /* 无边框 */
  border-radius: 6px; /* 圆角6px */
  padding: 14px 20px; /* 内边距 */
  font-size: 16px; /* 字体大小16px */
  font-weight: 600; /* 半粗体 */
  cursor: pointer; /* 鼠标指针样式 */
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  gap: 8px; /* 元素间隔8px */
  transition: background-color 0.2s; /* 背景色过渡效果 */
}

.paypal-button:hover {
  background-color: #005fa3; /* 悬停时深蓝色背景 */
}

/* Form Section 表单区域 */
.form-section {
  margin-bottom: 32px; /* 底部外边距32px */
}

.section-header {
  display: flex; /* 弹性布局 */
  justify-content: space-between; /* 两端对齐 */
  align-items: center; /* 垂直居中 */
  margin-bottom: 20px; /* 底部外边距20px */
}

.login-link {
  color: #003da5; /* 蓝色文字 */
  text-decoration: none; /* 无下划线 */
  font-size: 14px; /* 字体大小14px */
  font-weight: 500; /* 中等粗体 */
}

.login-link:hover {
  text-decoration: underline; /* 悬停时显示下划线 */
}

/* Form Elements 表单元素 */
.form-group {
  margin-bottom: 20px; /* 底部外边距20px */
  position: relative; /* 相对定位 */
}

.form-label {
  display: block; /* 块级元素 */
  margin-bottom: 8px; /* 底部外边距8px */
  font-size: 14px; /* 字体大小14px */
  color: #666; /* 灰色文字 */
  font-style: italic; /* 斜体 */
}

.form-input,
.form-select {
  width: 100%; /* 宽度100% */
  padding: 12px 16px; /* 内边距 */
  border: 1px solid #d0d0d0; /* 浅灰色边框 */
  border-radius: 4px; /* 圆角4px */
  font-size: 15px; /* 字体大小15px */
  color: #1a1a1a; /* 深灰色文字 */
  background-color: white; /* 白色背景 */
  transition: border-color 0.2s; /* 边框颜色过渡效果 */
}

.form-input:focus,
.form-select:focus {
  outline: none; /* 无轮廓线 */
  border-color: #003da5; /* 聚焦时蓝色边框 */
}

.form-input.error {
  border-color: #dc3545; /* 错误时红色边框 */
}

.form-input::placeholder {
  color: #999; /* 占位符灰色文字 */
}

.search-input-wrapper {
  position: relative; /* 相对定位 */
}

.search-icon {
  position: absolute; /* 绝对定位 */
  left: 16px; /* 左侧偏移16px */
  top: 50%; /* 顶部偏移50% */
  transform: translateY(-50%); /* 垂直居中 */
  color: #666; /* 灰色图标 */
  pointer-events: none; /* 禁用鼠标事件 */
}

.search-input {
  padding-left: 44px; /* 左侧内边距44px */
}

.error-message {
  display: block; /* 块级元素 */
  color: #dc3545; /* 红色文字 */
  font-size: 13px; /* 字体大小13px */
  margin-top: 6px; /* 顶部外边距6px */
}

/* Form Row 表单行布局 */
.form-row {
  display: grid; /* 网格布局 */
  grid-template-columns: 1fr 1fr; /* 两列等宽 */
  gap: 16px; /* 间隔16px */
  margin-bottom: 20px; /* 底部外边距20px */
}

.form-row.three-columns {
  grid-template-columns: 1fr 1fr 1fr; /* 三列等宽 */
}

.form-row .form-group {
  margin-bottom: 0; /* 无底部外边距 */
}

/* Consent Section 同意条款区域 */
.consent-section {
  margin-top: 32px; /* 顶部外边距32px */
  padding-top: 24px; /* 顶部内边距24px */
  border-top: 1px solid #e0e0e0; /* 顶部浅灰色边框 */
}

.consent-intro {
  font-size: 14px; /* 字体大小14px */
  color: #333; /* 深灰色文字 */
  margin-bottom: 16px; /* 底部外边距16px */
  line-height: 1.6; /* 行高1.6倍 */
}

.checkbox-group {
  margin-bottom: 12px; /* 底部外边距12px */
}

.checkbox-label {
  display: flex; /* 弹性布局 */
  align-items: flex-start; /* 顶部对齐 */
  cursor: pointer; /* 鼠标指针样式 */
  font-size: 14px; /* 字体大小14px */
  color: #333; /* 深灰色文字 */
  line-height: 1.6; /* 行高1.6倍 */
}

.checkbox-input {
  margin-right: 12px; /* 右侧外边距12px */
  margin-top: 4px; /* 顶部外边距4px */
  width: 18px; /* 宽度18px */
  height: 18px; /* 高度18px */
  cursor: pointer; /* 鼠标指针样式 */
  flex-shrink: 0; /* 不收缩 */
}

.checkbox-text {
  flex: 1; /* 占满剩余空间 */
}

.privacy-links {
  margin-top: 20px; /* 顶部外边距20px */
  display: flex; /* 弹性布局 */
  flex-direction: column; /* 垂直排列 */
  gap: 8px; /* 间隔8px */
}

.privacy-link {
  color: #003da5; /* 蓝色文字 */
  text-decoration: underline; /* 下划线 */
  font-size: 14px; /* 字体大小14px */
}

.privacy-link:hover {
  color: #002a75; /* 悬停时深蓝色文字 */
}

/* Continue Button 继续按钮 */
.continue-button {
  width: 100%; /* 宽度100% */
  background-color: #2d2d2d; /* 深灰色背景 */
  color: white; /* 白色文字 */
  border: none; /* 无边框 */
  border-radius: 4px; /* 圆角4px */
  padding: 16px 24px; /* 内边距 */
  font-size: 16px; /* 字体大小16px */
  font-weight: 600; /* 半粗体 */
  cursor: pointer; /* 鼠标指针样式 */
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  gap: 10px; /* 元素间隔10px */
  margin-top: 32px; /* 顶部外边距32px */
  transition: background-color 0.2s; /* 背景色过渡效果 */
}

.continue-button:hover {
  background-color: #1a1a1a; /* 悬停时更深的灰色背景 */
}

/* Review Banner 订单审核横幅 */
.review-banner {
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%); /* 蓝色渐变背景 */
  color: white; /* 白色文字 */
  text-align: center; /* 文字居中 */
  padding: 40px 20px; /* 内边距 */
  border-radius: 8px; /* 圆角8px */
  margin-bottom: 30px; /* 底部外边距30px */
}

.review-title {
  font-size: 36px; /* 字体大小36px */
  font-weight: 700; /* 粗体 */
  margin-bottom: 8px; /* 底部外边距8px */
  letter-spacing: 2px; /* 字间距2px */
}

.review-subtitle {
  font-size: 16px; /* 字体大小16px */
  font-weight: 400; /* 正常粗细 */
  letter-spacing: 1px; /* 字间距1px */
}

/* Footer Icons 底部图标区域 */
.footer-icons {
  display: flex; /* 弹性布局 */
  justify-content: space-between; /* 两端对齐 */
  align-items: center; /* 垂直居中 */
  padding: 20px 0; /* 上下内边距20px */
}

.social-icons {
  display: flex; /* 弹性布局 */
  gap: 12px; /* 间隔12px */
}

.icon-button {
  width: 44px; /* 宽度44px */
  height: 44px; /* 高度44px */
  border-radius: 50%; /* 圆形 */
  border: none; /* 无边框 */
  background-color: #e8e8ff; /* 浅紫色背景 */
  color: #5555ff; /* 紫色文字 */
  cursor: pointer; /* 鼠标指针样式 */
  display: flex; /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  transition: all 0.2s; /* 所有属性过渡效果 */
}

.icon-button.chinese {
  background-color: #e8e8ff; /* 浅紫色背景 */
  color: #5555ff; /* 紫色文字 */
  font-size: 16px; /* 字体大小16px */
  font-weight: 600; /* 半粗体 */
}

.icon-button:hover {
  transform: scale(1.1); /* 悬停时放大1.1倍 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 悬停时阴影效果 */
}

.mascot img {
  width: 80px; /* 宽度80px */
  height: 80px; /* 高度80px */
  border-radius: 50%; /* 圆形 */
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  /* Header */
  .checkout-header {
    padding: 10px 0;
  }

  .header-container {
    padding: 0 20px;
  }

  .logo img {
    height: 35px;
  }

  /* Promo Banner */
  .promo-banner {
    padding: 10px 15px;
    font-size: 13px;
  }

  /* Main Content */
  .checkout-content {
    padding: 25px 15px;
  }

  .checkout-form {
    padding: 25px 20px;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .section-subtitle {
    font-size: 18px;
    margin-bottom: 16px;
  }

  /* PayPal Button */
  .paypal-button {
    padding: 12px 18px;
    font-size: 15px;
  }

  /* Form */
  .form-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .form-row.three-columns {
    grid-template-columns: 1fr;
  }

  .form-input,
  .form-select {
    padding: 10px 14px;
    font-size: 14px;
  }

  .consent-intro {
    font-size: 13px;
  }

  .checkbox-label {
    font-size: 13px;
  }

  .privacy-link {
    font-size: 13px;
  }

  .continue-button {
    padding: 14px 20px;
    font-size: 15px;
    margin-top: 24px;
  }

  /* Review Banner */
  .review-banner {
    padding: 30px 15px;
  }

  .review-title {
    font-size: 28px;
    letter-spacing: 1px;
  }

  .review-subtitle {
    font-size: 14px;
  }

  /* Footer Icons */
  .footer-icons {
    flex-direction: column;
    gap: 20px;
  }

  .social-icons {
    gap: 10px;
  }

  .icon-button {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .checkout-content {
    padding: 20px 10px;
  }

  .checkout-form {
    padding: 20px 15px;
    border-radius: 0;
  }

  .section-title {
    font-size: 22px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .paypal-button {
    padding: 10px 15px;
    font-size: 14px;
  }

  .form-input,
  .form-select {
    padding: 9px 12px;
    font-size: 13px;
  }

  .continue-button {
    padding: 12px 18px;
    font-size: 14px;
  }

  .review-title {
    font-size: 24px;
  }

  .review-subtitle {
    font-size: 13px;
  }

  .icon-button {
    width: 38px;
    height: 38px;
  }

  .mascot img {
    width: 60px;
    height: 60px;
  }
}
</style>
