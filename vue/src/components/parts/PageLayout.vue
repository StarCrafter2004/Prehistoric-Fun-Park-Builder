<template>
  <div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
  box-sizing: border-box;
}
</style>
