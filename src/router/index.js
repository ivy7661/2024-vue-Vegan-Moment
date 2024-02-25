import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'products/:id',
        component: () => import('../views/front/ProductDetail.vue'),
        props: (route) => {
          return {
            id: route.params.id
          };
        }
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      }
    ]
  },
  {
    path: '/adminLogin',
    component: () => import('../views/dashboard/AdminLogin.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/layout/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/ProductsView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/OrderView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/front/NotFound.vue')
  },
  {
    path: '/products/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
});

export default router;
