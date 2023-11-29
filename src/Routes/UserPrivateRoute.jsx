import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import useUsers from '../Hooks/useUsers';
import { Navigate, useLocation } from 'react-router-dom';
import useProUser from '../Hooks/useProUser';

const UserPrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isNormalUser, isPendingLoading] = useUsers();
  const [proUser, loadingProUser] = useProUser();

  const location = useLocation();

  if (loading || isPendingLoading || loadingProUser)
    return <progress className="progress w-56" />;

  if ((user && isNormalUser) || proUser) return children;

  return <Navigate to="/" state={{ from: location }} />;
};

UserPrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPrivateRoute;
