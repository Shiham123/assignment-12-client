import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HomePage from '../Pages/HomePage.jsx/HomePage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import SurveyPage from '../Pages/SurveyPage/SurveyPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import DrawerLayout from '../Layout/DrawerLayout';
import ManageUserSection from '../Section/AdminSection/ManageUserSection';
import ChartSection from '../Section/AdminSection/ChartSection';
import SurveyStatusSection from '../Section/AdminSection/SurveyStatusSection';
import SurveyResponseSection from '../Section/AdminSection/SurveyResponseSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/surveyPage', element: <SurveyPage /> },
      { path: '/loginPage', element: <LoginPage /> },
      { path: '/registerPage', element: <RegisterPage /> },
    ],
  },
  {
    path: '/dashBroad',
    element: <DrawerLayout />,
    children: [
      { path: 'charts', element: <ChartSection /> },
      { path: 'manageUser', element: <ManageUserSection /> },
      { path: 'surveyStatus', element: <SurveyStatusSection /> },
      { path: 'surveyResponse', element: <SurveyResponseSection /> },
    ],
  },
]);

export default router;
