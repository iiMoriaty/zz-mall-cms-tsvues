<template>
  <div class="nav-header">
    <el-icon :size="size">
      <component class="fold-menu" :is="icon" @click="handleFoldClick" />
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    UserInfo,
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const size = ref(20)
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据
    const store = useStore()
    const userMenus = store.state.login.userMenus
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    // 判断显示折叠还是展开的图标
    // component的is属性只能接收一个确定的值，不能接收表达式，比如三目运算
    const icon = computed(() => {
      if (isFold.value) {
        return 'Expand'
      } else {
        return 'Fold'
      }
    })

    return {
      isFold,
      handleFoldClick,
      icon,
      size,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
