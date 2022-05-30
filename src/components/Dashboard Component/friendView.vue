<template>
  <GoBack />
  <h1>
      welcome to friend section
  </h1>
  <sideBar />
</template>

<script>
import SideBar from './SideBar.vue'
import GoBack from './GoBack.vue'

export default {
    components: {
    SideBar,
    GoBack
}
}
</script>

<style>
h1{
  text-align: center;
}
</style>