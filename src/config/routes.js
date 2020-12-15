import { lazy } from 'react';

const routes = [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('pages/LoginPage')),
  },
  {
    path: '/',
    exact: true,
    component: lazy(() => import('pages/DashboardPage')),
  },
];

export default routes;
