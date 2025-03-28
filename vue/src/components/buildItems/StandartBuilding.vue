<template>
  <div @click="onBuildingClick" class="standart-build">
    <div class="left-wall"></div>
    <div class="right-wall"></div>
    <div class="back-left-wall"></div>
    <div class="back-right-wall"></div>
    <div class="celling"></div>
  </div>
</template>

<script>
export default {
  methods: {
    onBuildingClick() {
      // if (this.selectedItem == null) {

      // }
      this.$emit("cell-delete", { x: this.x, y: this.y });
    },
  },
};
</script>

<style scoped>
.standart-build {
  pointer-events: none;
  position: relative;
  width: 40px;
  height: 40px;
  background-color: brown;

  z-index: 5;
  border: 1px dotted rgb(39, 6, 6);
}

.left-wall {
  position: absolute;
  width: 40px;
  height: 20px;
  background-color: green;
  transform-origin: bottom;
  transform: skewX(45deg) translateY(20px) translateX(-20px);
  z-index: 10;
  border: 1px dotted rgb(39, 6, 6);
  background: url("../../assets/wall.png") left / cover no-repeat;
}

.right-wall {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: green;
  transform-origin: right;
  transform: skewY(45deg) translateX(20px) translateY(-20px);
  z-index: 10;
  border: 1px dotted rgb(39, 6, 6);
  background: url("../../assets/wall_rotated.png") left / 200% 200% no-repeat;
}

.back-left-wall {
  position: absolute;
  width: 20px;
  height: 40px;
  background-color: rgb(4, 58, 4);
  transform-origin: left;
  transform: skewY(45deg) translateX(-20px) translateY(0px);
  z-index: 5;
  border: 1px dotted rgb(39, 6, 6);
  background: url("../../assets/wall_rotated.png") left / cover no-repeat;
}

.back-right-wall {
  position: absolute;
  width: 40px;
  height: 20px;
  background-color: rgb(4, 58, 4);
  transform-origin: top;
  transform: skewX(45deg) translateX(0px) translateY(-20px);
  z-index: 5;
  border: 1px dotted rgb(39, 6, 6);
  background: url("../../assets/wall.png") left / cover no-repeat;
}

.celling {
  opacity: 0.5;
  background-color: black;
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translate(-20px, -20px);
  z-index: 11;
}
</style>
