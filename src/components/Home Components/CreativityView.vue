<template>
  <section class="creativity-banner">
      <div class="container">
          <div class="row g-0 creativity-row">
              <div class="col-lg-6 creativity-text mb-5" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                  <div class="creativity-h1">
                      <h1>Compensating Creativity</h1>
                  </div>
                  <div class="creativity-para">
                      <p>Monetize your creativity and influence by promoting things you love and stand behind! Don’t sell your influence short with flat pricing posts; With Social Proof, the better your content performs, the more you earn!</p>
                  </div>
                  <div class="creativity-button">

                      <router-link to="authenticate"
                        class="nav-item"
                        exact
                        >
                        <a href="#" v-if="!auth.currentUser">Sounds Good, I Want to Join</a>
                        <a href="#" v-else>See what you Got!</a>
                        </router-link>
                      
                  </div>
              </div>

              <div class="creative-img col-lg-6" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                  <img src="@/assets/creative.svg" alt="">
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import AOS from 'aos'
import { auth } from '@/includes/firebase'


export default {
    setup() {
         AOS.init();
         return{
             auth
         }
     }
}
</script>

<style>
.creativity-row{
    padding-left: 50px;
}
.creativity-text{
    margin-top: 5rem;
}
.creativity-h1{
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: #332F2E;
}
.creativity-para p{
    margin-top: 1rem;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: black!important;
    display: inline-block;
    text-align: left;
}
.creativity-button a{
    margin-top: 0px !important;
    display: inline-block;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #3dadf3;
    text-decoration: none;
}
.creativity-button a:hover{
    color: #0684d2;
}
.creativity-banner {
    background-color: #fff;
}
.creative-img img{
    width: 80%;
}


@media screen and (max-width: 990px){
    .creativity-row {
    flex-direction: column-reverse;
}
.creativity-text {
    margin-top: 0rem;
    text-align: center;
}
}
@media screen and (max-width: 768px){
.creativity-row {
    padding-left: 0px;
}
.creativity-img{
    margin-bottom: 0rem !important;
}
.creativity-img img{
    width: 100%;
}
.creativity-text{
    padding-left: 20px;
    padding-right: 20px;
}
}
</style>