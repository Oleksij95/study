<template>
  <div id="app">
    <TheHead />
    <div class="page_content">
      <router-view />
    </div>
    <TheSidebar />
  </div>
</template>

<script>
import TheSidebar from './components/TheSidebar.vue';
import TheHead from './components/TheHead.vue';
export default {
  components: {
    TheSidebar,
    TheHead,
  },
};
</script>

<style lang="scss">
body {
  padding: 0 0 0 276px;
  margin: 0;
  background: #000;
  font-family: 'Rubik', sans-serif;
  box-sizing: border-box;
  &.light {
    background: #fff;
  }
}
.page_content {
  padding: 25px 40px;
}
</style>
