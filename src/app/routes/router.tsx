import { createBrowserRouter } from 'react-router';
import { SwaggerUIPage } from '../../pages/swagger-ui/ui/swagger-ui';

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
  },
  {
    path: '/swagger-ui',
    element: <SwaggerUIPage />,
  },
]);
