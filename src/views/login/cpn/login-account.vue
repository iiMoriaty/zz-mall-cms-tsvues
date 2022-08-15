<template>
  <div class="login-account">
    <!-- rules是规则 -->
    <!-- :model="account"，把最新的值给rules -->
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <!-- 一个el-from-item是一个输入框 -->
      <!-- label是输入框前面的文字 -->
      <!-- 给rules提供prop的值，让它知道这里是name -->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'

import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    // 取得表单组件
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      // validate()判断表单的验证是否全部通过
      // valid的值是一个boolean
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2.开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
