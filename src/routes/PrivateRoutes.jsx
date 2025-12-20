import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-infinity loading-xl"></span>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/register"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoutes;
