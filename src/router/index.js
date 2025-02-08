import { createRouter, createWebHistory } from 'vue-router';
import Register from '@/views/Register.vue';
import Home from '@/views/Home.vue';
import ProductDetailView from '../views/ProductDetailView.vue'
import ProductListView from '../views/ProductListView.vue'

const routes = [
  { path: '/', redirect: '/register' },  
  { path: '/register', component: Register },
  { path: '/home', component: Home },
  { path: '/products', component: ProductListView},
  { path: '/products/:id', component: ProductDetailView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
