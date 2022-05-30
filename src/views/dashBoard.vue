<template>
<!-- <nav v-if="$store.state.user">
  </nav> -->
  <sideBar />
  <MainPage />
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import SideBar from '@/components/Dashboard Component/SideBar.vue'
import MainPage from '@/components/Dashboard Component/MainPage.vue'

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
    MainPage
  }
}
</script>

<style scoped>
template{
  background-color: #F6F7F8;
}
</style>