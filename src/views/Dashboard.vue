<template>
  <div class="dashboard">
    <div class="dashboard_statistic__wrapper">
      <DashboardStatistics />
      <DashboardClassStatistics />
    </div>
    <DashboardNoticeBoard />
  </div>
</template>

<script>
import DashboardStatistics from '../components/DashboardStatistics.vue';
import DashboardClassStatistics from '../components/DashboardClassStatistics.vue';
import DashboardNoticeBoard from '../components/DashboardNoticeBoard.vue';
export default {
  components: {
    DashboardStatistics,
    DashboardClassStatistics,
    DashboardNoticeBoard,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .dashboard_statistic__wrapper {
    width: 78.5%;
  }
}
</style>
