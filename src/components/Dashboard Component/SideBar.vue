<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
      <img src="@/assets/logo3.webp" class="collapsed-logo" alt="">
      </span>
      <span v-else>
          <img src="@/assets/logo.svg" class="collapsed-logo-open"  alt="">
          <hr>
      </span>
    </h1>

    <sidebarLinks to="/" icon="fas fa-home">Home</sidebarLinks>
    <sidebarLinks to="/dashboard" icon="fas fa-columns">Dashboard</sidebarLinks>
    <sidebarLinks to="/analytic" icon="fas fa-chart-bar">Analytics</sidebarLinks>
    <sidebarLinks to="/friend" icon="fas fa-users">Friends</sidebarLinks>
    <sidebarLinks to="/image" icon="fas fa-image">Images</sidebarLinks>
    <sidebarLinks to="" icon="fas fa-arrow-right-from-bracket" @click="$store.dispatch('logout')">Logout</sidebarLinks>

    <div class="outer-radius">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </div>
</div>

</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from '@/store/sidebar'
import sidebarLinks from './sidebarLinks.vue'


export default {
  props: {},
  components: {
    sidebarLinks,
},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>



<style>
:root {
  --sidebar-bg-color: #000B42;
  --sidebar-item-hover: #fff;
  --sidebar-item-active: #2BA8F5;
}
</style>

<style scoped>
hr{
  width: 95%;
}
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
.sidebar .collapsed-logo{
    width: 35px;
    border-radius: 50px;
    transform: rotate(-20deg);
}
.sidebar .collapsed-logo-open{
    padding: 5px;
}
.collapse-icon {
  position: absolute;
  top: 3.8rem;
  /* padding: 0.75em; */
  background: var(--sidebar-item-active);
  color: #fff;
  width: 23px;
  border-radius: 100%;
  right: 0;
  margin-right: -13px;
  transition: 0.2s linear;
}
.fa-angle-right{
  position: relative;
  left: 8.5px;
  top: -2px;
  font-size: 13px;
}
.fa-angle-right:hover{
  top: -3px;
  left: 9px;
  font-size: 10px;
  color: var(--sidebar-bg-color);
  transition: 0.5s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
