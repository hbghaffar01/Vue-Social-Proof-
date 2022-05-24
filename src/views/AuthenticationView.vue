<template>
  <div class="Authentication-form">
    <RegisterPage />
  </div>
</template>

<script>
import RegisterPage from '@/components/Authentication Component/RegisterPage.vue';
import LoginView from '@/components/Authentication Component/LoginView.vue';
import SingUp from '@/components/Authentication Component/SingUp.vue';
export default {
    components: { RegisterPage, LoginView, SingUp },
}
</script>

<style>

</style>