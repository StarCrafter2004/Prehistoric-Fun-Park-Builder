<template>
  <div
    class="cell"
    :class="[activeClass]"
    @click="() => onCellClick()"
    @mouseleave="() => handleLeave()"
    @mouseover="() => handleHover()"
  >
    <component
      @cell-delete="() => handleDelete()"
      :style="{ position: 'absolute', pointerEvents: selectedItem == null ? 'auto' : 'none' }"
      :is="children"
    />
    <component :style="{ opacity: '0.5', pointerEvents: 'none' }" :is="temp" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    x: Number,
    y: Number,
    activeClass: String,
    children: Object,
    temp: Object,
    isMounted: Boolean,
  },
  computed: {
    ...mapState("selection", ["selectedItem"]),
  },
  methods: {
    onCellClick() {
      this.$emit("cell-click", { x: this.x, y: this.y });
    },
    handleHover() {
      this.$emit("cell-hover", { x: this.x, y: this.y });
    },
    handleLeave() {
      this.$emit("cell-leave", { x: this.x, y: this.y });
    },
    handleDelete() {
      if (this.selectedItem == null) {
        this.$emit("cell-delete", { x: this.x, y: this.y });
      }
    },
  },
};
</script>

<style scoped>
.cell {
  position: relative;
  border: 1px solid;
  border-color: green;
  width: 40px;
  height: 40px;
  background-color: inherit;
  &.active_blue {
    background-color: rgba(0, 128, 255, 0.5);
  }
  &.active_red {
    background-color: rgba(172, 52, 52, 0.5);
  }
}
</style>
