<template>
  <section class="four-section">
    <div class="container">
      <div class="row four-row" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div class="four-title">
          <h2 class="h2">Get Started In Four Steps</h2>
        </div>
      </div>

      <div class="four-steps">
        <div class="row steps-row">
          <div class="steps-details" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">

            <div class="col-3 step-1">
              <div class="step-img">
                <img src="@/assets/step-1.svg" alt="step-1" />
              </div>
              <div class="step-text">
                <div class="step-1-heading">
                  <h3 class="h3">Enroll</h3>
                </div>
                <div class="step-para">
                  <p>
                    Browse applicable sponsorships and enroll in your desired
                    campaign.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-3 step-2">
              <div class="step-img">
                <img src="@/assets/step-2.svg" alt="step-1" />
              </div>
              <div class="step-text">
                <div class="step-2-heading">
                  <h3 class="h3">Create</h3>
                </div>
                <div class="step-para">
                  <p>
                    Receive instructions on how to create the content and when to post.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-3 step-3">
              <div class="step-img">
                <img src="@/assets/step-3.svg" alt="step-1" />
              </div>
              <div class="step-text">
                <div class="step-3-heading">
                  <h3 class="h3">Promote</h3>
                </div>
                <div class="step-para">
                  <p>
                    Post the content you created to your social media and start earning!
                  </p>
                </div>
              </div>
            </div>

            <div class="col-3 step-4">
              <div class="step-img">
                <img src="@/assets/step-4.svg" alt="step-1" />
              </div>
              <div class="step-text">
                <div class="step-4-heading">
                  <h3 class="h3">Deposit</h3>
                </div>
                <div class="step-para">
                  <p>
                    Get paid exactly for the amount of views or impressions you delivered.
                  </p>
                </div>
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

<style scoped>
.four-section{
    background-color: #FAFAFA;
    padding-top: 100px;
    padding-bottom: 70px;
}
.four-row {
    text-align: center;
}
.four-row .four-steps{
  padding: 36px 36px 36px 36px;
}
.four-row .four-title {
  text-align: center;
}
.four-row .four-title h2 {
    font-weight: 500;
    font-size: 36px !important;
    line-height: 54px;
    color: #000000;
}
.four-steps .steps-row .steps-details{
  display: flex;
  box-sizing: border-box;
  margin-top: 36px;
}
.four-steps .steps-row .steps-details .step-img{
    width: auto !important;
}
.four-steps .steps-row .steps-details .step-img img{
    width: 100%;
    max-width: none;
    height: 190px;
}
.four-steps .steps-row .steps-details .step-text{
    text-align: center;
}
.four-steps .steps-row .steps-details .step-text h3{
    margin: 18px 0px 0px 0px;
    clear: both;
}
.four-steps .steps-row .steps-details .step-text .step-1-heading{
    color: #3A4CEF;
}
.four-steps .steps-row .steps-details .step-text .step-2-heading{
    color: #2BA8F5;
}
.four-steps .steps-row .steps-details .step-text .step-3-heading{
    color: #FC00FF;
}
.four-steps .steps-row .steps-details .step-text .step-4-heading{
    color: #7024C4;
}
.four-steps .steps-row .steps-details .step-text .step-para{
    padding: 16px;
}
.four-steps .steps-row .steps-details .step-text .step-para p{
    font-size: 20px;
    line-height: 27px;
    font-family: 'Poppins', sans-serif;
}


@media screen and (max-width: 768px){
  .four-steps .steps-row .steps-details{
    display: table-column;
  }
  .step-1{
    width: 100%;
  }
  .step-2{
    width: 100%;
  }
  .step-3{
    width: 100%;
  }
  .step-4{
    width: 100%;
  }
}
</style>