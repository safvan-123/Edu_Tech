import { lazy } from 'react';

import Dashboard from '../jsx/components/Dashboard';
import AddHotel from '../jsx/pages/AddHotel';
import Error404Page from '../jsx/pages/Error/Error404';

const SignUp = lazy(() => import('../jsx/pages/Authentication/Registration'));
const ForgotPassword = lazy(() => import('../jsx/pages/Authentication/ForgotPassword'));
const Login = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('../jsx/pages/Authentication/Login')), 500);
  });
});

const myRoutes = [
    {path:"/login",component:Login},
    {path:"/page-register",component:SignUp},
    {path:"/page-forgot-password",component:ForgotPassword},
]

const dashboardRoutes = [
  { path: "/dashboard", component: Dashboard },

  /// pages
  { path: "/add-hotel", component: AddHotel },
  { path: "/page-error-404", component: Error404Page },
];


export { myRoutes, dashboardRoutes }