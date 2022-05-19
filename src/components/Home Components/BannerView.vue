<template>
<section class="banner-section">

    <div class="banner-row">
      <div class="col-lg-6 text-section">
          <div class="content" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
          <h2>Influencers and Creators</h2>
          <p class="paragraph">Save time and money finding the right sponsorship!
             Our algorithm analyzes your follower insights to find
             the most applicable brands for your audience.
          </p>
          <div class="banner-button">

              <router-link to="authenticate"
                        class="nav-item"
                        exact
                        >
                        <button class="btn freeProfile" type="submit">Create A Free Profile</button>
                        </router-link>
          
          </div>
      </div>
      </div>
    </div>

      <div class="col-lg-6 img-section">
          <div class="image-section">
              <img src="@/assets/banner.svg" alt="human">
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
.banner-section{
    display: flex;
}
.banner-row{
    display: flex;
    padding-left: 40px !important;
    flex-direction: column;
    justify-content: center;
}
.text-section{
    width: auto;
    position: relative;
    z-index: 2;
    margin-left: auto;
    left: auto;
    top: auto;
}
.content h2{
    color: #ffffff;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 15px;
}
.content p{
    color: #ffffff !important;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.02em;
    font-family: 'Poppins', sans-serif;
    margin: 0px !important;
}
.banner-button{
    margin-top: 2rem;
}
.banner-button .freeProfile{
    background-color: #fff;
    color: slategrey !important;
    border: 0px !important;
    padding: 15px 40px !important;
    border-radius: 0;
    text-transform: capitalize;
    box-shadow: none !important;
}
.freeProfile:hover {
    opacity: .9;
}
.image-section{
    padding: 0px 0px 0px 36px;
}
.image-section img{
    width: 100%;
    max-width: none;
    z-index: 1;
    position: relative;
    display: block;
    position: relative;
    bottom: -10rem !important;
}


@media screen and (max-width: 1024px){
    .banner-section{
       height: 700px;
    }
    .banner-row{
        padding-left: 70px !important;
    }
    .content h2 {
        font-size: 34px;
    }
    .image-section img{
        position: relative;
        bottom: -20rem !important;
    }
}
@media screen and (max-width: 990px){
    .image-section img {
        bottom: -25rem !important;
}
}
@media screen and (max-width: 768px){
    .banner-section {
        height: 650px;
    }
    .image-section {
        display: none;
    }
    .banner-row{
        padding-left: 40px !important;
    }
    .banner-row::before{
        content: '';
        background-image: url(@/assets/banner.svg);
        background-size: cover;
        position: absolute;
        top: 5rem;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.2;
    }
}
@media screen and (max-width: 768px){
    .banner-section {
        height: 490px;
        width: 100%;
    }
    .text-section{
        margin-top: 5rem;
    }
    .content h2 {
    font-size: 25px;
    margin-bottom: 0px;
}
.banner-button{
    margin-top: 1rem;
}
}
</style>