<template>
  <button @click="increasement" class="bg-clip-border p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">+1</button>
  <home></home>
</template>

<script>
import { ref, provide, readonly } from 'vue';
import Home from './Home.vue'

export default {
  components: {
    Home
  },
  setup() {
    const name = ref('chin')
    const age = ref(18)
    
    provide('name', readonly(name))
    provide('age', readonly(age))

    const increasement = () => age.value++

    return {
      increasement
    }
  }
};
</script>

<style scoped>

</style>