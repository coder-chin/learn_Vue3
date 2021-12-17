<template>
  <div>
    {{title}}
    <button @click="bar">button</button>
  </div>
</template>

<script>
import BasePageVue from "./BasePage.vue";
export default {
  extends: BasePageVue
};
</script>

<style lang="scss" scoped>
</style>