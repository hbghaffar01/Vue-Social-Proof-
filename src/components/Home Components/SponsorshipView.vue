<template>
  <section class="sponsor-banner">
      <div class="container">
          <div class="row g-0 sponsor-row">
              <div class="sponsor-img col-lg-6 mb-5" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                  <img src="@/assets/sponsor.svg" alt="">
              </div>

              <div class="col-lg-6 sponsor-text mb-5" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                  <div class="sponsor-h1">
                      <h1>Sponsorship Opportunities</h1>
                  </div>
                  <div class="sponsor-para">
                      <p>Get connected with premium brands and advertisers for consistent sponsorship opportunities. Enroll, create and share the sponsored content across your social media accounts in exchange for a high paying CPM compensation!</p>
                  </div>
                  <div class="sponsor-button">
                      
                      <router-link to="authenticate"
                        class="nav-item"
                        exact
                        >
                        <a href="#" v-if="!auth.currentUser">Sign Up Now For Free</a>
                        <a href="#" v-else>See Opportunities</a>
                        </router-link>
                      
                  </div>

                  <div class="sponsor-links" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                           <ul class="sponsor-ul">
                               <li>
                                   <a href="#">
                                       <img src="@/assets/1.svg" alt="">
                                   </a>
                               </li>
                               <li>
                                   <a href="#">
                                       <img src="@/assets/2.svg" alt="">
                                   </a>
                               </li>
                               <li>
                                   <a href="#">
                                       <img src="@/assets/3.svg" alt="">
                                   </a>
                               </li>
                               <li>
                                   <a href="#">
                                       <img src="@/assets/4.svg" alt="">
                                   </a>
                               </li>
                           </ul>
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
     }
     }
}
</script>

<style lang="scss" scoped>
.sponsor-row {
	padding-left: 50px;
	margin-top: 5rem;
}
.sponsor-text {
	margin-top: 5rem;
	.sponsor-links {
		justify-content: flex-start;
		.sponsor-ul {
			display: flex;
			padding: 0 !important;
			li {
				list-style: none;
				padding-top: 1rem;
				margin: 0 10px;
			}
		}
	}
}
.sponsor-h1 {
	font-weight: 600;
	font-size: 28px;
	line-height: 42px;
	color: #332F2E;
}
.sponsor-para {
	p {
		margin-top: 1rem;
		font-weight: 400;
		font-size: 18px;
		line-height: 23px;
		letter-spacing: 0.05em;
		color: black !important;
		display: inline-block;
		text-align: left;
	}
}
.sponsor-button {
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
.sponsor-banner {
	background-color: #fff;
}
.sponsor-img {
	img {
		margin-top: 0px !important;
		width: 60%;
	}
}
@media screen and (max-width: 990px) {
	.sponsor-row {
		text-align: center;
	}
	.sponsor-img {
		img {
			width: 100%;
		}
	}
	.sponsor-text {
		margin-top: 0rem;
		margin-top: 0rem;
		.sponsor-links {
			.sponsor-ul {
				justify-content: center;
			}
		}
	}
}
@media screen and (max-width: 768px) {
	.sponsor-row {
		padding-left: 0px;
	}
	.sponsor-text {
		padding-left: 20px;
		padding-right: 20px;
	}
}
@media screen and (max-width: 600px) {
	.sponsor-text {
		.sponsor-links {
			ul {
				li {
					img {
						width: 70px;
					}
				}
			}
		}
	}
}
@media screen and (max-width: 350px) {
	.sponsor-text {
		.sponsor-links {
			ul {
				li {
					img {
						width: 50px;
					}
				}
			}
		}
	}
}

</style>