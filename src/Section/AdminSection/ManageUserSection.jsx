import { useQuery } from '@tanstack/react-query';
import useSecureApi from '../../Hooks/useSecureApi';

const ManageUserSection = () => {
  const secureApi = useSecureApi();

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await secureApi.get('/users');
      return response.data;
    },
  });

  return <div>this is manage user</div>;
};

export default ManageUserSection;
