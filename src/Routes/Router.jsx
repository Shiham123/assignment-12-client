import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage.jsx/HomePage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);

export default router;
