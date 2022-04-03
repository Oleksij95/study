<template>
  <div class="class-room_page">
    <div class="class-room">
      <h3>{{ $t('today_incomeing_classes') }}</h3>
      <div class="current_date">Date {{ current_date }}</div>
      <div class="class-room_list">
        <ClassRoomItem
          v-for="classItem in classList"
          :key="classItem.id"
          :classItem="classItem"
        />
      </div>
    </div>
    <div class="selected_class-room">
      <div class="class-room__name">sss</div>
    </div>
  </div>
</template>

<script>
import ClassRoomItem from '../components/ClassRoomItem.vue';
export default {
  data() {
    return {
      classList: [
        {
          classId: '1',
          className: 'Subject 1',
          classImageName: 'subject-1',
          classCount: '204',
        },
        {
          classId: '2',
          className: 'Subject 2',
          classImageName: 'subject-2',
          classCount: '107',
        },
      ],
      current_date: '',
    };
  },
  beforeMount() {
    let current_date = new Date();
    const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
    this.current_date =
      current_date.getDate() +
      ' ' +
      formatter.format(current_date) +
      ', ' +
      current_date.getFullYear();
  },
  components: {
    ClassRoomItem,
  },
};
</script>

<style lang="scss" scoped>
.class-room_page {
  display: flex;
  justify-content: space-between;
}
.class-room {
  background: #1f1c1ccc;
  border-radius: 10px;
  padding: 24px;
  max-width: 720px;
  width: 48%;
  color: #fff;
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 120%;
    margin: 0 0 8px 0;
    color: #f5f0f1;
  }
  .current_date {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #f5f0f1;
    opacity: 0.7;
  }
  .class-room_list {
    margin-top: 30px;
  }
}
</style>
