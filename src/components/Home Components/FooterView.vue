<template>
<section class="footer-section">
  <div class="container">
    <div class="row">
      <div class="footer-content">

        <div class="col-4 navigate-column" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div class="navigate-title">
            <img :src="logo" alt="">
          </div>
          <div class="navigate-text">
            <span>
              Copyright 2020 – All Rights Reserved
            </span>
            <div class="navigate-img">
              <ul>
                <li>
                  <img :src="fb" alt="fb">
                </li>
                <li>
                  <img :src="insta" alt="fb">
                </li>
                <li>
                  <img :src="twitter" alt="fb">
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-2 navigate-column" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">
          <div class="navigate-title">
            <h2>Solutions</h2>
          </div>
          <div class="navigate-links">
            <ul>
              <li>
                <a href="#">Advertisers</a>
              </li>
              <li>
                <a href="#">Influencers</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-2 navigate-column" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">
          <div class="navigate-title">
            <h2>About us</h2>
          </div>
          <div class="navigate-links">
            <ul>
              <li>
                <a href="#">Our Approach</a>
              </li>
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">Contact Information</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-2 navigate-column" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">
          <div class="navigate-title">
            <h2>Resources</h2>
          </div>
          <div class="navigate-links">
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Use Cases</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-2 navigate-column" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">
          <div class="navigate-title">
            <h2>Legal</h2>
          </div>
          <div class="navigate-links">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
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
           logo: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/logo2.svg?alt=media&token=5980496c-c9f2-4241-b2ea-8f2b353d95d7'],
           fb: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/fb.png?alt=media&token=4a0c2081-075f-48fa-bb54-1ff5764a3035'],
           insta: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/insta.png?alt=media&token=68f60dc7-4bb6-4628-bbd2-6d31d5484b63'],
           twitter: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/twitter.png?alt=media&token=7f77a235-cce8-49e5-9ead-cf4588ae9c24'],
         }
     }
}
</script>

<style lang="scss" scoped>
.footer-section {
	background-color: #fff;
	.row {
		padding: 36px 36px 36px 36px;
		.footer-content {
			display: flex;
			box-sizing: border-box;
			font-size: 16px;
			color: #777777;
		}
	}
}
.navigate-column {
	.navigate-text {
		margin-top: 20px;
		span {
			font-size: 16px;
		}
	}
	.navigate-title {
		h2 {
			color: #000000;
			font-weight: 500;
			font-size: 18px;
			line-height: 24px;
		}
	}
	.navigate-links {
		ul {
			list-style: none;
			padding: 0 !important;
			margin-top: 20px;
			li {
				a {
					text-decoration: none;
					font-weight: 350;
					line-height: 24px;
					color: #959595 !important;
					font-size: 17px;
				}
			}
		}
	}
}
.footer-content {
	.navigate-column {
		.navigate-img {
			ul {
				padding: 10px 0;
				li {
					list-style: none;
					display: inline-block;
					img {
						padding: 0px 5px;
					}
				}
			}
		}
	}
	.navigate-img {
		margin-top: 5px;
		max-width: 100%;
	}
}
@media screen and (max-width: 990px) {
	.footer-section {
		.row {
			padding: inherit;
		}
	}
}
@media screen and (max-width: 768px) {
	.footer-section {
		.row {
			.footer-content {
				display: table-column;
			}
		}
	}
	.navigate-column {
		width: 100%;
		text-align: center;
		padding-bottom: 2rem;
	}
}

</style>