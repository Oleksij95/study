<template>
  <div class="settings">
    <h3>{{ $t('settings') }}</h3>
    <div class="settings_list">
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
    changeLanguage(language) {
      localStorage.setItem('language', language);
    },
    ...mapActions({}),
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
}
</style>
