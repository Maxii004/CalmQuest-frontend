import axios from "../../api/axios";
import useAuth from "./use-auth";

const useLogout = () => {
  const { setAuth } = useAuth();
  //
  const logout = async () => {
    setAuth({});
    try {
      await axios("/auth/logout");
    } catch (err) {
      console.error(err);
    }
  };
  //
  return logout;
};

export default useLogout;
