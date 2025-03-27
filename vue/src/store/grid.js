// store/modules/grid.js

export default {
  namespaced: true,
  state: () => ({
    cells: [],
    buildings: new Map(),
  }),
  mutations: {
    SET_CELLS(state, cells) {
      state.cells = cells;
    },
    updateCells(state, { index, updates }) {
      Object.assign(state.cells[index], updates);
    },

    AddBuilding(state, { key, building }) {
      state.buildings.set(key, building);
    },
    resetGrid(state) {
      state.cells = [];
      state.buildings.clear();
    },
  },
  actions: {
    initializeGrid({ commit }, { x, y }) {
      const cells = [];
      for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
          cells.push({ x: i, y: j, isOccupied: false, activeClass: null, children: null, temp: null });
        }
      }
      commit("SET_CELLS", cells);
    },
  },
  getters: {
    cells: (state) => state.cells,
  },
};
