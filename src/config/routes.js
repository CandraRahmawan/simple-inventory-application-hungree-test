import { lazy } from 'react';

const routes = [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('pages/LoginPage')),
  },
];

export default routes;
