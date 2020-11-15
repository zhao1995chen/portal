import Vue from 'vue';
import VueRouter from 'vue-router' // 路由
import HelloWorld from './components/HelloWorld';
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'helloworld', component: HelloWorld },
    { path: '/login', name: 'login', component: Login },
    { path: '/signup', name: 'signup', component: SignUp }
  ]

const router = new VueRouter({
    mode: 'history', // 如果沒有用這個會無法路由
    routes: routes
});

export default router