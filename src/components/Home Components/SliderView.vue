t<template>
<section class="slider-section">
  <div class="container">
  <div id="slider">
  <!-- <agile class="main" ref="main" :options="options1">
  </agile> -->
  <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
    <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img :src="slide"/></div>
  </agile>
  </div>
</div>
</section>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
  el: '#app',
  components: {
    agile: VueAgile 
    },

  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
         },


      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 1,
        autoplaySpeed: 2500,
        changeDelay: 500,
        pauseOnHover: false,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5
            }
          },



        {
          breakpoint: 1000,
          settings: {
            navButtons: false
             } 
          }] 
        },






      slides: [
      require('@/assets/a.png'),
      require('@/assets/b.png'),
      require('@/assets/c.png'),
      require('@/assets/d.png'),
      require('@/assets/e.png'),
      require('@/assets/f.png'),
      require('@/assets/g.png'),
      require('@/assets/h.png'),
      ] 
    };


  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  }

}
</script>

<style lang="scss" scoped>
#slider {
	margin: 0 auto;
	max-width: 100%;
	margin-top: 0 !important;
	padding-right: 40px;
	padding-left: 40px;
	text-align: center;
	justify-content: center;
}
.thumbnails {
	margin: 0 -5px;
	width: calc(100% + 10px);
}
.slide--thumbniail {
	cursor: pointer;
	height: 100px;
	padding: 0 5px;
	transition: opacity 0.3s;
	&:hover {
		opacity: 0.75;
	}
}
.slide {
	img {
		-o-object-fit: cover;
		object-fit: cover;
		-o-object-position: center;
		object-position: center;
		width: 100%;
	}
}
@media screen and (max-width: 768px) {
	#slider {
		padding-right: 30px;
		padding-left: 30px;
	}
	.slide {
		img {
			width: 100%;
			padding-right: 10px;
      background-size: contain;
		}
	}
}
@media screen and (max-width: 600px){
  .slide--thumbniail {
	cursor: pointer;
	height: 200px;
	padding: 0 5px;
	transition: opacity 0.3s;
	&:hover {
		opacity: 0.75;
	}
}
.slide {
		img {
			width: 50%;
			padding-right: 10px;
      background-size: contain;
		}
	}
}
@media screen and (max-width: 430px){
  #slider {
			margin-bottom: 0rem;
}
.slide {
		img {
			width: 50%;
			padding-right: 10px;
		}
	}
.slide--thumbniail {
	cursor: pointer;
	height: 150px;
	padding: 0 5px;
	transition: opacity 0.3s;
	&:hover {
		opacity: 0.75;
	}
}
}
</style>
