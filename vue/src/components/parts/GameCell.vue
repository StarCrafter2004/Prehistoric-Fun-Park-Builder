<template>
  <div class="cell" :class="[activeClass]" @click="onClick" @mouseleave="handleLeave" @mouseover="handleHover">
    <component :style="{ position: 'absolute' }" :is="children" />
    <component :style="{ opacity: '0.5' }" :is="temp" />
  </div>
</template>

<script>
export default {
  props: {
    x: Number,
    y: Number,
    activeClass: String,
    children: Object,
    temp: Object,
  },
  methods: {
    onClick() {
      this.$emit("cell-click", { x: this.x, y: this.y });
    },
    handleHover() {
      this.$emit("cell-hover", { x: this.x, y: this.y });
    },
    handleLeave() {
      this.$emit("cell-leave", { x: this.x, y: this.y });
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
