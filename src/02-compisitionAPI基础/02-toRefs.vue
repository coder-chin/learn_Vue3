<template>
  <div>
    <h2>{{name}}--{{age}}</h2>
  </div>
</template>

<script>import { reactive, toRefs, toRef } from "vue";

export default {
  //setup函数有哪些参数？ 有什么样的返回值
  setup(props, context) {
    const info = reactive({name: 'qhy', age: 18})
    let { age } = toRefs(info)
    let name = toRef(info, "name")

    const changeAge = () => {
      info.age++
    }

    return {
      name,
      age,
      changeAge
    }
  }
};
</script>

<style lang="scss" scoped>
</style>