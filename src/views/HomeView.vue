<template>
  <div class="home">
    <main>
    <div class="color">
      <NavbarView />
      <BannerView />
    </div>
    <SponsorshipView />
    <CreativityView />
    <EarnView />
    <WorkerView />
    <SliderView />
    <FaqView />
    <FourView />
    <PartnerView />
    <FooterView />
    
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/Home Components/NavbarView.vue'
import BannerView from '@/components/Home Components/BannerView.vue'
import SponsorshipView from '@/components/Home Components/SponsorshipView.vue'
import CreativityView from '@/components/Home Components/CreativityView.vue'
import EarnView from '@/components/Home Components/EarnView.vue'
import WorkerView from '@/components/Home Components/WorkerView.vue'
import SliderView from '@/components/Home Components/SliderView.vue'
import FaqView from '@/components/Home Components/FaqView.vue'
import FourView from '@/components/Home Components/FourView.vue'
import PartnerView from '@/components/Home Components/PartnerView.vue'
import FooterView from '@/components/Home Components/FooterView.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarView,
    BannerView,
    SponsorshipView,
    CreativityView,
    EarnView,
    WorkerView,
    SliderView,
    FaqView,
    FourView,
    PartnerView,
    FooterView
}
}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  box-sizing: border-box;
}
.color{
  background: rgb(2,0,36) !important;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(18,9,121,1) 120%) !important;
}
</style>