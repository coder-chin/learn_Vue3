<template>
  <div>
    <h2>App传来的参数 {{message}}</h2>
    <h1>不是相适应的setup返回  {{title}}</h1>
    <!-- 在模板当中使用ref对象，会自动解包 -->
    <!-- ref的解包只能是浅层解包 -->
    <h3 @click="refIncrement">ref {{counter}}</h3>
    <h3 @click="increment">reactive {{state.counter}}</h3>
    <button @click="updateState">修改readonly</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from 'vue'
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  //setup函数有哪些参数？ 有什么样的返回值
  setup (props, context) {
    const state = reactive({
      counter: 100
    })  //react必须传入对象或者数组

    //如果是基本数据类型，用ref API
    let counter = ref(200)   //counter变成了一个ref可响应式的引用
    // 模板会解包，setup中不会解包

    // props 父组件传递过来的属性
    // console.log(props.message)
    const info = { name: 'qhy' }
    const readonlyInfo = readonly(info)

    const updateState = () => {
      readonlyInfo.name = 'chin'
    }

    const refIncrement = () => {
      counter.value++
      console.log(counter.value)
    }

    const increment = () => {
      state.counter++
      console.log(state.counter)
    }

    return {
      title: 'Hello Home',
      counter,
      state,
      increment,
      refIncrement,
      updateState
    }
  }
}
</script>

<style lang="scss" scoped>

</style>