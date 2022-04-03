<template>
  <div class="sidebar_menu">
    <SidebarMenuItem :menu="menu" />
  </div>
</template>

<script>
import SidebarMenuItem from '../components/SidebarMenuItem';
export default {
  data() {
    return {
      menu: [
        {
          name: 'Dashboard',
          to: '/dashboard',
          img: 'dashboard',
        },
        {
          name: 'Exam date',
          to: '/exam-date',
          img: 'exam-date',
        },
        {
          name: 'Class Room',
          to: '/class-room',
          img: 'class-room',
        },
        {
          name: 'Notice Board',
          to: '/notice-board',
          img: 'notice-board',
        },
        {
          name: 'Messages',
          to: '/messages',
          img: 'messages',
        },
        {
          name: 'Results',
          to: '/results',
          img: 'results',
        },
        {
          name: 'Notification',
          to: '/notification',
          img: 'notification',
        },
        {
          name: 'Settings',
          to: '/settings',
          img: 'settings',
        },
      ],
    };
  },
  components: {
    SidebarMenuItem,
  },
};
</script>

<style lang="scss" scoped>
.sidebar_menu {
  padding-left: 0px;
  margin: 0;
  list-style: none;
  max-width: 200px;
  a {
    opacity: 0.7;
    color: #f5f0f1;
    text-decoration: none;
    margin: 13px 0;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    padding: 11px 24px;
    transition: all 0.35s;
    &.active {
      background: linear-gradient(180deg, #ff3f58 0%, #e50d29 100%);
      border-radius: 5px;
      color: #fff;
      opacity: 1;
    }
    &:hover {
      opacity: 1;
      color: #fff;
    }
    img {
      vertical-align: -2px;
      margin-right: 8px;
    }
  }
}
</style>
