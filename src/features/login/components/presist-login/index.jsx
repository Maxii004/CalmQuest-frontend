import { useState, useEffect } from "react";
import useAuth from "../../../hooks/use-auth";
import useRefreshToken from "../../../hooks/use-refresh-token";

const PersistLogin = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    // Avoids unwanted call to verifyRefreshToken
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return !isLoading && children;
};

export default PersistLogin;
