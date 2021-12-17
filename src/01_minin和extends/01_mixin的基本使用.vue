<template>
  <div>
    <div>{{message}}</div>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import demoMixin from "./mixins/demoMixin";

export default {
  mixins: [ demoMixin ],
};
</script>

<style lang="scss" scoped>

</style>