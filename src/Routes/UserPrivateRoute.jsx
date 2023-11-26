import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import useUsers from '../Hooks/useUsers';
import { Navigate, useLocation } from 'react-router-dom';

const UserPrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isNormalUser, isPendingLoading] = useUsers();
  const location = useLocation();

  if (loading || isPendingLoading)
    return <progress className="progress w-56" />;

  if (user && isNormalUser) return children;

  return <Navigate to="/" state={{ from: location }} />;
};

UserPrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPrivateRoute;
