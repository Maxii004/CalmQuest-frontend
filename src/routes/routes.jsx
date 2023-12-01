import ROUTES from "../features/base/constants/routes";
import LaunchPage from "../features/launch-page";
import { Login } from "../features/login";
import { SignUp } from "../features/sign-up";
import HomePage from "../features/home-page";
import CalmCrew from "../features/calm-crew";
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
    path: ROUTES.FORUM,
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
];

export default routes;
