import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Store from "../Store/ContextAPI";
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(Store);

  if (!user) {
    return <Navigate to="/LoginPage" replace />;
  }

  return children;
};

export default ProtectedRoute;
