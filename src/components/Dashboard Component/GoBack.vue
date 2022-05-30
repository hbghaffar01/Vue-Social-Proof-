<template>
  <span class="go-back">
      <ul>
      <li @click="goBack"><i class="fa-solid fa-arrow-left"></i>Go Back</li>
      </ul>
  </span>
</template>

<script>
export default {
    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    }
}
</script>

<style>
.go-back{
    display: flex;
    cursor: pointer;
    float: right;
    margin-top: 2rem;
    margin-right: 2rem;
    background: none;    
}
li{
    list-style: none;
    color: #2BA8F5;
}
li i{
    font-size: 12px;
    position: relative;
    right: 5px;
    top: -1px;
}
ul:hover{
    opacity: .7;
}
</style>