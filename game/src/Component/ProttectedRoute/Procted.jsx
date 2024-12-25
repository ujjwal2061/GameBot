import { Navigate } from "react-router-dom";
import { useFirebaseAuth } from "../../Auth/Fireauth";

const Protected = ({ children }) => {
  const { user } = useFirebaseAuth();

  if (!user) {
    return <Navigate to="/"  />;
  }

  return <>{children}</>;
};

export default Protected;
