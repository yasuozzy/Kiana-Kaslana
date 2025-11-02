<template>
  <div class="ds-product-pagination">
    <div class="ds-pagination">
      <a-space size="large">
        <a-dropdown>
          <a-button>{{ selectedOption }}</a-button>
          <template #content>
            <div class="wo">
              <a-doption @click="updateCount('24 项目')">24 项目</a-doption>
              <a-doption @click="updateCount('48 项目')">48 项目</a-doption>  
              <a-doption @click="updateCount('72 项目')">72 项目</a-doption>
            </div>
          </template>
        </a-dropdown>
      </a-space>
    </div>

    <div class="ds-product-count">1 - 72 个，共 2349 个</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义一个响应式变量，用于存储当前选中的选项
const selectedOption = ref('72 项目')
// 定义事件发射器，用来向父组件传递选中的数量
const emit = defineEmits(['update-count'])
// 当用户点击24、48或72时，这个函数会被调用
const updateCount = (count) => {
  //更新本地的选中数量 作用：改变按钮上显示的数字和右侧统计信息
  selectedOption.value = count
  // 向父组件发送消息，告诉它用户选择了新的数量 作用：让父组件知道要显示多少个商品，父组件会把这个信息传给商品列表组件
  emit('update-count', count)
}
</script>

<style scoped lang="scss">
.ds-product-pagination {
  // width: 1377px;
  display: flex;
  padding: 24px 24px 0 24px;
  justify-content: space-between; /* 让里面的元素在主轴上（这里是水平方向）两端对齐，中间留白 */
  align-items: center;
  display: flex;
  flex-wrap: wrap; /* 当内容超出容器宽度时，自动换行 */
  overflow: hidden;
}
:deep(.arco-btn) {
  height: 38px;
  width: 106px;
  // 你还可以添加其他样式，比如行高、字体大小等，让文本居中
  line-height: 40px; /* 让文本垂直居中 */
  font-size: 16px; /* 调整字体大小 */
}
.ds-product-count {
  font-size: 16px;
  line-height: 40px;
  font-weight: 500;
}
.wo {
  width: 106px;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .ds-product-pagination {
    padding: 16px 12px 0 12px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  :deep(.arco-btn) {
    height: 36px;
    width: 100px;
    font-size: 14px;
    line-height: 36px;
  }

  .ds-product-count {
    font-size: 14px;
    width: 100%;
    text-align: left;
  }

  .wo {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .ds-product-pagination {
    padding: 12px 8px 0 8px;
  }

  :deep(.arco-btn) {
    height: 32px;
    width: 90px;
    font-size: 13px;
    line-height: 32px;
  }

  .ds-product-count {
    font-size: 13px;
  }

  .wo {
    width: 90px;
  }
}
</style>
