<template>
  <div id="app">
    <TheHead v-if="USER !== null" />
    <div class="page_content" :class="{ inside_page: USER }">
      <router-view />
    </div>
    <TheSidebar v-if="USER !== null" />
  </div>
</template>

<script>
import TheSidebar from './components/TheSidebar.vue';
import TheHead from './components/TheHead.vue';
import { mapGetters } from 'vuex';
export default {
  beforeMount() {
    console.log(this.USER);
  },
  computed: {
    ...mapGetters(['USER']),
  },
  components: {
    TheSidebar,
    TheHead,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
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
  &.inside_page {
    padding-left: 316px;
  }
}
</style>
