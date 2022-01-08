<template>
  <div>
    <home></home>
    <about></about>
  </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
export default {
  components: {
    Home,
    About
  },
  provide: {
    name: 'why',
    age: 18
  }
};
</script>

<style scoped>

</style>