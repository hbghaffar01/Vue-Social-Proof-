<template>
<GoBack />
  <div class="conatiner">
    <div class="col-11 dashboard-section-1">
      <div class="notify">
        <img src="@/assets/disney.png" alt="" />
        <div>
          <h5>Disney+</h5>
          <p>Scheduled at 30 may 2022, Instagram Story</p>
        </div>
      </div>
      <div class="post-verify">
        <p><i class="fa-solid fa-check"></i>Post Verified</p>
      </div>
    </div>

    <div class="col-11 dashboard-section-2">
      <div class="row space">
        <div class="col-7 deals">
          <div class="deal-text">
            <div class="deal-text-heading">
              <h5>DealBoard</h5>
              <p>Last Message 12:04 CET + 5:00</p>
            </div>

            <div class="deal-text-status">
              <p>View Campaign Details</p>
            </div>
          </div>
          <hr>

          <div class="uploader-img">
            <img src="@/assets/uploader.svg" alt="">
            <p>This is beginning of your deal board upload media content to get it aprroved from advertiser</p>
            <button type="button" class="btn">Send Text</button>
          </div>
        </div>
        <div class="col-4 activity">
            <div class="activity-text">
            <div class="activityl-text-heading">
                <h5>Activity</h5>
            </div>
            <div class="activity-text-status">
                <p>Revisions <small>0/4</small></p>
            </div>
            </div>
            <hr>
            <div class="folder-img">
                <img src="@/assets/folder.svg" alt="">
            </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import GoBack from './GoBack.vue';
export default {
    components: {
        GoBack,
    }
};
</script>

<style>
.dashboard-section-1 {
  box-shadow: 0px 4px 24px rgb(0 0 0 / 10%);
  padding: 0 0 0 36px;
  background: #fff;
  margin-left: 6rem;
  margin-top: 5rem;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.notify {
  position: absolute;
  left: 1rem;
  display: flex;
  color: #000b42;
}
.notify img {
  width: 50px;
  height: 50px;
  position: relative;
  top: 17px;
}
.notify h5 {
  font-weight: 600;
  margin-top: 1rem;
  margin-left: 5px;
}
.notify p {
  font-size: 12px;
  margin-left: 5px;
}
.post-verify {
  position: absolute;
  right: 0;
  color: #219653;
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 14px;
}
.post-verify p i {
  margin-right: 5px;
}

/* section 2 */
.dashboard-section-2 {
  margin-left: 4.5rem;
  margin-top: 4rem;
  padding: 0 0 0 36px;
}
.space {
  justify-content: space-between;
}
.deals {
  box-shadow: 0px 4px 24px rgb(0 0 0 / 10%);
  background: #fff;
  height: 350px;
  width: 69%;
}
.activity {
  box-shadow: 0px 4px 24px rgb(0 0 0 / 10%);
  background: #fff;
  height: 350px;
  width: 29%;
}

/* text  */
.deal-text {
  display: flex;
  position: relative;
  margin-bottom: -1rem;
}
.deal-text-heading {
  padding: 20px 20px 0px 20px;
}
.deal-text-heading h5 {
  font-size: 16px;
}
.deal-text-heading p {
  font-size: 12px;
}
.deal-text-status p {
  position: absolute;
  right: 0;
}
.deal-text-status p {
  padding: 40px 0 0 0;
  color: #2ba8f5;
  font-size: 12px;
}
.deal-text-status p:hover {
  opacity: 0.7;
}
/* img  */
.uploader-img{
    text-align: center;
    margin-top: 5rem;
    padding-left: 200px;
    padding-right: 200px;
}
.uploader-img img{
    width: 150px;
    padding-left: 40px;
}
.uploader-img p{
    font-size: 10px;
}
.uploader-img button{
    width: 100px;
    background: #2BA8F5;
    color: #fff;
}
.uploader-img button:hover{
    opacity: .9;
    color: #fff;
}

/* activity sec  */
.activity-text{
    display: flex;
    justify-content: space-between;
}
.activityl-text-heading h5{
    margin-top: 25px;
}
.activity-text-status p{
    margin-top: 31px;
    font-size: 12px;
}
.folder-img {
    text-align: center;
    margin-top: 6rem;
}
.folder-img img{
    width: 100px;
}
</style>