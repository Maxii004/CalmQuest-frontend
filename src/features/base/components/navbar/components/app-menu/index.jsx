/* eslint-disable react/no-array-index-key */
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
//
import ROUTES from "../../../../constants/routes";
import COLORS from "../../../../constants/colors";
import PAGES from "../../../../constants/page-names";
/**
 * MenuItem list component
 */
const AppMenu = ({ handleCloseNavMenu, anchorElNav }) => {
  //
  const navigate = useNavigate();
  const location = useLocation();
  //
  const handleClose = () => {
    if (anchorElNav) {
      handleCloseNavMenu();
    }
  };
  //
  const pages = [
    { text: PAGES.ZENBUD, route: ROUTES.ZENBUD },
    { text: PAGES.CALMCREW, route: ROUTES.CALMCREW },
    // { text: PAGES.JOT_IT, route: ROUTES.JOURNALS },
  ];
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
      {pages.map((page, text) => (
        <MenuItem
          key={text}
          onClick={() => {
            navigate(page.route);
            handleClose();
          }}
          sx={{
            bgcolor: COLORS.CRYSTAL,
            color: getColor(page.route),
            transition: {
              xs: "padding-left 0.5s ease",
              md: "none",
            },
            padding: {
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
          {page.text}
        </MenuItem>
      ))}
    </>
  );
};
//
export default AppMenu;
