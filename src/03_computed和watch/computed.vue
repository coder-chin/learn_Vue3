<template>
  <div>
    <h2>{{fullName}}</h2>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const firstName = ref('Howie')
    const lastName = ref('Chin')

    // computed 返回的是一个ref对象
    // const fullName = computed( () => firstName.value + lastName.value )
    const fullName = computed({
      get: () => firstName.value + lastName.value,
      set: (newValue) => {}
    })



    return {
      fullName
    }
  }
}
</script>

<style lang="scss" scoped>
</style>