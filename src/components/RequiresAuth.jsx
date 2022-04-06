import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const RequiresAuth = ({ children }) => {
  const { authState } = useAuth();
  console.log(authState.isLoggedIn);
  return (
    <div>
      {authState.isLoggedIn ? children : <Navigate to="/login" replace />}
    </div>
  );
};

export { RequiresAuth };
