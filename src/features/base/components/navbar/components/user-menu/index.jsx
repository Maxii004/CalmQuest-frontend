/* eslint-disable react/no-array-index-key */
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
//
import useAuth from "../../../../../hooks/use-auth";
import useLogOut from "../../../../../hooks/use-logout";
import ROUTES from "../../../../constants/routes";
import COLORS from "../../../../constants/colors";
import PAGES from "../../../../constants/page-names";
/**
 * MenuItem list component
 */
const UserMenu = ({ handleCloseUserMenu, anchorElUser }) => {
  //
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const logOut = useLogOut();
  //
  const handleClose = () => {
    if (anchorElUser) {
      handleCloseUserMenu();
    }
  };
  //
  const handleLogOut = async () => {
    handleCloseUserMenu();
    await logOut();
    navigate(ROUTES.LOGIN);
  };
  //
  const getColor = (route) => {
    if (route === location.pathname) {
      return COLORS.MOONSTONE;
    }
    return COLORS.WHITE;
  };
  //
  return (
    <>
      <MenuItem
        key={PAGES.PROFILE}
        onClick={() => {
          handleClose();
          navigate(ROUTES.PROFILE.replace(":id", user?.userId));
        }}
        sx={{
          bgcolor: COLORS.CRYSTAL,
          color: getColor(ROUTES.PROFILE.replace(":id", user?.userId)),
          transition: {
            xs: "padding-left 0.5s ease",
            md: "none",
          },
          paddingLeft: {
            xs: 3,
            md: 2,
          },
          fontSize: {
            xs: "1.5rem",
            md: "1rem",
          },
          "&.MuiMenuItem-root:hover": {
            color: COLORS.MOONSTONE,
            bgcolor: COLORS.CRYSTAL,
            pl: {
              xs: 6,
              md: 2,
            },
          },
        }}
      >
        {PAGES.PROFILE}
      </MenuItem>
      <MenuItem
        key={"logout"}
        onClick={handleLogOut}
        sx={{
          bgcolor: COLORS.CRYSTAL,
          color: COLORS.WHITE,
          transition: {
            xs: "padding-left 0.5s ease",
            md: "none",
          },
          paddingLeft: {
            xs: 3,
            md: 2,
          },
          fontSize: {
            xs: "1.5rem",
            md: "1rem",
          },
          "&.MuiMenuItem-root:hover": {
            color: COLORS.MOONSTONE,
            bgcolor: COLORS.CRYSTAL,
            pl: {
              xs: 6,
              md: 2,
            },
          },
        }}
      >
        Sign Out
      </MenuItem>
    </>
  );
};
//
export default UserMenu;
