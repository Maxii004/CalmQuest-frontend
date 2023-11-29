import { memo } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import ROUTES from "../constants/routes";

const AuthWrapper = memo(({ children }) => {
  const { auth } = useAuth();
  //
  return auth?.accessToken ? children : <Navigate to={ROUTES.WELCOME} />;
});

export default AuthWrapper;
