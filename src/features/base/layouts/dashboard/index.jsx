import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/navbar";
import Root from "./style";
/**
 * Dashboard layout component.
 * Renders the common layout for the dashboard pages.
 */
const DashboardLayout = () => (
  <Root>
    <ResponsiveAppBar />
    <Outlet />
  </Root>
);
//
export default DashboardLayout;
