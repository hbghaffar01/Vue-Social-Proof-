<template>
  <div class="conatiner">
          <div class="col-10 dashboard-sections">
              <div class="notify">
                  <img src="@/assets/disney.png" alt="">
                  <div>
                  <h5>Disney+ </h5>
                  <p>Scheduled at 30 may 2022, Instagram Story</p>
                  </div>
              </div>
              <div class="post-verify">
                  <p><i class="fa-solid fa-check"></i>Post Verified</p>
              </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.dashboard-sections{
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
.notify{
    position: absolute;
    left: 1rem;
    display: flex;
    color: #000B42;
}
.notify img{
    width: 50px;
    height: 50px;
    position: relative;
    top: 17px;
}
.notify h5{
    font-weight: 600;
    margin-top: 1rem;
    margin-left: 5px;
}
.notify p{
    font-size: 12px;
    margin-left: 5px;
}
.post-verify{
    position: absolute;
    right: 0;
    color: #219653;
    margin-top: 1rem;
    margin-right: 1rem;
    font-size: 14px;
}
.post-verify p i{
    margin-right: 5px;
}
</style>