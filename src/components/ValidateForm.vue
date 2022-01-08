<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="button" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
// using ES6 modules
import mitt from 'mitt'
export const emitter = mitt()
type ValidateFun = () => boolean

export default defineComponent({
  // Pascal 命名方式
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    let funArr: ValidateFun[] = []
    const submitForm = (): void => {
      const ret = funArr.map(func => func()).every(result => result)
      context.emit('form-submit', ret)
    }
    const callback = (func: ValidateFun) => {
      funArr.push(func)
      return true
    }

    emitter.on('form-item-created', callback)

    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funArr = []
    })
    
    return {
      submitForm
    }
  }
})
</script>

<style scoped>

</style>