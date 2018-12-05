import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './components/Home';
import Category from './components/Category';
import SpecificEvent from './components/SpecificEvent';
import * as VueGoogleMaps from 'vue2-google-maps';
//import Geocoder from "@pderas/vue2-geocoder";
//import Geocoder from "@lassehaslev/vue-geocoder";

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBxAdVBUs_u8HCB_-EWtf0cIINF7fKOgzg',
      libraries: 'places',
    },
})
/*
Vue.use(Geocoder, {
    googleMapsApiKey: 'AIzaSyBxAdVBUs_u8HCB_-EWtf0cIINF7fKOgzg',
}); */

//const Geocoder = require( '@lassehaslev/vue-geocoder' );
//Vue.component( 'geocoder', Geocoder );

Vue.use(VueRouter);
const routes = [
    {path: '/', component: Home},
    {path: '/category/:category', name: "category", component: Category},
    {path: '/event/:token1/:token2/:token3', name: "event", component: SpecificEvent},
]

const router = new VueRouter({
    routes
}) 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
