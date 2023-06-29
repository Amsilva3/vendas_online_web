import { RouteObject } from 'react-router-dom';

import LoginScreen from './login/screens/LoginScreen';

export const loginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];
