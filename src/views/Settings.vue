<template>
  <div class="settings">
    <h3>{{ $t('settings') }}</h3>
    <div class="settings_list">
      <div class="settings_list__item">
        <div class="settings_name">{{ $t('theme') }}</div>
        <div class="settings_tumbler">
          <div
            class="settings_tumbler__indicator"
            :class="{ light: THEME === 'light' }"
            @click="changeTheme($event)"
          ></div>
        </div>
      </div>
      <div class="settings_list__item">
        <div class="settings_name">{{ $t('language') }}</div>
        <select v-model="$i18n.locale" @change="changeLanguage($i18n.locale)">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      langs: ['en', 'uk'],
    };
  },
  methods: {
    changeTheme(e) {
      e.target.classList.toggle('light');
      document.querySelector('body').classList.toggle('light');
    },
    changeLanguage(language) {
      localStorage.setItem('language', language);
    },
    ...mapActions({}),
  },
  beforeMount() {
    console.log(this.$i18n.locale);
  },
  computed: {
    ...mapGetters(['THEME']),
  },
};
</script>

<style lang="scss" scoped>
.settings {
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
  select {
    min-height: 40px;
    min-width: 80px;
    border-radius: 10px;
    background: 1px solid #fff;
    font-size: 16px;
  }
  .settings_list {
    margin-top: 30px;
    .settings_list__item {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .settings_name {
    margin-bottom: 10px;
  }

  .settings_tumbler {
    width: 80px;
    height: 40px;
    border-radius: 25px;
    background: #000;
    position: relative;
    padding: 4px;
    box-sizing: border-box;
    .settings_tumbler__indicator {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      top: 5px;
      left: 5px;
      background: #fff;
      cursor: pointer;
      transition: all 0.4s;
      &.light {
        left: 55%;
      }
    }
  }
}
</style>
