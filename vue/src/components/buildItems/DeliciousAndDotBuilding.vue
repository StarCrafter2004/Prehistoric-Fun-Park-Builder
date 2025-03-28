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
  width: 80px;
  height: 120px;
  background-color: brown;
  transform: translate(-40px, -40px);
  z-index: 5;
  border: 1px dotted rgb(39, 6, 6);
}

.left-wall {
  position: absolute;
  width: 80px;
  height: 40px;
  background-color: green;
  transform-origin: bottom;
  transform: skewX(45deg) translateY(80px) translateX(-80px);
  z-index: 10;
  border: 1px dotted rgb(39, 6, 6);
  background: url("../../assets/wall.png") left / cover no-repeat;
}

.right-wall {
  position: absolute;
  width: 40px;
  height: 120px;
  background-color: green;
  transform-origin: right;
  transform: skewY(45deg) translateX(40px) translateY(-40px);
  z-index: 10;
  border: 1px dotted rgb(39, 6, 6);
  background: url("../../assets/DaD.png") center / 100% 100% no-repeat;
}

.back-left-wall {
  position: absolute;
  width: 40px;
  height: 120px;
  background-color: rgb(4, 58, 4);
  transform-origin: left;
  transform: skewY(45deg) translateX(-40px) translateY(0px);
  z-index: 5;
  border: 1px dotted rgb(39, 6, 6);
  background: url("../../assets/wall_rotated.png") left / cover no-repeat;
}

.back-right-wall {
  position: absolute;
  width: 80px;
  height: 40px;
  background-color: rgb(4, 58, 4);
  transform-origin: top;
  transform: skewX(45deg) translateX(0px) translateY(-40px);
  z-index: 5;
  border: 1px dotted rgb(39, 6, 6);
  background: url("../../assets/wall.png") left / cover no-repeat;
}

.celling {
  background-color: gray;
  position: absolute;
  width: 80px;
  height: 120px;
  transform: translate(-40px, -40px);
  z-index: 11;
}
</style>
