// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// Nav
import Introduction from '../views/02-nav/Introduction.vue';
import About from '../views/02-nav/About.vue';
import Signup from '../views/02-nav/Signup.vue';
import Login from '../views/02-nav/Login.vue';
// Home
import HomePage from '@/views/01-index/HomePage.vue';
import HomeDev from '@/views/01-index/HomeDev.vue';
// Dev
import VrAframeDemo from '@/views/04-vr/vr-aframe-demo.vue';
import VrKeyboard from '@/views/04-vr/vr-keyboard.vue';
// Scanner
import Scanner from "@/views/05-scanner/Scanner.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/aframe-template',
    name: 'aframe-template',
    component: VrAframeDemo,
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: Introduction,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dev-home',
    name: 'dev-home',
    component: HomeDev,
  },
  {
    path: '/vr-keyboard',
    name: 'vr-keyboard',
    component: VrKeyboard,
  },
  {
    path: '/scanner',
    name: 'scanner',
    component: Scanner,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;