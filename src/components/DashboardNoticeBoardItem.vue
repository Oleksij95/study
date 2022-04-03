<template>
  <div class="notice_board_item">
    <div class="notice_board_item_img">
      <img src="../assets/notify/notify-1.png" alt="This page require" />
    </div>
    <div class="notice_board_item_text">
      <div class="notice_board_item__title">
        This page require data that you entered....
      </div>
      <div class="notice_board_item__date">Wed,Feb 24,2021; 12:00 pm</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notice_board_item {
  display: flex;
  margin-bottom: 20px;
  .notice_board_item_img {
    margin-right: 15px;
  }
  .notice_board_item__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    margin-bottom: 5px;
    color: #f5f0f1;
  }
  .notice_board_item__date {
    color: #f5f0f1;
    font-size: 12px;
    opacity: 0.6;
  }
}
</style>
