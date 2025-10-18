<template>
  <div>
    <!-- 顶部导航 -->
    <TopBar />
    <HeaderMin />
    <MainNav />

    <!-- 礼品卡内容区域 -->
    <main class="gift-card-main">
      <div class="gift-card-container">
        <a href="" class="gift-card-banner-link">
          <img
            src="https://store.chelseafc.com/content/ws/all/50bf178c-f48d-481a-93f1-bedda3ac86d9__1600X290.png?w=1600"
            alt="礼品卡"
            class="gift-card-banner"
        /></a>
        <div class="gift-card-content">
          <h1>切尔西官方商店礼品卡</h1>
          <p>为您的亲朋好友送上一份完美的礼物</p>
          <p class="gift-card-button">立即购买</p>
        </div>

        <div class="gift-footer">
          <router-link to="/gift-card-faq" class="gift-footer-link">
            <img
              src="https://store.chelseafc.com/content/ws/all/2db1e8d3-3eff-4903-b1d9-f640e85e64cc__1600X270.png"
              alt="礼品卡优惠"
            />
          </router-link>
        </div>
      </div>
    </main>

    <!-- 底部 -->
    <SiteFooter />
  </div>
</template>

<script setup>
import TopBar from './TopBar.vue'
import HeaderMin from './HeaderMin.vue'
import MainNav from './MainNav.vue'
import SiteFooter from '../Footer/SiteFooter.vue'
</script>

<style scoped lang="less">
.gift-card-main {
  width: 100%;
  min-height: 500px;
  background-color: #f5f5f5;
  // padding: 30px 30px;
}

.gift-card-container {
  // max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.gift-card-banner {
  width: 100%;
  height: auto;
  display: block;
}

.gift-card-content {
  padding: 40px;
  text-align: center;
}

.gift-card-content h1 {
  font-size: 32px;
  font-weight: 600;
  color: #001489;
  margin-bottom: 16px;
}

.gift-card-content p {
  font-size: 16px;
  color: #666;
  // color: #001489;
  line-height: 1.6;
}
.gift-card-button {
  font-size: 37px !important;
  color: #001489 !important;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
  transition: opacity 0.3s;
}

.gift-card-button:hover {
  opacity: 0.8;
}

.gift-card-banner-link {
  display: block;
  width: 100%;
}

.gift-footer {
  width: 100%;
  margin-top: 40px;
}

.gift-footer-link {
  display: block;
  width: 100%;
}

.gift-footer img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
