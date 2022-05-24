import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'aos/dist/aos.css'
import VueAgile from 'vue-agile'

//firebase
import { auth } from '@/includes/firebase'

let app;
auth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App);

        app.use(store);
        app.use(router);
        app.use(VueAgile);
        app.mount('#app');
    }
});

import 'bootstrap/dist/js/bootstrap.js'
