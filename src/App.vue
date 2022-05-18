<template>
  <router-view/>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">Influencer</router-link>
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
