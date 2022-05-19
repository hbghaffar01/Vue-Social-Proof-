<template>
  <router-view/>
  <nav>
    <router-link to="/home"></router-link> |
    <router-link to="/about"></router-link>
    <router-link to="/started"></router-link>
    <router-link to="/authenticate">Sign In</router-link>
  </nav>
</template>

<style lang="scss">
nav{
  color: rgb(0, 0, 0) !important;
  list-style: none;
  text-decoration: none;
}
</style>
