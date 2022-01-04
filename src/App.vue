<template>
  <div>
    <h1 @click="add">{{count}}</h1>
    <h1>{{double}}</h1>
    <h2>X: {{x}}</h2>
    <h2>Y: {{y}}</h2>
    <h1 v-if="loading">Loading...</h1>
    <img :src="result[0].url" v-else>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, onUpdated, watch, onMounted } from 'vue'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'
interface DataProps {
  count: number;
  double: number;
}
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}

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
    const data: DataProps = reactive({
      count: 0,
      add: () => { data.count++ },
      double: computed( () => data.count * 2),
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
    // const {  result, loading, loaded } = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
    const { result, loading, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if(result.value) {
        console.log('value', result.value[0].url)
      }
    })

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