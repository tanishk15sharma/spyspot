import { createContext, useContext, useState, useEffect } from "react";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {
          isLoggedIn: false,
          encodedToken: "",
        }
  );
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthContextProvider, useAuth };
