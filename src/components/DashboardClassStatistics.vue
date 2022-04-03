<template>
  <div class="class_statistics">
    <h3>{{ $t('class_statistics') }}</h3>
    <div id="chart">
      <VueApexCharts
        type="line"
        height="480"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
export default {
  data() {
    return {
      series: [
        {
          name: 'Class A',
          type: 'area',
          data: [30, 45, 21, 47, 31, 50, 26],
        },
        {
          name: 'Class B',
          type: 'line',
          data: [55, 69, 45, 61, 43, 54, 37],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        grid: {
          borderColor: '#f5f0f11a',
          strokeDashArray: 10,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        legend: {
          show: false,
        },
        stroke: {
          curve: 'smooth',
          colors: ['#18B4F9', '#FF3F58'],
        },
        fill: {
          type: 'solid',
          opacity: [0.2, 1],
        },
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        markers: {
          size: 0,
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '14px',
              colors: '#F5F0F1',
            },
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          fillSeriesColor: false,
          theme: 'dark',
          y: {
            formatter: function (y) {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' points';
              }
              return y;
            },
          },
        },
      },
    };
  },
  components: {
    VueApexCharts,
  },
};
</script>

<style lang="scss" scoped>
.class_statistics {
  min-height: 300px;
  background: #1f1c1ccc;
  padding: 24px;
  margin-top: 24px;
  border-radius: 10px;
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    color: #f5f0f1;
    margin: 0 0 32px 0;
  }
}
</style>
