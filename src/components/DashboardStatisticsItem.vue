<template>
  <div class="statistics_item">
    <div class="flex_wrapper">
      <div class="statistics_item_logo">
        <img :src="require(`../assets/${item.img}.svg`)" :alt="item.name" />
      </div>
      <div>
        <div class="statistics_item__title">
          {{ $t(`${item.name.replace(/ /g, '_').toLowerCase()}`) }}
        </div>
        <div class="statistics_item__value">{{ item.value }}</div>
        <div class="chart">
          <VueApexCharts
            type="line"
            height="70"
            width="150"
            :options="chartOtions"
            :series="chartSeries"
          />
        </div>
      </div>
    </div>
    <div class="statistics_item__line">
      <div class="statistics_item__line_title">
        {{ $t(`${item.indicator.replace(/ /g, '_').toLowerCase()}`) }}
      </div>
      <div class="statistics_item__indicator__wrapper">
        <div class="statistics_item__indicator">
          <div class="currency" :style="{ width: item.precent + '%' }"></div>
        </div>
        <div class="precent">{{ item.precent }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      chartOtions: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        markers: {
          colors: this.item.chart.options.stroke.colors,
        },
        stroke: this.item.chart.options.stroke,
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        tooltip: {
          x: {
            show: false,
          },
          items: {
            display: 'none',
          },
          marker: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        area: {
          plotOptions: {},
        },
        xaxis: {
          categories: this.item.chart.options.xaxis.categories,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: { show: false },
          crosshairs: { show: false },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      chartSeries: this.item.chart.series,
    };
  },
  components: {
    VueApexCharts,
  },
};
</script>

<style lang="scss" scoped>
.statistics_item {
  background: #1f1c1ccc;
  border-radius: 10px;
  padding: 16px;
  min-width: 267px;
  width: 33%;
  margin-right: 26px;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  .flex_wrapper {
    display: flex;
    align-items: center;
  }
  .chart {
    position: absolute;
    right: 20px;
    top: 20%;
  }
  .statistics_item_logo {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($color: #f5f0f1, $alpha: 0.1);
    margin-right: 20px;
    border: 6px solid rgba($color: #0e0d0d, $alpha: 0.7);
  }
  .statistics_item__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: rgba($color: #f5f0f1, $alpha: 0.8);
    margin-bottom: 8px;
  }
  .statistics_item__value {
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
  }
  .statistics_item__line {
    margin-top: 30px;
  }
  .statistics_item__line_title {
    color: rgba($color: #f5f0f1, $alpha: 0.8);
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
  }
  .statistics_item__indicator__wrapper {
    position: relative;
    width: 100%;
  }
  .statistics_item__indicator {
    width: 80%;
    height: 6px;
    position: relative;
    border-radius: 3px;
    background: rgba($color: #f5f0f1, $alpha: 0.8);
    margin-top: 16px;
    .currency {
      background: linear-gradient(180deg, #ff3f58 0%, #e50d29 100%);
      border-radius: 3px;
      position: absolute;
      height: 100%;
      transition: all 0.4s;
    }
  }
  .precent {
    right: 0;
    bottom: -6px;
    width: 30%;
    position: absolute;
    text-align: right;
  }
}
</style>
