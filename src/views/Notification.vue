<template>
  <div class="notification_page">
    <div class="notification">{{ $t('no_notification') }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style land="scss" scoped>
.notification_page {
  display: flex;
}
.notification {
  background: #1f1c1ccc;
  border-radius: 10px;
  padding: 24px;
  max-width: 720px;
  width: 48%;
  color: #fff;
}
</style>
