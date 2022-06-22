import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Layout from '@/pages/Layout';

const Login = lazy(() => import('@/pages/Login'));
const Main = lazy(() => import('@/pages/Main'));
const NotFound = lazy(() => import('@/pages/404'));
const PublishApp = lazy(() => import('@/pages/PublishApp'));
const Application = lazy(() => import('@/pages/Application'));
const SkillConfig = lazy(() => import('@/pages/SkillConfig'));
const SkillTest = lazy(() => import('@/pages/SkillTest'));
const DeviceAccess = lazy(() => import('@/pages/DeviceAccess'));

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/main/:id',
    element: <Layout />,
    children: [
      {
        path: 'application',
        element: <Application />,
      },
      {
        path: 'publish',
        element: <PublishApp />,
      },
      {
        path: 'config',
        element: <SkillConfig />,
      },
      {
        path: 'test',
        element: <SkillTest />,
      },
      {
        path: 'access',
        element: <DeviceAccess />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
