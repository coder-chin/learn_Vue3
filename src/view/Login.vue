<template>
  <div>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="email">邮箱地址</label>
        <validate-input 
          type='text'
          placeholder='请输入邮箱地址'
          :rules="emailRules"
          v-model="emailVal"
          id="email"
          ref="inputRef"
          ></validate-input>
      </div>
      <div class="mb-3">
        <label for="pwd">密码</label>
        <validate-input 
          type='password'
          placeholder='请输入密码'
          :rules="passwordRules"
          v-model="passwordVal"
          id="pwd"
          ></validate-input>
          <div class="form-text">
            <a href="/signup" class="">还没有账户？去注册一个新的吧!</a>
          </div>
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large w-100">登录</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RuleProps } from '../components/ValidateInput.vue'

export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const inputRef = ref<any>()
    const emailVal = ref('')
    const passwordVal = ref('')
    const emailRules: RuleProps = [
      { type: 'required', message: '电子邮件地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮件格式' }
    ]
    const passwordRules: RuleProps = [
      { type: 'required', message: '密码不能为空' }
    ]
    const onFormSubmit = (result: boolean) => {
      if(result) {
        router.push('/')
        store.commit('login')
      }
    }

    return {
      emailVal,
      passwordVal,
      emailRules,
      passwordRules,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

<style scoped>

</style>