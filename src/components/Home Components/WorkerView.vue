<template>
  <section class="worker-section">
      <div class="container">
          <div class="row worker-row">
              <div class="col-lg-12 worker-area">

                   <div class="worker-text ">
                       <div class="worker-img">
                           <img :src="worker" alt="">
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
                                       <img :src="fb" alt="">
                                   </a>
                               </li>
                               <li>
                                   <a href="#">
                                       <img :src="insta" alt="">
                                   </a>
                               </li>
                               <li>
                                   <a href="#">
                                       <img :src="twitter" alt="">
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
		 return {
			 worker: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/worker.jpg?alt=media&token=26fe0e17-6bc1-4ba5-9ee8-50d87ff3860b'],
			 fb: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/fb.png?alt=media&token=4a0c2081-075f-48fa-bb54-1ff5764a3035'],
			 insta: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/insta.png?alt=media&token=68f60dc7-4bb6-4628-bbd2-6d31d5484b63'],
			 twitter: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/twitter.png?alt=media&token=7f77a235-cce8-49e5-9ead-cf4588ae9c24'],
		 }
     }
}
</script>

<style lang="scss" scoped>
.worker-row {
	padding-left: 25px;
	padding-right: 25px;
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
.worker-text {
	&::before {
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
	&::after {
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
	text-align: center;
	box-sizing: border-box;
	display: block;
	padding: 80px 80px;
	position: relative;
	.worker-h1 {
		font-size: 22px;
		line-height: 21px;
		color: #2BA8F5;
		font-family: 'Poppins', sans-serif;
		margin-top: 36px;
	}
	.worker-para {
		p {
			font-size: 32px;
			line-height: 35px;
			text-align: center;
			letter-spacing: 0.02em;
			color: #413434 !important;
			font-weight: normal;
			padding-top: 1rem;
		}
	}
	.worker-links {
		text-align: center;
		justify-content: center;
		ul {
			text-align: center;
			display: flex;
			justify-content: center;
			li {
				list-style: none;
				a {
					padding: 0 15px;
				}
			}
		}
	}
}
.worker-img {
	img {
		width: 106px;
		height: 106px;
		border-radius: 100px;
		margin: auto;
		border: solid 3px #ffffff;
	}
}
@media screen and (max-width: 1024px) {
	.worker-area {
		padding: 0 0 0 0px;
	}
	.worker-text {
		.worker-para {
			p {
				font-size: 25px;
				line-height: 32px;
			}
		}
	}
}
@media screen and (max-width: 768px) {
	.worker-row {
		padding-left: 70px;
		padding-right: 70px;
	}
	.worker-area {
		padding: 0 0 0 0px;
	}
	.worker-text {
		.worker-para {
			p {
				font-size: 19px;
				line-height: 27px;
			}
		}
		.worker-h1 {
			font-size: 16px;
			line-height: 10px;
			margin-top: 15px;
		}
	}
}
@media screen and (max-width: 500px) {
	.worker-row {
		padding-left: 70px;
		padding-right: 70px;

		.worker-text{
			padding: 60px 20px;
			.worker-para {
			p {
				font-size: 18px;
				line-height: 20px;
			}
		}
		}
		.worker-text::before{
			content: "";
			position: absolute;
			left: 1.5rem;
			margin-top: -8rem;
		}
	}
}
@media screen and (max-width: 376px) {
	.worker-row {
		padding-left: 50px;
		padding-right: 50px;
	}
	.worker-text {
		.worker-para {
			p {
				font-size: 14px;
				line-height: 16px;
			}
		}
	}
}

</style>