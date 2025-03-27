export default {
  namespaced: true, // Включаем namespaces для модуля
  state: {
    selectedItem: null, // Состояние для хранения выбранного объекта
  },
  getters: {
    selectedItem: (state) => state.selectedItem, // Геттер для получения выбранного объекта
  },
  mutations: {
    setSelectedItem(state, item) {
      console.log("setItem");
      state.selectedItem = item; // Мутация для установки выбранного объекта
    },
    clearSelection(state) {
      state.selectedItem = null; // Мутация для очистки выбранного объекта
    },
  },
  actions: {
    selectItemAction({ commit }, item) {
      commit("setSelectedItem", item); // Действие для установки выбранного объекта
    },
    clearSelectionAction({ commit }) {
      commit("clearSelection"); // Действие для очистки выбора
    },
  },
};
