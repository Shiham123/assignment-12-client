import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useSecureApi from './useSecureApi';

const useUsers = () => {
  const { user } = useAuth();
  const secureApi = useSecureApi();

  const { data: isNormalUser = [], isPending: isPendingLoading } = useQuery({
    queryKey: [user?.email, 'isNormalUser'],
    queryFn: async () => {
      const response = await secureApi.get(`/users/normal/${user.email}`);
      return response.data?.isNormalUser;
    },
  });
  return [isNormalUser, isPendingLoading];
};

export default useUsers;
