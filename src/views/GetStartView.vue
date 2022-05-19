<template>
  <div class="home">
    <main>
    <div class="color">
      <NavbarView />
      <BannerView />
    </div>
    <FaqView />
    <FooterView />
    </main>
  </div>
</template>

<script>
import NavbarView from '@/components/Home Components/NavbarView.vue'
import BannerView from '@/components/Home Components/BannerView.vue'
import FaqView from '@/components/Home Components/FaqView.vue'
import FooterView from '@/components/Home Components/FooterView.vue'

export default {
  name: 'GetStarted',
  components: {
    NavbarView,
    BannerView,
    FaqView,
    FooterView
    
  }
}
</script>

<style scoped>
.color{
  padding-bottom: 5rem;
}
</style>