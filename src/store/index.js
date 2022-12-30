
import Vue from "vue";
import Vuex from "vuex";
import { mangaList } from "./manga-list";

Vue.use(Vuex);
const mangaGenres = ["Драма", "Бойовик", "Романтика", "Хентай", "Війна", "Пародія"];
export default new Vuex.Store({
  state: {
    mangaList: mangaList,
   
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
