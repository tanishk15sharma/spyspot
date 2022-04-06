import { createContext, useContext, useReducer } from "react";

const authContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOAD":
      return { ...state, loading: true };
    case "USER_LOAD_SUCCESS":
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case "USER_LOAD_FALIUR":
      return { ...state, isLoggedIn: false, loading: false };
  }
};

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    loading: false,
    user: null,
  });
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthContextProvider, useAuth };
