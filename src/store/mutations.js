import Vue from 'vue';
import { mergeWith } from 'lodash-es';

export default {
  setAddress(state, address) {
    state.address = address;
  },
  resetState(state) {
    state.aeternity.useSdkWallet = false;
    state.address = null;
    state.balance = 0;
    state.profile = {};
    state.cookiesConsent = {};
  },
  updateTopics(state, payload) {
    state.topics = payload;
  },
  setTipSortBy(state, payload) {
    state.tipSortBy = payload;
  },
  setOracleState(state, payload) {
    state.oracleState = payload;
  },
  setChainNames(state, payload) {
    state.chainNames = payload;
  },
  updateCurrency(state, payload) {
    state.selectedCurrency = payload;
  },
  updateBalance(state, payload) {
    state.balance = payload;
  },
  setGraylistedUrls(state, payload) {
    state.graylistedUrls = payload;
  },
  setTokenInfo(state, payload) {
    state.tokenInfo = payload;
  },
  setWordRegistry(state, payload) {
    state.wordRegistry = payload;
  },
  setVerifiedUrls(state, payload) {
    state.verifiedUrls = payload;
  },
  setIsHiddenContent(state, payload) {
    state.isHiddenContent = payload;
  },
  setUserProfile(state, profile) {
    state.profile = profile;
  },
  addTokenBalance(state, payload) {
    state.tokenBalances = [payload, ...state.tokenBalances]
      .filter((bal, idx, arr) => !arr.slice(0, idx).some((b) => b.token === bal.token))
      .sort((a, b) => a.token.localeCompare(b.token));
  },
  addTokenPrice({ tokenPrices }, payload) {
    Vue.set(tokenPrices, payload.token, payload.price);
  },
  setPinnedItems(state, pinnedItems) {
    state.pinnedItems = pinnedItems;
  },
  syncState(state, remoteState) {
    const customizer = (objValue, srcValue) => {
      if (!Array.isArray(srcValue)) return undefined;
      if (!Array.isArray(objValue)) return srcValue;
      return srcValue.map((el, idx) => (
        el && typeof el === 'object' ? mergeWith({}, objValue[idx], el, customizer) : el
      ));
    };
    Object.entries(mergeWith({}, state, remoteState, customizer))
      .forEach(([name, value]) => Vue.set(state, name, value));
  },
  setBackendStatus(state, isBackendLive) {
    state.isBackendLive = isBackendLive;
  },
  setCookiesConsent(state, { scope, status }) {
    Vue.set(state.cookiesConsent, scope, status);
  },
  setMiddleware(state, payload) {
    state.middleware = payload;
  },
};
