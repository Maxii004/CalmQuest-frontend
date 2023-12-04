import ROUTES from "../features/base/constants/routes";
import LaunchPage from "../features/launch-page";
import { Login } from "../features/login";
import { SignUp } from "../features/sign-up";
import HomePage from "../features/home-page";
import CalmCrew from "../features/calm-crew";
import Profile from "../features/profile";
import ZenBud from "../features/zenbud";
import HelpLines from "../features/helplines";
import DashboardLayout from "../features/base/layouts/dashboard";
import AuthLayout from "../features/base/layouts/auth";
import AuthWrapper from "../features/base/auth";
import PersistLogin from "../features/login/components/presist-login";
//
const routes = [
  {
    path: ROUTES.WELCOME,
    element: <LaunchPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: ROUTES.SIGNUP,
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
    ],
  },
  {
    path: ROUTES.HOME,
    element: (
      <PersistLogin>
        <AuthWrapper>
          <DashboardLayout />
        </AuthWrapper>
      </PersistLogin>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: ROUTES.CALMCREW,
    element: (
      <PersistLogin>
        <AuthWrapper>
          <DashboardLayout />
        </AuthWrapper>
      </PersistLogin>
    ),
    children: [
      {
        path: "",
        element: <CalmCrew />,
      },
    ],
  },
  {
    path: ROUTES.PROFILE,
    element: (
      <PersistLogin>
        <AuthWrapper>
          <DashboardLayout />
        </AuthWrapper>
      </PersistLogin>
    ),
    children: [
      {
        path: "",
        element: <Profile />,
      },
    ],
  },
  {
    path: ROUTES.ZENBUD,
    element: (
      <PersistLogin>
        <AuthWrapper>
          <DashboardLayout />
        </AuthWrapper>
      </PersistLogin>
    ),
    children: [
      {
        path: "",
        element: <ZenBud />,
      },
    ],
  },
  {
    path: ROUTES.HELPLINES,
    element: (
      <PersistLogin>
        <AuthWrapper>
          <DashboardLayout />
        </AuthWrapper>
      </PersistLogin>
    ),
    children: [
      {
        path: "",
        element: <HelpLines />,
      },
    ],
  },
];

export default routes;
