import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './components/Home';
import Category from './components/Category';
import SpecificEvent from './components/SpecificEvent';

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
    {path: '/', component: Home},
    {path: '/category/:category', name: "category", component: Category},
    {path: '/event/:eventTitle', name: "event", component: SpecificEvent},
]

const router = new VueRouter({
    routes
}) 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
