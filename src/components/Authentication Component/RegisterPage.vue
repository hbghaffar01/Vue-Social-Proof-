<template>
<section class="authentication-from">
  <div class="container">
    <div class="row g-0">

      <!-- image part -->
      <div class="col-lg-6 col-md-0 col-sm-0 image-area">
          <div class="logo-img">
            <img src="@/assets/logo.svg" alt="">
          </div>
          <div class="slider">
          <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                }"
                :pagination="{
                  clickable: true,
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide class="heading">
                  <h1>Some Intersting Things About us</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing varius et nam massa donec congue tellus suscipit. In eget feugiat dolor sit quisque id elementum ultrices duis. Lorem amet ullamcorper nibh venenatis.</p>
                </swiper-slide>
                
                <swiper-slide class="heading">
                <h1>Some Intersting Things About us</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing varius et nam massa donec congue tellus suscipit. In eget feugiat dolor sit quisque id elementum ultrices duis. Lorem amet ullamcorper nibh venenatis.</p>    
                </swiper-slide>

                <swiper-slide class="heading">
                  <h1>Some Intersting Things About us</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing varius et nam massa donec congue tellus suscipit. In eget feugiat dolor sit quisque id elementum ultrices duis. Lorem amet ullamcorper nibh venenatis.</p>
                </swiper-slide>
                
                <swiper-slide class="heading">
                <h1>Some Intersting Things About us</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing varius et nam massa donec congue tellus suscipit. In eget feugiat dolor sit quisque id elementum ultrices duis. Lorem amet ullamcorper nibh venenatis.</p>    
                </swiper-slide>
      </swiper>
      </div>
      </div>
      <!-- form part -->
      <div class="col-lg-6 col-md-12 col-sm-12 form-area">

          <div class="header">
              <h6>Welcome to Social Proof & Let’s Get Started</h6>
            </div>


          <div class="transition">
          <transition-group name="fade" :key="1" mode="in-out">  
          <SingUp v-if="open" />
          <LoginView v-else />
          </transition-group>

            <div class="SignIn-text" v-if="!clicked === open">
                  <p>Don't have an account?
                    <a href="#" @click="open = !open">Register</a>
                    </p>
                </div>
            <div class="SignIn-text" v-else>
                  <p> Have an account?  
                    <a href="#" @click="open = !open">Log In</a>
                    </p>
                </div>
          </div>      

          <div class="list">
              <ul>
                <li>Terms and conditions</li>
                <li>Privacy</li>
                <li>Contact</li>
              </ul>
            </div>
            
        </div>
      </div>
    </div>
</section>
</template>

<script>
import SingUp from '@/components/Authentication Component/SingUp.vue';
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination} from "swiper";
import LoginView from './LoginView.vue';


export default {
  components: {
    Swiper,
    SwiperSlide,
    SingUp,
    LoginView
},
  setup() {
   const open = ref(true);
   const clicked = ref(true);
    return {
      clicked,
      open,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style scoped>
.authentication-from{
  display: flex;
  justify-content: flex-end;
  background-color:#fff;
  overflow: hidden !important;
  scroll-behavior: inherit;
}
.container{
  overflow: hidden !important;

}
.row{
  width: 100%;
  padding: 0px 100px 0px 100px;
}
.image-area{
  z-index: 1;
}
.logo-img img{
  position: absolute;
  top: 4rem;
  margin-left: 2.5rem;
  width: 7rem;
}
.slider{
  content: '';
  background-image: url(@/assets/rectangle.png);
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 577px;
  z-index: 1;
}
.heading{
  padding: 0 40px 0 40px;
  text-align: center;
  margin-top: 30rem;
}
.heading p{
  margin-bottom: 2rem !important;
  
}
h1{
  color: #fff;
  font-size: 12px;
  line-height: 13px;
}
p{
  color: #fff;
  font-size: 10px;
  line-height: 13px;
}

/* from area  */
.form-area{
  border: .1px solid rgb(244, 242, 242);
}
.header{
  position: relative;
  left: 2rem;
  top: 10px;
}
.header h6{
  font-size: 14px;
  margin-bottom: 1.7rem;
  margin-top: 1rem;
}
/* transition */
.fade-enter-active {
  transition: all 1s ease-out;
}

.fade-leave-active {
  transition: 0 cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from{
  transform: translateX(-10px);
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
/* transition end */


.SignIn-text p{
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.37);
  text-align: center;
  position: relative;
  bottom: -10px;
}
.SignIn-text p a{
  text-decoration: none;
}
.list{
  position: relative;
  top: 1rem;
  left: -1rem;
}
.list ul{
  text-align: center;
  display: flex;
  text-decoration: none;
  list-style: none;
}
.list ul li{
  flex: auto;
  font-size: 12px;
  color: #7A7A7A;
  cursor: pointer;
}

@media screen and (max-width: 600px){
  .row {
    width: 100%;
    padding: 0px !important;
  }
}

@media screen and (max-width: 426px){
  .image-area {
    display: none !important;
}
.form-area{
  content: '';
  background-image: url(@/assets/rectangle.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}

.SignIn-text p {
    color: #fff;
}
.list ul li {
    color: #fff;
}
}
@media screen and (max-width: 321px){
  .header h6 {
        margin-left: -1.5rem;
}
}
</style>