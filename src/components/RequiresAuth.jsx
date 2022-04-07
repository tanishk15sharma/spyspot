import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { auth } = useAuth();

  return (
    <div>
      {auth.isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </div>
  );
};

export { RequiresAuth };
