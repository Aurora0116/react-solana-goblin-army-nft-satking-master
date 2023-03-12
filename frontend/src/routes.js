import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import Products from './pages/Products';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/" replace /> },
        { path: '', element: <Products /> }
      ]
    },
    { path: '*', element: <Navigate to="/" replace /> }
  ]);
}
