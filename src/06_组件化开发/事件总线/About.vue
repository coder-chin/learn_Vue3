<template>
  <div>
    <button @click="btnClick">BTUUON</button>
  </div>
</template>

<script>
  import emitter from './eventbus'
  export default {
    methods: {
      btnClick() {
        emitter.emit('foo', 123)
      }
    }
  }
</script>

<style scoped>

</style>