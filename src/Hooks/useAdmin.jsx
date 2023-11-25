import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useSecureApi from './useSecureApi';

const useAdmin = () => {
  const { user } = useAuth();
  const secureApi = useSecureApi();

  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const response = await secureApi.get(`/users/admin/${user.email}`);
      console.log(response);
      return response.data?.isAdmin;
    },
  });

  return [isAdmin];
};

export default useAdmin;
