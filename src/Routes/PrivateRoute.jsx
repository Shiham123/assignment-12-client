import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <progress className="progress w-56" />;

  if (user) return children;

  return <Navigate to="/loginPage" state={{ from: location }} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
