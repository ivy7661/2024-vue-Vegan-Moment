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
        component: () => import('../views/front/ProductDetail.vue')
        // props: (route) => {
        //   return {
        //     id: route.params.id
        //   };
        // }
      },
      {
        path: 'orderInfo',
        component: () => import('../views/front/OrderInfo.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/front/UserCheckout.vue')
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
        component: () => import('../views/dashboard/ProductsAdmin.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/OrderAdmin.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/CouponAdmin.vue')
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    };
  }
});

export default router;
