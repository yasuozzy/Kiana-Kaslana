<template>
   <div class="product-list-title">
        <h4>25/26 客场套装</h4>
        <div class="carousel-sub-title" _msttexthash="14440842" _msthash="221">伦敦的杰作<a href="" class="product-list-title-price">查看全部</a></div>
        <div class="scroll-area">
        </div>

        <div class="product-list-content">
          <div class="product" v-for="( item , index) in  products " :key="index">
            <a href="#">
              <img :src='item.image' :alt="item.title">
            </a>
            <div class="carousel-product-info">{{ item.price }}</div>
            <div class="product-card-title">{{ item.title }}</div>
          </div>
        </div>
</div>
</template>
<script setup>

  const products = [
    {
      image: '//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-away-match-shirt-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400',
      title: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26',
      price: '147.00 欧元'
    },
    {
      image: '//images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2025-26_ss5_p-202492460+u-pwqn6ak93ykkjzakvmbr+v-q7nesnijuby0xgslqy9x.jpg?_hv=2&w=400',
      title: '切尔西耐克客场体育场衬衫 2025-26',
      price: '100.00 欧元'
    },{
      image: '//images.footballfanatics.com/chelsea/chelsea-cup-nike-away-stadium-shirt-2025-26-with-palmer-10-printing_ss5_p-203084088+u-xj01ycfwuhdspkdeqbtn+v-jmu7qb7zrhchgpbghfvx.jpg?_hv=2&w=400',
      title: '切尔西杯子客场体育场球衣 2025-26（印有Palmer 10 字样）',
      price: '118.00 欧元'
    },{
      image: '//images.footballfanatics.com/chelsea/chelsea-cup-nike-dri-fit-adv-away-match-shirt-2025-26-with-palmer-10-printing_ss5_p-203084096+u-hfjpd5pcjmsux1y5wng8+v-2w6heuwnvnzx9xsmiuan.jpg?_hv=2&w=400',
      title: '切尔西杯子客场 Vapor 比赛球衣 2025-26（印有Palmer 10 字样）',
      price: '165.00 欧元'
    },{
      image: '//images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2025-26-with-palmer-10-printing_ss5_p-203084502+u-s4wvrtfccdsrjdn3lqhw+v-7d9xsfphpivwan5zm9qz.jpg?_hv=2&w=400',
      title: '切尔西客场体育场球衣 2025-26（印有Palmer 10 字样）',
      price: '118.00 欧元'
    },{
      image: '//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-away-match-shirt-2025-26-with-palmer-10-printing_ss5_p-203084510+u-gqcxhfkthjxrf7ftzxqk+v-bm00qm3shmyvyvobyefm.jpg?_hv=2&w=400',
      title: '切尔西 Nike Dri Fit Adv 客场球衣 2025-26（印有Palmer 10 字样））',
      price: '165.00 欧元'
    },{
      image: '//images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-minikit-2025-26-little-kids_ss5_p-202492487+u-gaiwvppcwxyrymaluylv+v-qccmnbcezuk6wwzaugay.jpg?_hv=2&w=400',
      title: '切尔西耐克客场体育场迷你套装 2025-26 - 童款',
      price: '68.00 欧元'
    },{
      image: '//images.footballfanatics.com/chelsea/chelsea-cup-nike-away-stadium-shirt-2025-26-with-caicedo-25-printing_ss5_p-203084117+u-wt25ir96cvfi9ppuzyrs+v-ji8wzki9u6xac6kjdum7.jpg?_hv=2&w=400',
      title: '切尔西杯子客场体育场球衣 2025-26（印有Caicedo 25 字样）',
      price: '118.00 欧元'
    }
  ]
</script>
<style scoped lang="less">
    .product-list {
    box-sizing: border-box;
    margin-top: 50px;

    background-color: #ffffff;
  }
  .product-list-title h4 {
    margin: 0;
    font-size: 16px;
    list-style: 16px;
  }
  .product-list-title {
    width: 100%;
    margin: 0;
    font-size: 16px;
    padding: 15px 20px 0 20px;
    background-color: #ffffff;
    box-sizing: border-box;
  }
  .product-list-content {
    display: flex;
    overflow-x: auto; /* 让内容超出时可以横向滚动 */
    flex-wrap: nowrap; /* 防止换行 */
    gap: 10px; /* 卡片之间的间距 */
  }
  .carousel-sub-title{
    margin-bottom: 10px;
  }
  .product {
    width: 264px; /* 固定宽度，不要100% */
    flex: 0 0 auto; /* 防止伸缩 */
    background-color: #f1f4ee;
    padding: 16px;
    margin-bottom: 40px;
    box-sizing: border-box;
  }
  .product img {
    width: 264px;
    object-fit: contain; /* 保持图片比例，完整显示在容器内 */
  }
  .carousel-product-info{
   font-size: 16px;
   color: #242424;
   font-weight: 500;
   margin-bottom: 8px;
   margin-top: 10px;
  }
  .product-card-title{
    font-size: 12px;
    color: #242424;
  }
  .cs-seek-container{
    width: 100%;
    height: 8px;
  }
  .product-list-title-price{
    float: right; /* 元素浮动到右侧 */
    font-size: 12px;
    color: #262422;

  }
  /* 滚动条样式 */
  .product-list-content::-webkit-scrollbar {
    margin-top: 100px;
    height: 8px;                /* 滚动条高度 */
    background: transparent;     /* 滚动条轨道背景 */
  }

  .product-list-content::-webkit-scrollbar-thumb {
    background: #cacaca;         /* 滚动条滑块颜色（你喜欢的绿色） */
    border-radius: 4px;          /* 圆角 */
    transition: background 0.3s;
  }

  .product-list-content::-webkit-scrollbar-thumb:hover {
    background: #7f807f;         /* 鼠标悬停时更深的绿色 */
  }

  .product-list-content::-webkit-scrollbar-track {
    background: #f0f0f0;         /* 滚动条轨道颜色 */
    border-radius: 4px;
  }


</style>
