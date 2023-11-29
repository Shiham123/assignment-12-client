import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useSecureApi from './useSecureApi';

const useProUser = () => {
  const { user } = useAuth();
  const secureApi = useSecureApi();

  const { data: proUser = [], isPending: loadingProUser } = useQuery({
    queryKey: [user?.email, 'proUser'],
    queryFn: async () => {
      const response = await secureApi.get(`/users/pro/${user.email}`);
      return response.data?.isProUser;
    },
  });
  return [proUser, loadingProUser];
};

export default useProUser;
