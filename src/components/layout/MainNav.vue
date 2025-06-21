<template>
    <div class="main-menu">
        <ul>
          <StagewiseToolbar v-if="isDevelopment" :config="stagewiseConfig" />
          <li><a href="#">包</a></li>
          <li><a href="#">训练</a></li>
          <li><a href="#">按球员购物</a></li>
          <li><a href="#">男人</a></li>
          <li><a href="#">女人</a></li>
          <li><a href="#">子孩</a></li>
          <li><a href="#">球衣</a></li>
          <li><a href="#">礼品和配件</a></li>
          <li><a href="#">收藏</a></li>
          <li><a href="#">清仓</a></li>
        </ul>
        <div class="line">
          <div class="line2"></div>
        </div>

      </div>
</template>

<script lang="ts" setup>
import { StagewiseToolbar } from '@stagewise/toolbar-vue';
import { computed } from 'vue';

const isDevelopment = computed(() => import.meta.env.DEV);

const stagewiseConfig = {
    plugins: []
};
</script>

<style scoped lang="less">
  .main-menu {
    width: 100%;
    background-color: #140A47;
    height: 35px;

  }
    ul {
      list-style: none;
      margin: 0;
      padding: 0 ;
      flex-grow: 1;
      display: flex;


      width: 100%;
    }
      li a {
        color: rgb(249, 249, 249);
        text-decoration: none;
        font-size: .8125rem;
        font-weight: 1000;
      }
        &:hover {
          text-decoration: underline;
        }
      li {
       flex: 1;
       box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 35px;
      }
      .line{
        border: 1px solid rgba(255, 255, 255, 0.3); /* 白色边框，30% 透明度 */
      }
      .line2{
        border: 1.5px solid rgba(#100d22,); /* 白色边框，30% 透明度 */
      }
</style>
