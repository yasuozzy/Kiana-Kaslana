<template>
  <div>
    <!-- 顶部导航 -->
    <TopBar />
    <HeaderMin />
    <MainNav />

    <!-- 常见问题内容区域 -->
    <main class="frequently-asked-main">
      <div class="faq-container">
        <h1 class="faq-title">礼品卡常见问题解答</h1>

        <div class="faq-content">
          <div class="faq-item">
            <h2>如何购买电子礼品卡？</h2>
            <p>
              电子礼品卡可于网上购买和兑换，并通过电子邮件发送。电子礼品卡只能以英镑 (GBP)
              购买和兑换。
            </p>
          </div>

          <div class="faq-item">
            <h2>我可为电子礼品卡可以充值任何金额吗？</h2>
            <p>
              电子礼品卡可按以下面额购买：£10, £20, £25, £50, £75, £100, £150, £200, £250, £500。
            </p>
          </div>

          <div class="faq-item">
            <h2>我的电子礼品卡会过期或失效吗？</h2>
            <p>是。以英镑发行的礼品卡将在购买后 12 个月到期。</p>
          </div>

          <div class="faq-item">
            <h2>每張订单可以兑换多少张电子礼品卡？</h2>
            <p>每张订单最多只能兑换 10 张电子礼品卡。</p>
          </div>

          <div class="faq-item">
            <h2>如果我在接收或兑换电子礼品卡时遇到问题，该怎么办？</h2>
            <p>请联系我们，客户服务员 (Fan Athlete )将非常乐意为此进行调查。</p>
          </div>

          <div class="faq-item">
            <h2>我可以补办丢失或被盗的电子礼品卡吗？</h2>
            <p>我们并不对丢失或被盗的电子礼品卡负责，我们很遗憾不能补办相关电子礼品卡。</p>
          </div>

          <div class="faq-item">
            <h2>如何查询我的电子礼品卡余额？</h2>
            <p>
              您可以访问礼品卡登陆页面查询您的电子礼品卡余额。点击底部的「礼品卡」标签，然后在「查询礼品卡余额」一栏输入您的电子礼品卡号和识别码。
            </p>
          </div>

          <div class="faq-item">
            <h2>我可以用电子礼品卡兑换现金吗？</h2>
            <p>除非法律要求，否则我们的电子礼品卡不可转让、不可退款，也不可兑换现金。</p>
          </div>

          <div class="faq-item">
            <h2>我有多张电子礼品卡，可以合并使用吗？</h2>
            <p>我们的电子礼品卡并不能合并使用，但每张订单最多可兑换 10 张电子礼品卡。</p>
          </div>

          <div class="faq-item">
            <h2>如何兑换电子礼品卡？</h2>
            <p>电子礼品卡只能以英镑 (GBP) 购买和兑换。兑换电子礼品卡的步骤非常简单：</p>
            <ul>
              <li>在线购物并选择您想购买的商品。</li>
              <li>准备结账时，点击「购物车」。</li>
              <li>进入结账流程。</li>
              <li>在结账的最后一步，点击付款页面上的「礼品卡/电子礼品卡」字段。</li>
              <li>
                输入您的电子礼品卡号，选择「应用」，然后输入您的个人识别码（密码区分大小写）。请注意：有些电子礼品卡可能不包含识别码，故结账时不需要输入识别码。
              </li>
              <li>点击「应用」后，您将看到您的电子礼品卡金额从商品总额中扣除。</li>
            </ul>
          </div>
        </div>

        <div class="back-to-gift">
          <router-link to="/gift-card" class="back-button">返回礼品卡页面</router-link>
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
.frequently-asked-main {
  width: 100%;
  min-height: 600px;
  background-color: #f5f5f5;
  padding: 60px 20px;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.faq-title {
  font-size: 36px;
  font-weight: 700;
  color: #001489;
  text-align: center;
  margin-bottom: 50px;
}

.faq-content {
  margin-bottom: 40px;
}

.faq-item {
  margin-bottom: 35px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e0e0e0;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item h2 {
  font-size: 20px;
  font-weight: 600;
  color: #001489;
  margin-bottom: 12px;
}

.faq-item p {
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 10px;
}

.faq-item ul {
  margin-top: 15px;
  padding-left: 20px;
  list-style: none;
}

.faq-item ul li {
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;
}

.faq-item ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #001489;
  font-weight: bold;
}

.back-to-gift {
  text-align: center;
  margin-top: 40px;
}

.back-button {
  display: inline-block;
  padding: 14px 40px;
  background-color: #001489;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
}

.back-button:hover {
  background-color: #0019b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 20, 137, 0.3);
}
</style>
