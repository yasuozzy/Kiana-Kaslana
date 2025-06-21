<template>
  <div>
     <!--  顶部导航，所有页面都有-->
    <TopBar/>
    <!-- 中间搜索和logo区域 -->
    <HeaderMin/>
    <!-- 中间导航区域 -->
    <MainNav/>
    <!-- 英雄区域 -->
    <HeroSection/>
    <!-- 产品列表 -->
    <ProductList/>
    <!-- 球员区域 -->
    <PlayerTabs/>
     <!-- 产品画廊 -->
     <ProductGallery/>
     <!-- 产品系列 -->
     <ProductCoollection/>
     <!-- 主场套件展示 -->
    <HomeKit/>
    <!-- 礼物卡区域 -->
    <GiftCardPromo/>
    <!-- 官方商店描述 -->
    <OfficialStoreDescription/>
     <!-- 底部区域 -->
     <SiteFooter/>
  </div>
</template>

<script setup>
// 这里需要引入上面用到的所有组件
   import HeaderMin from '../components/layout/HeaderMin.vue'; // 路径可能需要调整
import MainNav from '../components/layout/MainNav.vue';
import HeroSection from '../components/business/HeroSection.vue';
import ProductList from '../components/Common/ProductList.vue';
import PlayerTabs from '../components/home/PlayerTabs.vue';
import ProductGallery from '../components/Common/ProductGallery.vue';
import ProductCoollection from '../components/Common/ProductCoollection.vue';
import HomeKit from '../components/business/HomeKit.vue';
import GiftCardPromo from '../components/business/GiftCardPromo.vue';
import OfficialStoreDescription from '../components/business/OfficialStoreDescription.vue';
import TopBar from '../components/layout/TopBar.vue'; // 路径可能需要调整
import SiteFooter from '../components/Footer/SiteFooter.vue'; // 路径可能需要调整
</script>


<style scoped lang="less">
body{
  margin: 0;
  padding: 0;

}
</style>