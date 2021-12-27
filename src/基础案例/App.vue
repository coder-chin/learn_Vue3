<template>
  <div>
    <h1 @click="add">{{count}}</h1>
    <h1>{{double}}</h1>
    <li v-for="item in numbers" :key="item">{{item}}</li>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue'
export default {
  name: "App",
  setup() {
    // setup 准备的意思 没有this
    const data = reactive({
      count: 0,
      add: () => { data.count++ },
      double: computed( () => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    const refData = toRefs(data)

    // let count = ref(0)
    // let add = () => {
    //   count.value++
    // }
    // let double = computed(() => {
    //   return count.value * 2
    // })

    return {
      ...refData
      // count,
      // add,
      // double
    }
  }
}
</script>

<style scoped>

</style>