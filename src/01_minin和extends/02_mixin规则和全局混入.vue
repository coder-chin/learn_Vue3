<template>
  <div>
    {{message}}
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import demoMixin from "./mixins/demoMixin";
export default {
  mixins: [demoMixin],
  data() {
    return {
      message: "Hello App" 
    };
  },
  methods: {
    foo() {
      console.log("exe app foo");
    },
  },
  created() {
    console.log("exe App created");
  },
};
</script>

<style lang="scss" scoped>
</style>