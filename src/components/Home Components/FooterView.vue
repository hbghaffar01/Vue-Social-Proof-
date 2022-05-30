<template>
<section class="footer-section">
  <div class="container">
    <div class="row">
      <div class="footer-content">

        <div class="col-4 navigate-column" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div class="navigate-title">
            <img src="@/assets/logo2.svg" alt="">
          </div>
          <div class="navigate-text">
            <span>
              Copyright 2020 – All Rights Reserved
            </span>
            <div class="navigate-img">
              <ul>
                <li>
                  <img src="@/assets/fb.svg" alt="fb">
                </li>
                <li>
                  <img src="@/assets/insta.svg" alt="fb">
                </li>
                <li>
                  <img src="@/assets/twitter.svg" alt="fb">
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