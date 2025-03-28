<template>
  <div class="build-menu">
    <div class="build-items">
      <BuildItem
        v-for="(item, index) in items"
        :key="index"
        :buildItemitem="item"
        @select-item="(item) => selectItem(item)"
      />

      <div class="build-item cancel" @click="cancelSelection">✖</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BuildItem from "./BuildItem.vue";
import StandartBuilding from "../buildItems/StandartBuilding.vue";
import TowerBuilding from "../buildItems/TowerBuilding.vue";
import DeliciousAndDotBuilding from "../buildItems/DeliciousAndDotBuilding.vue";

export default {
  components: { BuildItem },
  data() {
    return {
      items: [
        {
          id: 1,
          component: StandartBuilding,
          occupies: [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
          ],
        },
        {
          id: 2,
          component: TowerBuilding,
          occupies: [
            { x: -1, y: -1 },
            { x: 1, y: 1 },
          ],
        },
        {
          id: 3,
          component: DeliciousAndDotBuilding,
          occupies: [
            { x: -2, y: -2 },
            { x: 2, y: 1 },
          ],
        },
      ],
    };
  },

  methods: {
    ...mapMutations("selection", ["setSelectedItem", "clearSelection"]),
    selectItem(item) {
      this.setSelectedItem(item);
    },
    cancelSelection() {
      this.clearSelection();
    },
  },
};
</script>

<style scoped>
.menu-wrapper {
  z-index: -1;
  position: absolute;
  width: 100vh;
  height: 100vh;
}
.build-menu {
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 150px;
  justify-content: center;
}

.build-items {
  height: 100%;
  padding: 10px;
  background-color: rgba(34, 34, 34, 0.3);
  justify-content: center;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  display: flex;
  gap: 10px;
}

.drag-item {
  z-index: 3;
}
</style>
