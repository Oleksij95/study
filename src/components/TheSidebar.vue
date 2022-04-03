<template>
  <div class="sidebar">
    <a href="/" class="logo">
      <img src="../assets/logo.svg" alt="logo" />
    </a>

    <SidebarMenu />

    <SidebarFooter />
  </div>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue';
import SidebarFooter from '../components/SidebarFooter';
export default {
  components: {
    SidebarMenu,
    SidebarFooter,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #0e0d0d;
  height: 100vh;
  max-width: 220px;
  min-width: calc(220px + 28px * 2);
  padding: 23px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
