import { RouteObject } from 'react-router-dom';

import FirstScreen from '..';

export const firstScreenRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <div>Pagina não encontrada</div>,
  },
];
