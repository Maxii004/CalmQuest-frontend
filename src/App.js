import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import Router from "./routes";
/**
 * Entry point in the react application. And also register the providers
 * store-provider :-The single Redux store in your application.
 * BrowserRouter :-  BrowserRouter is a router implementation that uses the HTML5 history API(pushState,
 * replaceState and the popstate event) to keep your UI in sync with the URL
 * ThemeProvider :- Common theme context for entire application
 * MuiThemeProvider :- It makes the theme available down the React tree thanks to React context
 * Router :- Entire application protected and public routes
 * ToastContainer :- The ToastContainer is just a simple component, which you can write text or even custom
 * JSX elements in to customize the toast even more
 * @returns Entry point in the react application. And also register the providers
 */
const App = () => (
  <BrowserRouter>
    <ToastContainer />
    <Router />
  </BrowserRouter>
);
//
export default App;
