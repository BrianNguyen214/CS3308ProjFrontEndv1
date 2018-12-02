import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './components/Home';
import Category from './components/Category';

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
    {path: '/', component: Home},
    {path: '/:category', name: "category", component: Category},
    //{path: '/article/:token1/:token2/:token3', name: "article", component: ArticleDescrip},
]

const router = new VueRouter({
    routes
}) 

Vue.component('home', Home);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
