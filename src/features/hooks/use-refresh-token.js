import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "./use-auth";
import ROUTES from "../base/constants/routes";
import { jwtDecode } from "jwt-decode";

const useRefreshToken = () => {
  const { setAuth, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const refresh = async () => {
    try {
      const response = await axios.get("/auth/refresh");
      setAuth((prev) => {
        return { ...prev, accessToken: response.data.accessToken };
      });
      setUser({ userId: jwtDecode(response?.data?.accessToken)?.userId });
      return response.data.accessToken;
    } catch (err) {
      navigate(ROUTES.LOGIN, { state: { from: location } }, { replace: true });
    }
  };
  return refresh;
};

export default useRefreshToken;
