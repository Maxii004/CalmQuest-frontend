import { useRoutes } from "react-router-dom";
//
import routes from "./routes";
/**
 * Register all the route using useRoute hook
 */
const Router = () => useRoutes(routes);
//
export default Router;
