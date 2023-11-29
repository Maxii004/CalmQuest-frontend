import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "./use-auth";
import ROUTES from "../base/constants/routes";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const refresh = async () => {
    try {
      const response = await axios.get("/auth/refresh");
      setAuth((prev) => {
        console.log("prev", JSON.stringify(prev));
        console.log("response.data", response?.data);
        return { ...prev, accessToken: response.data.accessToken };
      });
      return response.data.accessToken;
    } catch (err) {
      navigate(ROUTES.LOGIN, { state: { from: location } }, { replace: true });
    }
  };
  return refresh;
};

export default useRefreshToken;
