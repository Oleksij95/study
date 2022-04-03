<template>
  <div>
    <div
      class="sidebar_menu__item"
      v-for="(menu_item, index) in menu"
      :key="index"
    >
      <router-link :to="menu_item.to">
        <span class="sidebar_menu_image__wrapper">
          <img :src="require(`../assets/sidebar-icon/${menu_item.img}.svg`)"
        /></span>
        {{ $t(`${menu_item.name.replace(/ /g, '_').toLowerCase()}`) }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar_menu__item {
  a {
    opacity: 0.7;
    color: #f5f0f1;
    text-decoration: none;
    margin: 15px 0;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    padding: 11px 24px;
    transition: all 0.35s;
    &.router-link-active {
      background: linear-gradient(180deg, #ff3f58 0%, #e50d29 100%);
      border-radius: 5px;
      color: #fff;
      opacity: 1;
    }
    &:hover {
      opacity: 1;
      color: #fff;
    }
    .sidebar_menu_image__wrapper {
      display: inline-block;
      width: 15px;
      margin-right: 8px;
    }
    img {
      vertical-align: -2px;
    }
  }
}
</style>
