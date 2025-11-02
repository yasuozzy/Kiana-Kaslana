<template>
  <header class="pdp">
    <div class="pdp-header">
      <img src="../../assets/logo/shangpintu1.jpeg" alt="" />
    </div>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
.pdp-header {
  padding: 0 24px 0;
}
.pdp-header img {
  width: 100%;
  height: 389px;
}

/* ========== 移动端响应式布局 ========== */
@media (max-width: 768px) {
  .pdp-header {
    padding: 0 12px;
  }

  .pdp-header img {
    height: 250px;
    object-fit: cover;
  }
}

@media (max-width: 480px) {
  .pdp-header {
    padding: 0 8px;
  }

  .pdp-header img {
    height: 180px;
  }
}
</style>
