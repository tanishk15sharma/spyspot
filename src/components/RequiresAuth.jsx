import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const RequiresAuth = ({ children }) => {
  const { auth } = useAuth();
  console.log(auth.isLoggedIn);
  return (
    <div>{auth.isLoggedIn ? children : <Navigate to="/login" replace />}</div>
  );
};

export { RequiresAuth };
