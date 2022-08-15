<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          class="avatar"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="Circle-close" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item icon="Tickets" divided>用户信息</el-dropdown-item>
          <el-dropdown-item icon="Setting">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    return {
      name,
      handleExitClick
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.avatar {
  margin-right: 10px;
}
</style>
