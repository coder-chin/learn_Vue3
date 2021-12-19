<template>
  <div>
    <h2 @click="changeName"> {{ name }} </h2>
    <h2 @click="changeAge"> {{ age }} </h2>
  </div>
</template>

<script>
// watchEffect 自动收集依赖
import { ref, computed, watchEffect } from "vue";
export default {
  setup() {
    const name = ref("Howie");
    const age = ref(18);

    const changeName = () => (name.value = "chin");
    const changeAge = () => age.value++;

    // 刚开始就会立即执行，收集依赖
    watchEffect( () => {
      console.log('name', name.value);
    })

    return {
      name,
      age,
      changeAge,
      changeName
    };
  },
};
</script>

<style lang="scss" scoped>
</style>