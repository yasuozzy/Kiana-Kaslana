<template>
  <div class="gift-card-promo">
    <a href="#">
      <div class="gift-card-promo-container">
        <div class="gift-card-promo-image">
          <img
            src="https://store.chelseafc.com/content/ws/all/981da08b-48b0-4c8e-8c68-abab5372876f__1600X450.png"
            alt="礼物卡"
          />
        </div>
      </div>
      <picture class="gift-card-promo-image2">
        <img
          src="https://store.chelseafc.com/content/ws/all/62ad79bc-573a-41cb-ae4a-fe902f2e124c__1600X164.png?w=1600"
          alt=""
        />
      </picture>
      <div class="title-with-subtitle">
        <div class="image-card-title">切尔西电子礼物卡</div>
        <div class="image-card-subtitle">现在可购买</div>
        <div class="button-container">马上购买</div>
      </div>
    </a>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.gift-card-promo {
  position: relative;
  width: 100%;
  // background-color: #7200d5d0;
}
img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}
a {
  text-decoration: none;
  color: #000;
}
.title-with-subtitle {
  position: absolute;
  bottom: 50%;
  left: 50px;
  font-size: 44px;
  font-weight: 800;
  line-height: 48px;
  color: rgb(0, 0, 0);
  font-family: 'Chelsea FC';
  box-sizing: border-box;
}
.button-container {
  width: 100px;
  // height: 40px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  padding-right: 16px;
  padding-left: 16px;
  font-weight: 600;
  line-height: 40px;
  margin-top: 25px;
}
.image-card-subtitle {
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  line-height: 30px;
  font-weight: 500;
  margin-top: 10px;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .title-with-subtitle {
    left: 20px;
    bottom: 40%;
    font-size: 28px;
    line-height: 32px;
  }

  .button-container {
    width: 90px;
    font-size: 14px;
    padding: 10px 12px;
    line-height: 32px;
    margin-top: 15px;
  }

  .image-card-subtitle {
    font-size: 16px;
    line-height: 24px;
    margin-top: 8px;
  }
}

@media (max-width: 480px) {
  .title-with-subtitle {
    left: 15px;
    bottom: 35%;
    font-size: 22px;
    line-height: 26px;
  }

  .button-container {
    width: 80px;
    font-size: 13px;
    padding: 8px 10px;
    line-height: 28px;
    margin-top: 12px;
  }

  .image-card-subtitle {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
