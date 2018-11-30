import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './components/Home';

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
    //{path:'/aboutus', component: Officers},
    {path: '/', component: Home},
    //{path: '/contact', component: JobOrder},
    //{path: '/signup', component: SignUp},
    //{path: '/email_confirmed', component: EmailConfirmed},
    //{path: '/invalid_email', component: InvalidEmail},
    //{path: '/email_exists_already', component: EmailAlready},
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
