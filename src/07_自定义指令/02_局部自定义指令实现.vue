<template>
  <div>
    <input type="text" style="margin: 20px; padding: 5px;" v-focus>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>