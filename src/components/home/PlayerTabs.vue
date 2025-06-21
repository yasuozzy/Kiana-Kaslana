<template>
   <div class="title">
        <h4 class="title-text">按球员购买</h4>
    </div>

  <div class="player-tabs">
    <div class="content">
     <div class="player-list">
      <!-- 遍历数组，index是下标， player是数组里面的内容 player是变量名用来临时代表循环中的每一篇文章 -->
      <picture v-for="( player , index)  in displayedPlayers" :key="index">
        <a href="#">
          <!-- 图片的alt属性是用来描述图片的，当图片无法显示时，会显示alt属性 :sre是动态控制 -->
          <img :src="player.img" :alt="player.name">
          <figcaption class="player-name">
            <p class="player-number">{{ player.number }} {{ player.name }}</p>
          </figcaption></a>
      </picture>
     </div>
      <button class="left" @click="handleLeft">左</button>
      <button class="right" @click="handleRight">右</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '../../assets/logo/8.png'
import img2 from '../../assets/logo/julian.png'
   // 1. 所有球员数据 - 这里先放5个，后面可以扩展到23个
 const  player = ref([
  {
    name: '马尔穆什',
    number: '#7',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dweede746f/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/07_Marmoush/homepage_sbp_homekit2526_marmoush_mobile.jpg?sw=375&sfrm=jpg'
  },{
    name: '哈兰德',
    number: '#9',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwebf6309e/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/09_Haaland/homepage_sbp_homekit2526_haaland_mobile.jpg?sw=375&sfrm=jpg'
   },{
    name: '罗德里戈',
    number: '#16',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwf5fdbd6d/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/16_Rodrigo/homepage_sbp_homekit2526_rodrigo_mobile.jpg?sw=375&sfrm=jpg'
   },{
    name: '福登',
    number: '#47',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw5f0e8776/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/47_Foden/homepage_sbp_homekit2526_foden_mobile.jpg?sw=375&sfrm=jpg'
   },{
    name: '德布劳内',
    number: '#17',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw63643774/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/17_deBruyne/homepage_sbp_homekit2526_debruyne_mobile.jpg?sw=375&sfrm=jpg'
   },{
     name:'恩佐',
     number:'# 8',
     img:img1
   },{
    name:'阿尔瓦雷斯',
    number:'# 19',
    img:img2
   },{
    name:'格瓦迪奥尔',
    number:'# 24',
    img:'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwfb714710/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/24_Gvardiol/homepage_sbp_homekit2526_gvardiol_mobile.jpg?sw=375&sfrm=jpg'
   },{
    name:'多库',
    number:'# 11',
    img:'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwcae0ce4d/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/11_Doku/homepage_sbp_homekit2526_doku_mobile.jpg?sw=375&sfrm=jpg'
   },
   {
    name:'迪亚斯',
    number:'# 3',
    img:'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw29d49da0/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/03_Dias/homepage_sbp_homekit2425_rubendias_mobile.jpg?sw=375&sfrm=jpg'
     },{
    name:'格拉利什',
    number:'# 10',
    img:'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwcb58f34d/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/10_Grealish/homepage_sbp_homekit2526_grealish_mobile.jpg?sw=375&sfrm=jpg'
   },{
    name:'埃德森',
    number:'# 31',
    img:'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw29d49da0/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/03_Dias/homepage_sbp_homekit2425_rubendias_mobile.jpg?sw=375&sfrm=jpg'
   },{
    name:'埃德森',
    number:'# 31',
    img:'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw1e6190f3/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/31_Ederson/homepage_sbp_homekit2526_ederson_mobile.jpg?sw=375&sfrm=jpg'
   },{
    name:'鲍勃',
    number:'# 52',
    img:'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw664ffb2a/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/52_Bobb/homepage_sbp_homekit2526_bobb_mobile.jpg?sw=375&sfrm=jpg'
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   },{
    name:'',
    number:'',
    img:''
   }

 ])

 // 2. 当前页码，从0开始 第一个数组开始是0，第二个数组开始是5，第三个数组开始是10，以此类推
 const startIndex  = ref(0);
 // 3. 每页显示数量固定为5个球员
 const playersPerPage = 5;
// 4. 计算当前应该显示哪些球员 会截取索引 0~4 的球员（共 5 个),然后赋值
const displayedPlayers =ref(player.value.slice(0 , playersPerPage))

 const handleLeft = () => {
  // 如果不是第一页（页码>0），则页码减1
  if (startIndex.value > 0) {
    //
    startIndex.value -= playersPerPage;
    // 更新球员
    displayedPlayers.value = player.value.slice(
      startIndex.value,
      startIndex.value + playersPerPage
    )
  }
 }
 const handleRight = () => {
  // 如果还有下一组，则后翻
   if(startIndex.value+playersPerPage < player.value.length) {
    startIndex.value += playersPerPage;
    // 更新球员
    displayedPlayers.value = player.value.slice(
      startIndex.value,
      startIndex.value + playersPerPage
    )
   }
 }

</script>

<style scoped lang="less">
// 整体区域
.player-tabs{
  width: 100%;
  padding: 20px 0; // 只保留上下内边距
  padding-top: 0;
  box-sizing: border-box;
  background-color: #ffffff;
}

// 标题区域
.title{
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: #ffffff;
}
.title-text{
  font-size: 20px;
  padding: 10px;
  padding-left: 40px;
  padding-right: 0;
  padding-bottom: 0;
  margin: 0;
  line-height: 40px;
}

// 内容区域
a{
  text-decoration: none;
}
.content{
  width: 100%;
  padding: 0 26px; // 使用padding代替margin
  position: relative;
  box-sizing: border-box; // 确保padding不会增加宽度
}
.player-list{
  display: flex;
  gap: 20px; // 使用gap控制间距
  flex-wrap: nowrap;// 不允许换行
  overflow: hidden; // 防止溢出
}
img{
  height: 264px;
  width: 100%;
  display: block; // 消除图片底部间隙
  object-fit: cover; /* 保持比例裁剪，而不是拉伸 */
  object-position: center top; /* 关键：显示图片的上部分 */
}
/* 球员卡片 - 每个占据五分之一空间 */
picture{
  flex: 1; // 平均分配空间，这样更简单可靠
  min-width: 0; // 防止内容撑开flex项目
}

.player-name{
  background-color: transparent; // 透明背景
}
.player-number{
  padding: 20px;
  margin: 0;
  text-align: center;
  font:500 23px KippaxModernCnd,Gotham Narrow,GothamNarrow,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
  line-height: 22px;
  letter-spacing: .23px;
  color: #001838;
}

// 按钮区域
.left{
  position: absolute;
  top: 140px;
  left: 27px;
  width: 24px;
  height: 40px;
  background-color: #cb0000;
  border: 0px solid #001838;
}
.right{
  position: absolute;
  top: 140px;
  right: 27px;
  width: 24px;
  height: 40px;
  background-color: #ff0000;
  border: 0px solid #001838;
}
</style>