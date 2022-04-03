import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import localization from './localization';

import 'vue-event-calendar/dist/style.css'; //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar';
// locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi', 'ua', 'no, 'no-nn'

Vue.use(vueEventCalendar, { locale: 'en', color: '#e50d29' });

Vue.use(VueI18n);

const messages = localization;

const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'en', // set locale
  messages,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
