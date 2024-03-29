import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/all.scss';
import { currency, date } from './mixins/filters';

import { LoadingPlugin, Loading } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import * as VueGoogleMaps from 'vue3-google-map';

import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue';
import router from './router';
const { VITE_MAP_KEY } = import.meta.env;

/**
 * vee-validate 設定
 */
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);

app.use(
  AOS.init({
    duration: 900
  })
);
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.use(LoadingPlugin, {
  color: '#698f39',
  isLoading: true
});

// map
app.use(VueGoogleMaps, {
  load: {
    key: `${VITE_MAP_KEY}`,
    libraries: ['places']
  },
  installComponents: true
});

app.component('VueLoading', Loading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.config.globalProperties.$filters = { currency, date };

app.mount('#app');
