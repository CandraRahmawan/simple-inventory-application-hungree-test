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
    path: '/category-form',
    component: lazy(() => import('pages/FormCategoryPage')),
  },
  {
    path: '/product-list',
    component: lazy(() => import('pages/ProductListPage')),
  },
  {
    path: '/product-form',
    component: lazy(() => import('pages/FormProductPage')),
  },
  {
    path: '/profile',
    component: lazy(() => import('pages/ProfilePage')),
  },
];

export default routes;
