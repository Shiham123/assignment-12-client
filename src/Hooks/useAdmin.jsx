import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useSecureApi from './useSecureApi';

const useAdmin = () => {
  const { user } = useAuth();
  const secureApi = useSecureApi();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const response = await secureApi.get(`/users/admin/${user.email}`);
      return response.data?.isAdmin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
