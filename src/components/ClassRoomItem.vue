<template>
  <div class="class-room_list__item">
    <div class="class-left-part">
      <img
        :src="require(`../assets/subject/${classItem.classImageName}.png`)"
        :alt="classItem.className"
      />
      {{ classItem.className }}
    </div>
    <div class="room_item__counter">
      <strong> {{ classItem.classCount }} </strong> {{ $t('joined') }}
    </div>
    <button class="class_join">{{ $t('join_now') }}</button>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.class-room_list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  margin-bottom: 16px;
  color: #f5f0f1;
  &:last-child {
    margin-bottom: 0;
  }
  .class-left-part {
    display: flex;
    align-items: center;
    img {
      margin-right: 15px;
    }
  }
  .room_item__counter {
    position: relative;
    &::before {
      content: '';
      width: 19px;
      height: 9px;
      position: absolute;
      top: 5px;
      left: -30px;
      background: url('../assets/eye.svg');
      background-size: cover;
    }
  }
  .class_join {
    background: linear-gradient(180deg, #ff3f58 0%, #e40c28 100%);
    border-radius: 5px;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
  }
}
</style>
