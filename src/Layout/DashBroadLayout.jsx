import AdminPanel from '../DashBroad Panel/AdminPanel';
import SurveyorPanel from '../DashBroad Panel/SurveyorPanel';
import useAdmin from '../Hooks/useAdmin';

const DashBroadLayout = () => {
  const [isAdmin] = useAdmin();

  return isAdmin ? <AdminPanel /> : <SurveyorPanel />;
};

export default DashBroadLayout;
