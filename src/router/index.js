import { createRouter, createWebHistory } from 'vue-router';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import FilmtDetailView from '../views/FilmDetailView.vue'
import ProductListView from '../views/ProductListView.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  { path: '/', redirect: '/home' },  
  // { path: '/register', component: Register },
  // { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/products', component: ProductListView},
  { path: '/film/:id', component: FilmtDetailView },
  { path: '/about-us', component: AboutUs}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
