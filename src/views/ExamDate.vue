<template>
  <div class="exam">
    <div class="exam_head">
      <h3>{{ $t('exam_schedule') }}</h3>
      <div class="exam_date_navigation">
        <div class="before_date date_navigation" @click="preMount()">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L1 5L5 9"
              stroke="#F5F0F1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="current_date">{{ current_date }}</div>
        <div class="next_date date_navigation" @click="nextMonth()">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L5 5L1 1"
              stroke="#F5F0F1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <vue-event-calendar :events="events" :title="$t('all_events')">
    </vue-event-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          date: '2022/04/15', // Required
          title: 'Foo', // Required
        },
        {
          date: '2022/05/15',
          title: 'Bar',
          desc: 'description',
          customClass: 'disabled highlight', // Custom classes to an calendar cell
        },
      ],
      current_date: '',
      current_system_date: '',
    };
  },
  beforeMount() {
    let current_date = new Date();
    const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
    this.current_date =
      formatter.format(current_date) + ', ' + current_date.getFullYear();
    this.current_system_date = new Date();
  },
  methods: {
    preMount() {
      this.selectMount('pre');
      this.$EventCalendar.preMonth();
    },
    nextMonth() {
      this.selectMount('next');
      this.$EventCalendar.nextMonth();
    },
    selectMount(select) {
      const d = this.current_system_date;
      const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
      if (select === 'pre') {
        d.setMonth(d.getMonth() - 1);
      } else {
        d.setMonth(d.getMonth() + 1);
      }
      this.current_system_date = d;
      this.current_date = formatter.format(d) + ', ' + d.getFullYear();
    },
  },
  components: {},
};
</script>

<style lang="scss">
body .exam .cal-wrapper {
  padding: 0 15px 0 0;
}

.cal-header {
  display: none;
}

body .exam .events-wrapper {
  background: #191616 !important;
}

.exam {
  background: #1f1c1ccc;
  border-radius: 10px;
  padding: 24px;
  max-width: 700px;
  color: #fff;
  .exam_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    .exam_date_navigation {
      display: flex;
      align-items: center;
    }
    .date_navigation {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #f5f0f1;
      cursor: pointer;
    }
    .current_date {
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      color: #f5f0f1;
      opacity: 0.9;
      margin: 0 20px;
      min-width: 70px;
      text-align: center;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    margin: 0;
    color: #f5f0f1;
  }
}
</style>
