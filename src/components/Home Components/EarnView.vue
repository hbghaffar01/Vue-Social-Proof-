<template>
  <section class="earn-banner">
      <div class="container">
          <div class="row g-0 earn-row">
              <div class="earn-img col-lg-6" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                  <img :src="earn" alt="">
              </div>

              <div class="col-lg-6 earn-text" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                  <div class="earn-h1">
                      <h1>Retain Earnings</h1>
                  </div>
                  <div class="earn-para">
                      <p>Our programmatic platform facilitates campaigns autonomously. Resulting in no back and forth client communication and no costly operating or manager fees eating away at your earnings!</p>
                  </div>
                  <div class="earn-button">

                      <router-link to="authenticate"
                        class="nav-item"
                        exact
                        >
                        <a href="#" v-if="!auth.currentUser">Create an Account and Start Earning</a>
                        <a href="#" v-else>Ready To Earn? </a>
                        </router-link>
                      
                  </div>
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
             auth,
			 earn: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/earn.svg?alt=media&token=6110eccc-73c7-4fbe-847a-21a0c3864a82']
         }
     }
}
</script>

<style lang="scss" scoped>
// .earn-row {
// 	padding-left: 50px;
// }
.earn-text {
	margin-top: 8rem;
	padding-left: 50px;
}
.earn-h1 {
	font-weight: 600;
	font-size: 28px;
	line-height: 42px;
	color: #332F2E;
	text-align: left;
}
.earn-para {
	p {
		margin-top: 1rem;
		font-weight: 400;
		font-size: 18px;
		line-height: 23px;
		letter-spacing: 0.05em;
		color: black !important;
		display: inline-block;
	}
}
.earn-button {
	a {
		margin-top: 0px !important;
		display: inline-block;
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		letter-spacing: 0.02em;
		color: #3dadf3;
		text-decoration: none;
		&:hover {
			color: #0684d2;
		}
	}
}
.earn-banner {
	background-color: #fff;
}
.earn-img {
	img {
		width: 100%;
		padding-left: 20px;
	}
}

@media screen and (max-width: 1024px){
	.earn-text {
	margin-top: 5rem;
	padding-left: 50px;
}
}

@media screen and (max-width: 990px) {
	.earn-row {
		text-align: center;
		.earn-h1 {
		text-align: inherit;
	}
	}
}
@media screen and (max-width: 768px) {
	.earn-row {
		padding-left: 0px;
	}
	.earn-img {
		margin-top: 2rem;
		img {
			width: 100%;
		}
	}
	.earn-text {
		padding-left: 20px;
		padding-right: 20px;
		margin-top: 2rem;
		.earn-para {
	p {
		text-align: center;
	}
}
	}
}

</style>