import AdminPanel from '../DashBroad Panel/AdminPanel';
import UserPanel from '../DashBroad Panel/UserPanel';
import useAdmin from '../Hooks/useAdmin';

const DashBroadLayout = () => {
  const [isAdmin] = useAdmin();

  return isAdmin ? <AdminPanel /> : <UserPanel />;
};

export default DashBroadLayout;
