import { lazy } from 'react';

const SignUp = lazy(() => import('../jsx/pages/Registration'));
const ForgotPassword = lazy(() => import('../jsx/pages/ForgotPassword'));
const Login = lazy(() => {
    return new Promise(resolve => {
    setTimeout(() => resolve(import('../jsx/pages/Login')), 500);
  });
});

const myRoutes = [
    {path:"/login",component:Login},
    {path:"/page-register",component:SignUp},
    {path:"/page-forgot-password",component:ForgotPassword},
]


export {myRoutes }