import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import AppLayout from '../ui/AppLayout.jsx';
import ProfilePage from '../pages/profilePage.jsx';
import FarmsPage from '../pages/farmsPage.jsx';
import FarmDashPage from '../pages/FarmDashPage.jsx';
import AdminDashPage from '../pages/AdminDashPage.jsx';
import SettingsPage from '../pages/settingsPage.jsx';

import ProtectedLayout from '../ui/protectedLayout.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

import AboutPage from '../pages/AboutPage.jsx';
import PricingPage from '../pages/PricingPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import Login from '../features/authentication/Login.jsx';
import SignUp from '../features/authentication/SignUp.jsx';
import WelcomePage from '../pages/WelcomePage.jsx';
import SingleFarmPage from '../pages/SingleFarmPage.jsx';
import DevicesPage from '../pages/DevicesPage.jsx';
import InsightsPage from '../pages/InsightsPage.jsx';
export const Router = createBrowserRouter([
  {
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/home" />,
      },
      {
        path: '/home',
        element: <WelcomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/pricing',
        element: <PricingPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        element: <RegisterPage />,
        children: [
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <SignUp />,
          },
        ],
      },
    ],
  },

  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: <Navigate replace to="/app/Dashboard" />,
          },
          {
            path: '/app/Dashboard',
            element: <FarmDashPage />,
          },
          {
            path: '/app/profile',
            element: <ProfilePage />,
          },
          {
            path: '/app/farms',
            element: <FarmsPage />,
          },
          {
            path: '/app/farms/:id',
            element: <SingleFarmPage />,
          },
          {
            path: '/app/devices',
            element: <DevicesPage />,
          },
          {
            path: '/app/insights',
            element: <InsightsPage />,
          },

          {
            path: '/app/adminDashboard',
            element: <AdminDashPage />,
          },
          {
            path: '/app/settings',
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
