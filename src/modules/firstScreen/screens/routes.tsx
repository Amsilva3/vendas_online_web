import { RouteObject } from 'react-router-dom';

import FirstScreen from '..';
import PageNotFound from './PageNotFound';

export const firstScreenRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];
