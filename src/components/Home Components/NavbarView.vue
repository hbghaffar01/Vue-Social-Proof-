<template>
<header>
  <div class="header" :class="{ sticky }">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
    <a class="navbar-brand" href="#">
      <img :src="logo" alt="">
    </a>
    <button class="navbar-toggler click-area" @click="click" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span id="burger" :class="{ open }">

      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item me-1">
          <a class="nav-link" aria-current="page" href="#">	
           <router-link to="/"
                        class="nav-item"
                        exact
                        >
                        Influencers
                        </router-link>           
           </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="about"
                        class="nav-item"
                        exact
                        >
                        Advertisers
                        </router-link>
            </a>
        </li>
      </ul>
      <div class="d-flex get-start">

        <router-link to="started"
                        class="nav-item"
                        exact
                        >
                        <button class="btn started" type="submit">Get Started</button>
                        </router-link>        
        
          <router-link to="authenticate"
                        class="nav-item"
                        exact
                        >
                        <button class="btn signIn" type="submit" v-if="!auth.currentUser">Sign In</button>
                        <button class="btn signIn" type="submit" v-else>Dashboard <i class="fa-solid fa-arrow-right" style="font-size: 12px;"></i> </button>
                        </router-link>
                    
      </div>
    </div>
  </div>
</nav>
</div>
</header>
</template>

<script>
import { ref } from 'vue';
import { auth } from '@/includes/firebase'

export default {
  name: 'NavbarView',
  props: {
    msg: String
  },
  setup() {
    const sticky = ref(true);
    window.addEventListener("scroll", function() {
      var nav = this.document.querySelector("nav");
      nav.classList.toggle("sticky", this.window.scrollY > 0);
    });
    return {
      auth,
      sticky,
      logo: ['https://firebasestorage.googleapis.com/v0/b/soical-proof-vue3.appspot.com/o/logo2.svg?alt=media&token=5980496c-c9f2-4241-b2ea-8f2b353d95d7']
    };
  },
  data() {
    return{
      open: false,
    }
  },
  methods: {
    click() {
      this.open = !this.open;
    },
    scroll(){
      this.window = true;
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background-color: transparent !important;
  .container{
    padding: 0px 30px;
  }
  .sticky{
    // background-color: rgba(245, 239, 239, 0.445);
    background: #fff;
    .signIn{
      background: #2BA8F5;
      color: #fff !important;
    }
  }
  nav {
    width: 100%;
    z-index: 100;
    position: fixed;
    .navbar-brand {
      margin-right: .5 !important;
      img{
        margin-left: 12px;
      }
    }

    .navbar-light{
      border-color: unset !important;
      color: #fff;
    }
    a {
      text-decoration: none;
      padding: 25px 20px 20px 0px;
      color: #010000;
      &:hover {
      opacity: .75;
    }
    }

    li {
      list-style: none;
      .nav-link {
        font-weight: 400;
        color: black;
      }
    }
  }
  .started{
    box-shadow: none;
    color: #010000;
    &:hover{
      opacity: .5;
    }
  }
  .signIn {
    background: #fff;
    width: 130px;
    height: 40px;
    border-radius: 0 !important;
    color: #2BA8F5 !important;
    box-shadow: none;
  }
}
li {
  display: inline-block;
}
button {
  margin: 0 10px 0 10px;
}

// media query 
@media screen and (max-width: 3000px){
  .container{
    max-width: 2600px;
  }
}
@media screen and (max-width: 1024px){
  .header nav a{
    text-decoration: none;
    font-weight: 100;
    padding: 20px 20px 20px 20px;
  }

}

@media screen and (max-width: 990px){
  .navbar{
    opacity: 1;
    z-index: 10;
  }
  .navbar-brand img{
    margin-left: -2.5rem;
  }
  .show{
    background-color: #fff;
    transition: .2s ease-in-out;
  }

  
  .header .signIn {
    background: #2BA8F5;
    width: 130px;
    height: 40px;
    border-radius: 0 !important;
    color: #fff !important;
    box-shadow: none;
    margin-right: 3rem;
}
  .navbar-light .navbar-toggler {
      color: unset;
      border-color: unset;
}
.navbar-toggler{
  border: 0px solid transparent;
  transition: box-shadow 0.15s ease-in-out;
}
.navbar-toggler:focus{
  box-shadow: none !important;
}
ul{
  text-align: center;
}
.get-start{
  flex-direction: column;
  align-items: center;
  padding-left: 2.5rem;
}
.get-start .started{
  padding: 30px;
  margin-right: 3.5rem;
  font-weight: 100;
}





// hamburger btn 
button {
  margin: -30px 10px 0 10px;
}

.click-area {
  width: 50px;
  height: 50px;
  display: inline-block;
}
#burger {
  display: inline-block;
  width: 20px;
  height: 2px;
  background: black;
  position: relative;
  transition: 300ms;
}
#burger::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 8px;
  left: 0;
  width: 20px;
  height: 2px;
  background: black;
  transition: 500ms;
}
#burger::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 16px;
  left: 0;
  width: 20px;
  height: 2px;
  background: black;
  transition: 500ms;
}
#burger.open {
  background: transparent;
}
#burger.open::before {
  display: inline-block;
  width: 20px;
  top: 8px;
  height: 2px;
  background: black;
  position: absolute;
  transform: rotate(45deg);
}
#burger.open::after {
  display: inline-block;
  width: 20px;
  top: 8px;
  height: 2px;
  background: black;
  position: absolute;
  transform: rotate(-45deg);
}
}
// hamburger btn end/////




@media screen and (max-width: 768px){
  .header nav .navbar-brand{
    padding: 25px 0; 
  }
  .navbar-brand img {
    margin-left: 2rem;
}
}
@media screen and (max-width: 600px){
  .header nav a{
    text-decoration: none;
    font-weight: 100;
    padding: 13px 0;
  }
  .get-start{
    
    padding-left: 0rem;
  }
  .get-start .started{
    margin-right: 5px;
  }
  .header .signIn{
    margin-right: 0rem;
  }

}
</style>
