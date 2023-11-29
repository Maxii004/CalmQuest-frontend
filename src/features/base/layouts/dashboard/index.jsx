import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/navbar";
/**
 * Dashboard layout component.
 * Renders the common layout for the dashboard pages.
 */
const DashboardLayout = () => {
  //
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};
//
export default DashboardLayout;
