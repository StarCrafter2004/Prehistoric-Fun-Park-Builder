<template>
  <PageLayout>
    <section>
      <GameGrid :x="40" :y="40" />
    </section>
    <BuildMenu />
  </PageLayout>
</template>

<script>
import PageLayout from "../parts/PageLayout";
import GameGrid from "../parts/GameGrid.vue";
import BuildMenu from "../parts/BuildMenu.vue";

import { mapState } from "vuex";

export default {
  name: "HomePage",

  components: {
    PageLayout,
    GameGrid,
    BuildMenu,
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    ...mapState("selection", ["selectedItem"]), // Получаем состояние из Vuex

    dragStyle() {
      return {
        left: this.mouseX - 15 + "px",
        top: this.mouseY - 15 + "px",
        position: "absolute",
        pointerEvents: "none",
      };
    },
  },
  methods: {
    updatePosition(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.updatePosition);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.updatePosition);
  },
};
</script>

<style></style>
