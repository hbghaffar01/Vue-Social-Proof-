<template>
  <section id="faqs" class="faq_wrapper">
        <div class="container">
            <div class="row align-items-center faq-row">
                <div class="col-sm-12 col-lg-12 mb-5 mb-lg-0">
                    <div class="faq_subtitle">
                        <h2 class="h2">
                            Have a question about Social Proof sponsorships? We’ve got you covered with FAQs and influencer resources.
                        </h2>
                    </div>
                    <div class="accordion accordion-flush" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Q1 Is there a follower minimum to joining Social Proof?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>There is not! Our platform allows for any influencer, regardless of their follower size to start earning money!</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Q2 Is there a cost to sign up for Social Proof?
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>There is no cost to be a Social Proof influencer!</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Q3 Am I obligated to enroll in campaigns?
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>You are not obligated to opt into any campaigns. However, if you do opt into a campaign and fail to post, your account will become frozen until reviewed by an admin.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Q4 How much can I earn with Social proof?
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>There is no maximum to what you can earn! The greater your follower size and the higher your engagement rate, the more you will earn.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Q5 What fee is charged by Social Proof?
                            </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Social Proof takes 0% of your earnings! We charge a 15% service fee that is billed directly to the advertiser, ensuring you keep all of your earnings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faq-text">
                        <div class="faq-para">
                            <p>Need some help getting your influencer career started? Check out resources for <a href="#">influencers</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- FAQs section exit -->
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

/* 10 FAQs */
.faq-row {
	padding: 70px 36px 36px 36px;
}
.faq_wrapper {
	.faq_subtitle {
		.h2 {
			font-weight: 500;
			font-size: 42px;
			line-height: 54px;
			text-align: center !important;
			color: #000000;
			font-family: 'Poppins', sans-serif !important;
		}
	}
	.accordion-button {
		&:hover {
			box-shadow: none;
		}
		&:focus {
			box-shadow: none;
		}
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		font-weight: 600;
		border-radius: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5px;
		background-color: unset;
		&::after {
			content: '\002B';
			font-family: "Font Awesome 5 Free";
			font-weight: 800;
			display: inline-block;
			background-image: none;
			background-color: transparent !important;
			color: #0c63e4 !important;
			padding-right: 20px;
		}
		&:not(.collapsed) {
			&::after {
				content: "\2212";
				font-family: "Font Awesome 5 Free";
				font-weight: 800;
				display: inline-block;
				background-image: none;
				transform: unset;
				background-color: transparent !important;
			}
		}
	}
	.accordion-flush {
		box-sizing: border-box;
		display: block;
		padding: 30px 150px;
	}
	.accordion-item {
		border-top-style: solid;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-color: #777777;
		padding: 5px 5px;
	}
	.faq-text {
		text-align: center;
		margin-top: 1rem;
		p {
			font-size: 20px;
			line-height: 27px;
			text-align: center;
			color: #000000;
			font-family: 'Poppins', sans-serif !important;
			&:hover {
				color: unset !important;
				opacity: 1;
			}
			a {
				text-decoration: none;
			}
		}
	}
}
.accordion-item {
	.accordion-body {
		p {
			font-weight: normal;
			font-size: 21px;
			line-height: 30px;
			color: #545454;
			font-family: 'Poppins', sans-serif !important;
		}
	}
}
@media screen and (max-width: 990px) {
	.faq-row {
		padding: inherit;
	}
	.faq_wrapper {
		.accordion-flush {
			padding: inherit;
		}
		.faq_subtitle {
			.h2 {
				font-size: 30px;
				line-height: 36px;
			}
		}
	}
}
@media screen and (max-width: 768px) {
	.faq_wrapper {
		.faq_subtitle {
			.h2 {
				font-size: 22px;
				line-height: 36px;
			}
		}
	}
}
@media screen and (max-width: 450px) {
	.faq_wrapper {
		.accordion-button {
			font-size: 14px;
			line-height: 22px;
			font-weight: 500;
		}
		.faq-text {
			p {
				font-size: 16px;
				line-height: 22px;
			}
		}
	}
	.accordion-item {
		.accordion-body {
			p {
				font-size: 18px;
				line-height: 25px;
			}
		}
	}
}

</style>