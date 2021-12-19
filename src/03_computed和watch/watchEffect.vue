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

    // 刚开始就会立即执行，收集依赖
    // 返回一个函数，可以停止侦听
    const stop = watchEffect( () => {
      console.log('name', name.value);
      console.log('age', age.value);
    })

    const changeName = () => name.value = "chin"
    const changeAge = () => {
      age.value++
      if(age.value > 25) stop()
    }

    return {
      name,
      age,
      changeAge,
      changeName
    }
  },
};
</script>

<style lang="scss" scoped>
</style>