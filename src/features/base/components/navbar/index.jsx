import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useAuth from "../../../hooks/use-auth";
import ROUTES from "../../constants/routes";
import COLORS from "../../constants/colors";
import { AppMenu, UserMenu } from "./components";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  //
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //
  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = async () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ bgcolor: COLORS.CRYSTAL }}>
      <Container maxWidth="inherit">
        <Toolbar disableGutters>
          {/** Logo in Nav bar for devices md and above */}
          <Button
            onClick={() =>
              navigate(ROUTES.HOME, {
                state: { from: location },
                replace: true,
              })
            }
            sx={{
              display: { xs: "none", md: "flex" },
              ":hover": {
                backgroundColor: COLORS.CRYSTAL,
              },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Oregano, cursive",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: COLORS.MOONSTONE,
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              CalmQuest
            </Typography>
          </Button>
          {/** App Menu for devices sm and below*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
                "& .MuiMenu-paper": {
                  mt: 2,
                  ml: 2,
                  position: "fixed",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  maxHeight: "100%",
                  textAlign: "center",
                  zIndex: 999,
                  backgroundColor: COLORS.CRYSTAL,
                  color: "white",
                  ":hover": {
                    cursor: "pointer",
                  },
                },
              }}
            >
              <MenuItem sx={{ justifyContent: "right" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleCloseNavMenu}
                  sx={{ color: COLORS.WHITE, ":hover": { color: COLORS.RED } }}
                >
                  <CloseIcon />
                </IconButton>
              </MenuItem>
              <AppMenu
                handleCloseNavMenu={handleCloseNavMenu}
                anchorElNav={anchorElNav}
              />
            </Menu>
          </Box>
          {/** Logo in Nav bar for devices sm and below */}
          <Button
            onClick={() =>
              navigate(ROUTES.HOME, {
                state: { from: location },
                replace: true,
              })
            }
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              ":hover": {
                backgroundColor: COLORS.CRYSTAL,
              },
            }}
          >
            <Typography
              variant="h5"
              noWrap
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Oregano, cursive",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: COLORS.MOONSTONE,
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              CalmQuest
            </Typography>
          </Button>
          {/** App Menu for devices md and above */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              textTransform: "none",
            }}
          >
            <AppMenu />
          </Box>
          {/** User menu for devices md and above */}
          <Box>
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                ":hover": {
                  backgroundColor: COLORS.CRYSTAL,
                },
              }}
            >
              <Avatar>{user?.name?.charAt(0)}</Avatar>
            </IconButton>
            <Menu
              sx={{
                mt: "45px",
                ".MuiList-root": {
                  bgcolor: COLORS.CRYSTAL,
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <UserMenu
                handleCloseUserMenu={handleCloseUserMenu}
                anchorElUser={anchorElUser}
              />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
