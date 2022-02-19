import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import modules from "./modules";

let vuexLocalStorage = null;

Vue.use(Vuex);
if (process.browser) {
  vuexLocalStorage = new VuexPersist({
    key: "vuex", // The key to store the state on in the storage provider.
    storage: window.localStorage // or window.sessionStorage or localForage
  });
}

const store = new Vuex.Store({
  modules,
  plugins: process.browser ? [vuexLocalStorage.plugin] : []
});

export default store;
