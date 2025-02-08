import { createRouter, createWebHistory } from 'vue-router';
import Register from '@/views/Register.vue';
import Home from '@/views/Home.vue';
import ProductDetailView from '../views/ProductDetailView.vue'
import ProductListView from '../views/ProductListView.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  { path: '/', redirect: '/register' },  
  { path: '/register', component: Register },
  { path: '/home', component: Home },
  { path: '/products', component: ProductListView},
  { path: '/products/:id', component: ProductDetailView },
  { path: '/about-us', component: AboutUs}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
