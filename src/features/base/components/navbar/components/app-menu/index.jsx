// /* eslint-disable react/no-array-index-key */
// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Menu, MenuItem } from '@mui/material';
// //
// import ROUTES from '../../../../constants/routes';
// import COLORS from '../../../../constants/colors';
// import PAGES from '../../../../constants/page-names';
// /**
//  * MenuItem list component
//  */
// const AppMenu = ({ handleCloseNavMenu, anchorElNav }) => {
//   //
//   const navigate = useNavigate();
//   const location = useLocation();
//   //
//   const [anchorEl, setAnchorEl] = useState(null);
//   //
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   //
//   const handleClose = () => {
//     setAnchorEl(null);
//     if (anchorElNav) {
//       handleCloseNavMenu();
//     }
//   };
//   //
//   const pages = [
//     { text: PAGES.ZENBUD, route: ROUTES.CHATBOT },
//     { text: PAGES.CALMCREW, route: ROUTES.FORUM },
//     { text: PAGES.JOT_IT, route: ROUTES.JOURNALS },
//   ];
//   //
//   const getColor = (route) => {
//     if (route === location.pathname) {
//       return COLORS.ELECTRIC_BLUE;
//     }
//     return COLORS.WHITE;
//   };
//   //
//   return (
//     <>
//       {pages.map((page, text) => (
//         <MenuItem
//           key={text}
//           onClick={() => {
//             navigate(page.route);
//             handleClose();
//           }}
//           sx={{
//             bgcolor: COLORS.NAVY_BLUE,
//             color: getColor(page.route),
//             transition: {
//               xs: 'padding-left 0.5s ease',
//               md: 'none',
//             },
//             padding: {
//               xs: 3,
//               md: 2,
//             },
//             fontSize: {
//               xs: '1.5rem',
//               md: '1rem',
//             },
//             '&.MuiMenuItem-root:hover': {
//               color: COLORS.ELECTRIC_BLUE,
//               bgcolor: COLORS.NAVY_BLUE,
//               pl: {
//                 xs: 6,
//                 md: 2,
//               },
//             },
//           }}
//         >
//           {page.text}
//         </MenuItem>
//       ))}
//     </>
//   );
// };
// //
// export default AppMenu;
