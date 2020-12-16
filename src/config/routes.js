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
    path: '/category-detail',
    component: lazy(() => import('pages/CategoryDetailPage')),
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
    path: '/product-detail',
    component: lazy(() => import('pages/ProductDetailPage')),
  },
  {
    path: '/profile',
    component: lazy(() => import('pages/ProfilePage')),
  },
];

export default routes;
