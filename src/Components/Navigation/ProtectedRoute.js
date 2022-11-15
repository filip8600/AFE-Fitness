import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  userRole,
  AllowedRoles,
  redirectPath = "/",
  children,
}) => {
  if (!AllowedRoles.includes(userRole)) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
