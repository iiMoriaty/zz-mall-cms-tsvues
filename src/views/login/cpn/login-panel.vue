<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <!-- 账号登录标签页 -->
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span class="content">账号登录</span>
          </span>
        </template>
        <!-- 账号登录组件 -->
        <!-- ref="accountRef"进行组件绑定，就可以取到这个组件 -->
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <!-- 手机登录标签页 -->
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span class="content">手机登录</span>
          </span>
        </template>
        <!-- 手机登录组件 -->
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },

  setup() {
    const isKeepPassword = ref(false)
    // ref是一个对象，但这个对象是一个值，相当于ref:{}
    // 很难定义这个对象的类型
    // 可以通过InstanceType<typeof LoginAccount>的技巧获得类型
    // InstanceType是实例
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        console.log('立即登录')
        // accountRef.value取得这个组件
        // accountRef.value?.loginAction()取得这个组件的方法
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('phoneRef调用loginAction')
      }
    }

    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      phoneRef,
      currentTab
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 120px;
  width: 320px;

  .title {
    text-align: center;
  }

  .content {
    padding-left: 5px;
  }
}

.account-control {
  display: flex;
  justify-content: space-between;
}

.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
