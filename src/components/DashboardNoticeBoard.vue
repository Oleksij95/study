<template>
  <div class="notice_board">
    <h3>{{ $t('notice_board') }}</h3>
    <div class="notice_board_list">
      <DashboardNoticeBoardItem v-for="i in 9" :key="i" />
    </div>
  </div>
</template>

<script>
import DashboardNoticeBoardItem from '../components/DashboardNoticeBoardItem.vue';
export default {
  components: {
    DashboardNoticeBoardItem,
  },
};
</script>

<style lang="scss" scoped>
.notice_board {
  padding: 21px 16px 0 16px;
  min-width: 267px;
  border-radius: 10px;
  background: #1f1c1ccc;
  max-width: 270px;
  position: relative;
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    color: #f2e9ea;
  }
  .notice_board_list {
    margin-top: 30px;
    max-height: 680px;
    overflow: auto;
  }
}
</style>
