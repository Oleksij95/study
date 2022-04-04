<template>
  <div class="head">
    <HeadUser />
    <div class="head_right">
      <HeadSearch />
      <HeadNotify />
    </div>
  </div>
</template>

<script>
import HeadUser from './HeadUser';
import HeadSearch from './HeadSearch.vue';
import HeadNotify from './HeadNotify.vue';
export default {
  components: {
    HeadUser,
    HeadSearch,
    HeadNotify,
  },
};
</script>

<style lang="scss" scoped>
.head {
  padding: 17px 40px 17px 316px;
  background: #0b0a0a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head_right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
