<template>
  <!-- 页脚容器 -->
  <footer class="footer-container">
    <!-- 顶部导航链接区域 -->
    <div class="top-links">
      <!-- 左侧导航链接 -->
      <div class="nav-links">
        <div class="link-item">常见问题和联系方式</div>
        <div class="link-item">送货和运输</div>
        <div class="link-item">跟踪我的订单</div>
        <div class="link-item">礼品卡余额查询</div>
      </div>
      <!-- 右侧社交图标 -->
      <div class="social-icons">
        <span class="icon">□</span>
        <span class="icon">□</span>
        <span class="icon">□</span>
        <span class="icon">□</span>
      </div>
    </div>

    <!-- 底部区域 -->
    <div class="bottom-section">
      <!-- 底部链接 -->
      <div class="bottom-links">
        <span class="bottom-link">条款和条件</span>
        <span class="bottom-link">隐私</span>
        <span class="bottom-link">关于我们</span>
        <span class="bottom-link">Cookie政策</span>
        <span class="bottom-link">退货政策</span>
      </div>

      <!-- 支付方式图标 -->
      <div class="payment-methods">
        <img
          src="https://shop.mancity.com/on/demandware.static/-/Sites-MAN-Library/default/dwad1998f0/images/footer/payment-methods.svg"
          alt=""
        />
      </div>

      <!-- 版权信息 -->
      <div class="copyright">© 2024 Siebel Sportmerchandising Bv</div>
    </div>
  </footer>
</template>

<script setup>
// 这里不写逻辑，按照要求只写结构和样式
</script>

<style lang="less" scoped>
// 页脚容器样式
.footer-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;

  // 顶部链接区域样式
  .top-links {
    height: 120px;
    display: flex;
    justify-content: space-between; // 左右两侧布局
    align-items: center;
    background-color: #90c4f4; // 浅蓝色背景
    color: #333;
    padding-left: 102px;
    padding-right: 102px;

    // 左侧导航链接容器
    .nav-links {
      display: flex;
      gap: 30px; // 链接之间的间距
    }

    // 链接项样式
    .link-item {
      font-size: 23px;
      font-weight: 700; // 稍微加粗一点
      // white-space: nowrap; // 防止文本换行
      color: rgb(0, 24, 56);
    }

    // 社交图标样式
    .social-icons {
      display: flex;
      gap: 10px;

      .icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #333;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  // 底部区域样式
  .bottom-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f8ff; // 更浅的蓝色背景
    padding: 15px 40px;

    // 底部链接样式
    .bottom-links {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;

      .bottom-link {
        font-size: 14px;
        color: #555;
        cursor: pointer;
      }
    }

    // 支付方式图标样式
    .payment-methods {
      display: flex;
      gap: 10px;
      margin-bottom: 10px;

      .payment-icon {
        width: 40px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }

    // 版权信息样式
    .copyright {
      font-size: 12px;
      color: #777;
      margin-top: 5px;
    }
  }
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .footer-container {
    .top-links {
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
      padding: 20px;
      padding-left: 20px;
      padding-right: 20px;

      .nav-links {
        flex-direction: column;
        gap: 12px;
        width: 100%;
      }

      .link-item {
        font-size: 16px;
      }

      .social-icons {
        align-self: center;
        margin-top: 10px;
        gap: 8px;
      }

      .icon {
        width: 20px;
        height: 20px;
      }
    }

    .bottom-section {
      padding: 15px 20px;

      .bottom-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
      }

      .bottom-link {
        font-size: 13px;
      }

      .payment-methods {
        margin-bottom: 8px;
      }

      .copyright {
        font-size: 11px;
      }
    }
  }
}

@media (max-width: 480px) {
  .footer-container {
    .top-links {
      padding: 15px;

      .nav-links {
        gap: 10px;
      }

      .link-item {
        font-size: 14px;
      }
    }

    .bottom-section {
      padding: 12px 15px;

      .bottom-links {
        gap: 10px;
      }

      .bottom-link {
        font-size: 12px;
      }

      .copyright {
        font-size: 10px;
      }
    }
  }
}
</style>
