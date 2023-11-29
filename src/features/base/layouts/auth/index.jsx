import { Outlet } from "react-router-dom";
//
import Root from "./style";
/**
 * Layout component for all authentication screens
 * @returns {Root}
 */
const AuthLayout = () => (
  <Root>
    <Outlet />
  </Root>
);
//
export default AuthLayout;
