<template>
  <div>
    <input type="text" v-model="message">
    {{message}}
  </div>
</template>

<script>
import useDebounce from './hook/useDebounce'
export default {
  setup() {
    const message = useDebounce('hello ref')
  
    return {
      message
    }
  }
}
</script>

<style lang="scss" scoped>
</style>