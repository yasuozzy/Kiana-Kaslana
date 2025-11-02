<template>
  <!-- footer标签语义化地表示这是网站的页脚部分，有利于SEO和可访问性 -->
  <footer class="site-footer">
    <!-- 页脚顶部部分，包含Logo和社交媒体链接 -->
    <div class="footer-top">
      <!-- 左侧Logo容器 -->
      <div class="footer-logo">
        <!-- 图片标签，src指定图片路径，alt提供图片描述（对SEO和无障碍访问很重要） -->
        <img
          src="../../assets/logo/mancity-logo.svg"
          alt="曼城足球俱乐部"
          class="footer-logo-img"
        />
      </div>

      <!-- 右侧社交媒体和语言选择区域 -->
      <div class="footer-social">
        <!-- 语言选择器组件，包含地球图标和文字 -->
        <div class="language-selector">
          <!-- 地球图标，使用字符表情作为临时图标（实际项目中应使用字体图标或SVG） -->
          <span class="icon-globe">🌐</span>
          <!-- 语言切换链接，href="#"是临时占位符，应替换为实际链接 -->
          <a href="#" class="language-link">中文</a>
        </div>

        <div class="line"></div>
        <!-- 社交媒体图标容器，放置所有社交媒体链接 -->
        <div class="social-icons">
          <!-- YouTube图标链接，span中的文本用于屏幕阅读器，视觉上被隐藏 -->
          <a href="#" class="social-icon youtube"><span>YouTube</span></a>
          <!-- Instagram图标链接 -->
          <a href="#" class="social-icon instagram"><span>Instagram</span></a>
          <!-- Twitter/X图标链接 -->
          <a href="#" class="social-icon twitter"><span>Twitter</span></a>
          <!-- Facebook图标链接 -->
          <a href="#" class="social-icon facebook"><span>Facebook</span></a>
          <!-- LinkedIn图标链接 -->
          <a href="#" class="social-icon linkedin"><span>LinkedIn</span></a>
          <!-- TikTok图标链接 -->
          <a href="#" class="social-icon tiktok"><span>TikTok</span></a>
        </div>
      </div>
      <button class="to-top">
        <span>返回页首</span>
      </button>
    </div>

    <!-- 中间部分，包含政策链接和网站地图 -->
    <div class="footer-nav">
      <!-- nav标签表示这是一个导航区域，包含多个政策链接 -->
      <nav class="policy-links">
        <!-- 每个政策链接，href应替换为实际URL -->
        <a href="#" class="policy-link">可及性</a>
        <a href="#" class="policy-link">公平处理通知</a>
        <a href="#" class="policy-link">COOKIE政策</a>
        <a href="#" class="policy-link">现代奴隶制声明</a>
        <a href="#" class="policy-link">隐私策略</a>
        <a href="#" class="policy-link">使用条款</a>
        <a href="#" class="policy-link">联系我们</a>
      </nav>

      <!-- 网站地图链接容器，单独放置以突出显示 -->
      <div class="sitemap-container">
        <!-- 网站地图链接 -->
        <a href="#" class="sitemap-link">网站地图</a>
      </div>
    </div>

    <!-- 页脚底部部分，包含支持信息、俱乐部徽章和版权信息 -->
    <div class="footer-bottom">
      <!-- 左侧"风扇支持"文本 -->
      <div class="support-info">
        <span class="support-text">风扇支持</span>
      </div>

      <!-- 中间的俱乐部徽章/图标区域 -->
      <div class="club-badges">
        <!-- 五个俱乐部相关的徽章/图标，每个都有描述性alt文本 -->
        <img src="../../assets/icons/badge1.svg" alt="徽章1" class="club-badge" />
        <img src="../../assets/icons/badge2.svg" alt="徽章2" class="club-badge" />
        <img src="../../assets/icons/badge3.svg" alt="徽章3" class="club-badge" />
        <img src="../../assets/icons/badge4.svg" alt="徽章4" class="club-badge" />
        <img src="../../assets/icons/badge5.svg" alt="徽章5" class="club-badge" />
      </div>

      <!-- 右侧版权信息 -->
      <div class="copyright-info">
        <span class="copyright-text">曼城足球俱乐部 2025</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 这里使用Vue 3的<script setup>语法，更简洁地定义组件逻辑
// 这个页脚组件主要是静态展示，暂时不需要太多JavaScript逻辑
// 如果需要交互功能，可以在这里添加，例如：
// - 语言切换功能
// - 移动端菜单展开/收起
// - 动态加载徽章或社交图标
</script>

<style scoped lang="less">
/* scoped表示这些样式只应用于当前组件，防止样式污染其他组件 */
/* lang="less"表示使用Less预处理器，支持嵌套语法等高级功能 */

/* 整体页脚样式设置 */
.site-footer {
  width: 100%; /* 宽度占满容器 */
  height: 100%;
  background-color: #001838; /* 深蓝色背景，采用曼城官网的配色 */
  color: #ffffff; /* 文字颜色为白色，在深色背景上形成鲜明对比 */
  padding: 40px 0; /* 上下内边距40px，左右不设置 */
  font-family: Arial, sans-serif; /* 设置字体族，无衬线字体更现代 */
  margin-top: 30px;
}

/* 顶部区域样式设置 */
.footer-top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: relative;
  margin-bottom: 30px;
}

/* Logo样式设置 */
.footer-logo {
  position: absolute; /* 绝对定位 */
  left: 40px; /* 距离左侧40px */
  .footer-logo-img {
    width: 100px; /* 设置Logo宽度为100px */
    height: auto; /* 高度自动计算，保持图片比例 */
  }
}

/* 社交媒体区域样式 */
.footer-social {
  display: flex; /* 使用弹性布局 */
  align-items: center; /* 垂直居中对齐 */
  justify-content: center;
  gap: 20px; /* 在语言选择和社交图标之间添加20px间距，比margin更便捷 */
}

/* 语言选择器样式 */
.language-selector {
  // width: 5px;
  height: 27px;
  display: flex; /* 使内部元素水平排列 */
  align-items: center; /* 垂直居中对齐 */
  background-color: rgba(255, 255, 255, 0.1); /* 半透明白色背景 */
  padding: 12px 12px; /* 内边距：上下8px，左右15px */
  border-radius: 25px; /* 圆角边框，形成胶囊形状 */
  margin-right: 10px; /* 右侧外边距20px */

  .icon-globe {
    margin-right: 8px; /* 图标右侧与文字的间距 */
    font-size: 22px;
  }

  .language-link {
    color: white; /* 文字颜色 */
    text-decoration: none; /* 移除下划线 */
    font-size: 14px;
    font-weight: 700;
  }
}
.line {
  height: 50px;
  border-right: 1px solid #ffffff;
}
.to-top {
  position: absolute; /* 绝对定位 */
  right: 40px; /* 距离右侧40px */
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 15px; /* 添加一些内边距让按钮更好看 */
  border-radius: 25px; /* 圆角边框，与语言选择器样式一致 */
  color: white;
  text-decoration: none;
  border: none; /* 移除边框 */
  cursor: pointer; /* 鼠标悬停时显示手型光标 */
  font-weight: 700; /* 加粗文字 */
  border-bottom: 1px solid #000;
}

/* 社交图标样式 */
.social-icons {
  display: flex; /* 图标水平排列 */
  gap: 10px; /* 图标之间的间距为10px */

  .social-icon {
    display: flex; /* 使图标内容居中 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    width: 40px; /* 图标容器宽度 */
    height: 40px; /* 图标容器高度 */
    border-radius: 50%; /* 50%圆角使方形变为圆形 */
    background-color: rgba(255, 255, 255, 0.1); /* 半透明白色背景 */
    color: #6cabdd; /* 图标颜色为曼城浅蓝色 */
    text-decoration: none; /* 移除链接下划线 */
    transition: background-color 0.3s; /* 添加过渡效果，使颜色变化更平滑 */

    &:hover {
      background-color: rgba(255, 255, 255, 0.2); /* 鼠标悬停时背景变亮 */
    }

    /* 隐藏文本，但对屏幕阅读器可访问，增强可访问性 */
    span {
      position: absolute; /* 绝对定位使文本不占用空间 */
      width: 1px; /* 极小的宽度 */
      height: 1px; /* 极小的高度 */
      padding: 0; /* 无内边距 */
      margin: -1px; /* 负边距使其完全隐藏 */
      overflow: hidden; /* 溢出隐藏 */
      clip: rect(0, 0, 0, 0); /* 裁剪掉所有可见部分 */
      white-space: nowrap; /* 禁止换行 */
      border: 0; /* 无边框 */
    }
  }

  /* 注意：这里应添加每个社交图标的具体背景图片 */
  /* 例如：.youtube { background-image: url(../../assets/icons/youtube.svg); } */
}

/* 中间导航区域样式 */
.footer-nav {
  padding: 20px 40px; /* 内边距：上下20px，左右40px */
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* 顶部添加半透明白色边框 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* 底部添加半透明白色边框 */
  margin-bottom: 30px; /* 底部外边距30px */
}

/* 政策链接样式 */
.policy-links {
  display: flex; /* 链接水平排列 */
  flex-wrap: wrap; /* 允许在空间不足时换行 */
  justify-content: center; /* 链接居中排列 */
  margin-bottom: 20px; /* 底部外边距20px */
  font-size: 24px;
  font-weight: 700;

  color: rgb(250, 250, 250);

  .policy-link {
    color: white; /* 链接文字颜色 */
    text-decoration: none; /* 移除下划线 */
    padding: 0 15px; /* 左右内边距各15px，增加点击区域 */
    position: relative; /* 相对定位，为伪元素定位做准备 */

    /* 除了最后一个链接外，每个链接右侧添加分隔线 */
    &:not(:last-child)::after {
      content: ''; /* 伪元素必须有content属性，即使为空 */
      position: absolute; /* 绝对定位，相对于.policy-link */
      right: 0; /* 定位在链接右侧 */
      top: 50%; /* 从顶部50%位置开始 */
      transform: translateY(-50%); /* 向上偏移自身高度的一半，实现垂直居中 */
      height: 15px; /* 分隔线高度 */
      width: 1px; /* 分隔线宽度1px */
      background-color: rgba(255, 255, 255, 0.3); /* 半透明白色分隔线 */
    }

    &:hover {
      text-decoration: underline; /* 鼠标悬停时显示下划线 */
    }
  }
}

/* 网站地图容器样式 */
.sitemap-container {
  text-align: center; /* 文本居中对齐 */
  font-size: 24px;
  color: rgb(250, 250, 250);
  font-weight: 700;

  .sitemap-link {
    color: white; /* 链接文字颜色 */
    text-decoration: none; /* 移除下划线 */

    &:hover {
      text-decoration: underline; /* 鼠标悬停时显示下划线 */
    }
  }
}

/* 底部区域样式 */
.footer-bottom {
  display: flex; /* 使用弹性布局 */
  justify-content: space-between; /* 子元素之间平均分布 */
  align-items: center; /* 垂直居中对齐 */
  padding: 0 40px; /* 左右内边距各40px */
}

/* 支持信息样式 */
.support-text {
  font-size: 16px; /* 字体大小14像素 */
  font-weight: 400;
  line-height: 24px;
}

/* 俱乐部徽章样式 */
.club-badges {
  display: flex; /* 徽章水平排列 */
  gap: 20px; /* 徽章之间间距20px */

  .club-badge {
    height: 30px; /* 徽章高度30px */
    width: auto; /* 宽度自动计算，保持图片比例 */
  }
}

/* 版权信息样式 */
.copyright-info {
  font-size: 16px; /* 字体大小14像素 */
  font-weight: 400;
  line-height: 24px;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .site-footer {
    padding: 30px 0;
    margin-top: 20px;
  }

  .footer-top {
    flex-direction: column;
    gap: 20px;
    padding: 15px 0;
  }

  .footer-logo {
    position: static;
    margin-bottom: 15px;
  }

  .footer-logo-img {
    width: 80px !important;
  }

  .footer-social {
    flex-direction: column;
    gap: 15px;
  }

  .language-selector {
    height: auto;
    padding: 10px 15px;
  }

  .icon-globe {
    font-size: 18px;
  }

  .language-link {
    font-size: 13px;
  }

  .line {
    height: 1px;
    width: 80%;
    border-right: none;
    border-bottom: 1px solid #ffffff;
  }

  .social-icons {
    gap: 8px;
  }

  .social-icon {
    width: 36px;
    height: 36px;
  }

  .to-top {
    position: static;
    margin-top: 15px;
    font-size: 14px;
  }

  .footer-nav {
    padding: 15px 20px;
  }

  .policy-links {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-size: 18px;

    .policy-link {
      padding: 8px 0;
    }

    .policy-link::after {
      display: none;
    }
  }

  .sitemap-container {
    font-size: 18px;
    margin-top: 15px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
  }

  .support-text,
  .copyright-text {
    font-size: 14px;
  }

  .club-badges {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .club-badge {
    height: 24px;
  }
}

@media (max-width: 480px) {
  .site-footer {
    padding: 20px 0;
  }

  .footer-logo-img {
    width: 70px !important;
  }

  .language-selector {
    padding: 8px 12px;
  }

  .icon-globe {
    font-size: 16px;
  }

  .language-link {
    font-size: 12px;
  }

  .social-icon {
    width: 32px;
    height: 32px;
  }

  .to-top {
    font-size: 13px;
  }

  .policy-links {
    font-size: 16px;
    gap: 10px;
  }

  .sitemap-container {
    font-size: 16px;
  }

  .support-text,
  .copyright-text {
    font-size: 13px;
  }

  .club-badges {
    gap: 10px;
  }

  .club-badge {
    height: 20px;
  }
}
</style>
