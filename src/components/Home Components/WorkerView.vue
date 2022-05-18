<template>
  <section class="worker-section">
      <div class="container">
          <div class="row worker-row">
              <div class="col-lg-12 worker-area">

                   <div class="worker-text ">
                       <div class="worker-img">
                           <img src="@/assets/worker.jpg" alt="">
                       </div>
                       <div class="worker-h1">
                           @Tony Heally
                       </div>

                       <div class="worker-animation" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                       <div class="worker-para">
                           <p>Working with Social Proof has been both profitable and a pleasure to work with. They take the time to find relevant campaigns that followers actually appreciate and engage with. Campaigns are easy to run, payments are prompt, and communication is excellent!</p>
                       </div>

                       <div class="worker-links">
                           <ul>
                               <li>
                                   <a href="#">
                                       <img src="@/assets/fb.svg" alt="">
                                   </a>
                               </li>
                               <li>
                                   <a href="#">
                                       <img src="@/assets/insta.svg" alt="">
                                   </a>
                               </li>
                               <li>
                                   <a href="#">
                                       <img src="@/assets/twitter.svg" alt="">
                                   </a>
                               </li>
                           </ul>
                       </div>
                    </div>

                </div>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
import AOS from 'aos'


export default {
    setup() {
         AOS.init();
     }
}
</script>

<style>
.worker-row {
    padding-left: 70px;
    padding-right: 70px;
}
.worker-section {
    background-color: #fff;
}
.worker-area {
    width: 100%;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 4px 24px rgb(0 0 0 / 10%);
    padding: 0 0 0 36px;
    margin: 8rem 0 8rem 0;
    position: relative;
}
.worker-text::before{
    content: "";
    width: 109px;
    height: 89px;
    position: absolute;
    left: 3rem;
    margin-top: -9rem;
    z-index: 2 !important;
    background-image: url(@/assets/comma.svg);
    background-repeat: no-repeat;
}
.worker-text::after {
    content: "";
    width: 129px;
    height: 129px;
    position: absolute;
    right: -50px;
    margin-top: 0rem;
    z-index: 4 !important;
    background-image: url(@/assets/circle.svg);
    background-repeat: no-repeat;
}
.worker-text{
    text-align: center;
    box-sizing: border-box;
    display: block;
    padding: 80px 80px;
    position: relative;
}
.worker-img img{
    width: 106px;
    height: 106px;
    border-radius: 100px;
    margin: auto;
    border: solid 3px #ffffff;
}
.worker-text .worker-h1{
    font-size: 22px;
    line-height: 21px;
    color: #2BA8F5;
    font-family: 'Poppins', sans-serif;
    margin-top: 36px;
}
.worker-text .worker-para p{
    font-size: 32px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #413434 !important;
    font-weight: normal;
    padding-top: 1rem;
}
.worker-text .worker-links{
    text-align: center;
    justify-content: center;
}
.worker-text .worker-links ul{
    text-align: center;
    display: flex;
    justify-content: center;
}
.worker-text .worker-links ul li{
    list-style: none;
}
.worker-text .worker-links ul li a {
    padding: 0 15px;
}



/* media query  */
@media screen and (max-width: 1024px){
    .worker-area{
        padding: 0 0 0 0px;
    }
    .worker-text .worker-para p {
    font-size: 25px;
    line-height: 32px;
}
}
@media screen and (max-width: 768px){
    .worker-row {
    padding-left: 20px;
    padding-right: 20px;
}
    .worker-area{
        padding: 0 0 0 0px;
    }
    .worker-text .worker-para p {
    font-size: 20px;
    line-height: 26px;
}
.worker-text .worker-h1 {
    font-size: 16px;
    line-height: 10px;
    margin-top: 15px;
}
}
@media screen and (max-width: 500px){
    .worker-row {
    padding-left: 40px;
    padding-right: 40px;
}
}
@media screen and (max-width: 376px){
    .worker-row {
    padding-left: 30px;
    padding-right: 30px;
}
.worker-text .worker-para p {
    font-size: 14px;
    line-height: 16px;
}
}
</style>