<template>
  <div>
    <Home message="hello"></Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  //setup函数有哪些参数？ 有什么样的返回值
  setup(props, context) {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>