<template>
<nav v-if="$store.state.user">
  </nav>
  <sideBar />
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import SideBar from '@/components/Dashboard Component/SideBar.vue'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
  //components
  components: {
    SideBar,
  }
}
</script>

<style scoped>
</style>