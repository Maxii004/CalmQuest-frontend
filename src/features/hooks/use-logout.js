import { toast } from "react-toastify";
import axios from "../../api/axios";
import useAuth from "./use-auth";

const useLogOut = () => {
  const { setAuth } = useAuth();
  //
  const logout = async () => {
    setAuth({});
    try {
      await axios("/auth/logout");
    } catch (err) {
      console.error(err);
      toast.error(err?.message);
    }
  };
  //
  return logout;
};

export default useLogOut;
