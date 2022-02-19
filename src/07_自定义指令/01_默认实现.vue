<template>
  <div>
    <input type="text" ref="input" style="margin: 20px; padding: 5px;">
    <!-- 绑定ref不需要加： -->
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  setup () {
    const inputRef = ref(null)

    onMounted(() => {
      inputRef.value.focus()
    })

    return {
      input: inputRef
    }
  }
}
</script>

<style lang="scss" scoped>

</style>