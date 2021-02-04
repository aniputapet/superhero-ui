import WordBazaar from 'wordbazaar-module';

const wordbazaar = new WordBazaar(process.env.VUE_APP_WORD_REGISTRY_ADDRESS, 'aeternity.sdk');

const state = {
  ...wordbazaar.state,
};

const actions = {
  ...wordbazaar.actions,
};

const mutations = {
  ...wordbazaar.mutations,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
