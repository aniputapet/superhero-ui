import './styles/base.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import { defer } from 'lodash-es';
import VueMeta from 'vue-meta';
import VueTimeago from 'vue-timeago';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import App from './App.vue';
import createStore from './store';
import createRouter from './router';
import i18n from './utils/i18nHelper';
import registerModals from './views/modals';

Vue.use(VueRouter);
Vue.use(VueMeta);

Vue.use(VueTimeago, {
  locale: 'en',
  // https://github.com/egoist/vue-timeago/issues/94#issuecomment-475636750
  converter(date, locale, { includeSeconds = false, addSuffix = false }) {
    return formatDistanceStrict(Date.now(), date, { locale, addSuffix, includeSeconds });
  },
});

Vue.config.productionTip = false;

Vue.prototype.$watchUntilTruly = function watchUntilTruly(getter) {
  return new Promise((resolve) => {
    const unwatch = this.$watch(
      getter,
      (value) => {
        if (!value) return;
        resolve();
        defer(() => unwatch());
      },
      { immediate: true },
    );
  });
};

registerModals();

export default () => {
  const store = createStore();
  const router = createRouter();

  sync(store, router);

  store.watch(
    ({ isBackendLive }) => isBackendLive,
    async (isBackendLive) => {
      const targetRouteName = isBackendLive ? 'feed' : 'maintenance';
      if (router.currentRoute.name === targetRouteName) return;
      await router.push({ name: targetRouteName });
    },
  );

  return new Vue({
    store,
    router,
    i18n,
    render: (h) => h(App),
  });
};
