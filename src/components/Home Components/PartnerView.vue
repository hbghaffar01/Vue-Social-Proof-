<template>
<section class="partner-section">
<div class="container">
  <div class="partner">
      <div class="partner-content">
          <div class="partner-text" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <h2>Partner with Industry Leading Brands</h2>
          </div>
          <div class="partner-btn" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">
              <div class="button">

                  <router-link to="authenticate"
                        class="nav-item"
                        exact
                        >
                        <a href="#" v-if="!auth.currentUser">Create A Free Profile</a>
                        <a href="#" v-else>We Welcome You!</a>
                        </router-link>
             
              </div>
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
             auth
         }
     }
}
</script>

<style lang="scss" scoped>
.partner {
	padding: 36px 36px 36px 36px;
	background-color: #fff;
	.partner-content {
		padding-top: 60px;
		padding-bottom: 60px;
		display: table;
		table-layout: fixed;
		display: block;
		text-align: center;
		.partner-text {
			h2 {
				margin: auto;
				font-weight: 600;
				font-size: 36px !important;
				line-height: 54px;
				text-align: center;
				color: #3E3E3E;
				font-family: 'Poppins', sans-serif;
			}
		}
		.partner-btn {
			.button {
				margin-top: 3rem;
				a {
					text-transform: capitalize;
					font-weight: 600 !important;
					font-size: 14px !important;
					line-height: 21px;
					letter-spacing: 0.02em;
					color: #FFFFFF !important;
					font-family: 'Poppins', sans-serif !important;
					background: #22A8F3 !important;
					border-color: #22A8F3 !important;
					padding: 16px 40px 16px 40px !important;
					text-decoration: none;
					border-radius: 2px;
				}
			}
		}
	}
}
@media screen and (max-width: 450px) {
	.partner {
		.partner-content {
			padding-top: 20px;
			padding-bottom: 60px;
			.partner-text {
				h2 {
					font-size: 30px !important;
					line-height: 40px;
				}
			}
			.partner-btn {
			.button {
				margin-top: 3rem;
				a {
					padding: 16px 10px 16px 10px !important;
				}
			}
		}
		}
	}
}

</style>