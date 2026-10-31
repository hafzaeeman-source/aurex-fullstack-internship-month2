
import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  registerUser,
  loginUser,
  getCurrentUser
} from "../services/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => sessionStorage.getItem("aurex-token")
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const checkAuth = async () => {
      if (!token) {
        if (active) setLoading(false);
        return;
      }

      try {
        const data = await getCurrentUser(token);

        if (active) {
          setUser(data.user);
        }
      } catch {
        if (active) {
          sessionStorage.removeItem("aurex-token");
          setToken(null);
          setUser(null);
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    checkAuth();

    return () => {
      active = false;
    };
  }, [token]);

  const register = async (userData) => {
    const data = await registerUser(userData);

    sessionStorage.setItem("aurex-token", data.token);
    setToken(data.token);
    setUser(data.user);

    return data;
  };

  const login = async (credentials) => {
    const data = await loginUser(credentials);

    sessionStorage.setItem("aurex-token", data.token);
    setToken(data.token);
    setUser(data.user);

    return data;
  };

  const logout = () => {
    sessionStorage.removeItem("aurex-token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
