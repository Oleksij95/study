<template>
  <div class="head_search">
    <input type="text" :placeholder="$t('search')" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.head_search {
  input {
    border: 1px solid rgba(245, 240, 241, 0.1);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 12px 16px;
    background: transparent;
    min-width: 266px;
    color: #fff;
  }
}
</style>
