import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('pages/DashboardPage')),
  },
  {
    path: '/login',
    component: lazy(() => import('pages/LoginPage')),
  },
  {
    path: '/category-list',
    component: lazy(() => import('pages/CategoryListPage')),
  },
  {
    path: '/product-list',
    component: lazy(() => import('pages/ProductListPage')),
  },
];

export default routes;
