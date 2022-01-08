<template>
  <div>
    <h1 @click="add">{{count}}</h1>
    <h1>{{double}}</h1>
    <h2>X: {{x}}</h2>
    <h2>Y: {{y}}</h2>
    <h1 v-if="loading">Loading...</h1>
    <img :src="result.message" v-else>
    <li v-for="item in numbers" :key="item">{{item}}</li>
  </div>
</template>

<script>
import { ref, computed, reactive, toRefs, onUpdated,
onRenderTracked, onRenderTriggered, watch, onMounted } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'

export default {
  name: "App",
  setup() {
    // setup 准备的意思 没有this
    onMounted(() => {
      console.log('mounted')
    })
    onUpdated(() => {
      console.log('update')
    })
    
    const data = reactive({
      count: 0,
      add: () => { data.count++ },
      double: computed( () => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    const refData = toRefs(data)

    const greetings = ref('')
    document.title = "title" + greetings.value

    watch(greetings, (newValue, oldValue) => {
      document.title = "title" + greetings.value
    })

    // let count = ref(0)
    // let add = () => {
    //   count.value++
    // }
    // let double = computed(() => {
    //   return count.value * 2
    // })
    const { x, y } = useMousePosition()
    const {  result, loading, loaded } = useURLLoader('https://dog.ceo/api/breeds/image/random')

    return {
      ...refData,
      x,
      y,
      result, 
      loaded,
      loading
      // count,
      // add,
      // double
    }
  }
}
</script>

<style scoped>

</style>