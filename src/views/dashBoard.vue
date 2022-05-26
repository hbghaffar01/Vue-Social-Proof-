<template>
  <div>
      <h1>Welcome to dashborad</h1>
  </div>

  <nav v-if="$store.state.user">
    <button @click="$store.dispatch('logout')">Logout</button>
  </nav>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'


export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

    

  }
}
</script>

<style>

</style>