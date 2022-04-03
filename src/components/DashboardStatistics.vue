<template>
  <div class="statistics">
    <DashboardStatisticsItem
      v-for="item in statisticItems"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import DashboardStatisticsItem from './DashboardStatisticsItem.vue';
export default {
  data() {
    return {
      statisticItems: [
        {
          id: 1,
          name: 'Total Students',
          img: 'students',
          options: this.studentsOptions,
          series: this.studentsSeries,
          value: '1163',
          indicator: 'Attendantness',
          precent: 80,
          chart: {
            series: [
              {
                name: 'Total Students',
                data: [10, 20, 30, 20, 50],
              },
            ],
            options: {
              stroke: { width: 2, curve: 'smooth', colors: ['#18B4F9'] },
              xaxis: {
                categories: [1, 2, 3, 4, 5],
              },
            },
          },
        },

        {
          id: 2,
          name: 'Online Activate',
          img: 'activate',
          value: '85%',
          indicator: 'Activate Users',
          precent: 60,
          chart: {
            series: [
              {
                name: 'Online Activate',
                data: [10, 10, 10, 10, 50],
              },
            ],
            options: {
              stroke: { width: 2, curve: 'smooth', colors: ['#FEA441'] },
              xaxis: {
                categories: [1, 2, 3, 4, 5],
              },
            },
          },
        },

        {
          id: 3,
          name: 'Online learning',
          img: 'learning',
          value: '95%',
          indicator: 'Online Study',
          precent: 95,
          chart: {
            series: [
              {
                name: 'Online learning',
                data: [10, 20, 20, 30, 50],
              },
            ],
            options: {
              stroke: { width: 2, curve: 'smooth', colors: ['#FF2A46'] },
              xaxis: {
                categories: [1, 2, 3, 4, 5],
              },
            },
          },
        },
      ],
    };
  },
  components: {
    DashboardStatisticsItem,
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  display: flex;
  justify-content: flex-start;
}
</style>
