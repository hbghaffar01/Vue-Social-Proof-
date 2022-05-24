<template>
  <router-view v-slot="{ Component,route }">
      <transition 
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
      mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

  <nav>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/started"></router-link>
    <router-link to="/authenticate"></router-link>
  </nav>
</template>

<script>
import 'animate.css';
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {

  components: {
    created() {
      this.$store.dispatch('init_login');
    }
  },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
nav{
  color: rgb(0, 0, 0) !important;
  list-style: none;
  text-decoration: none;
}
</style>
