<template>
  <div>
    {{name}}--{{age}}
  </div>
</template>

<script>
  import emitter from './eventbus'
  export default {
    inject: ['name', 'age'],
    setup() {
      emitter.on('foo', (info) => {
        console.log(info)
      })
    }
  }
</script>

<style scoped>

</style>