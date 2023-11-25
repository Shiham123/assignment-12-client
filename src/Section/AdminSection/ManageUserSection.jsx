import { useQuery } from '@tanstack/react-query';
import useSecureApi from '../../Hooks/useSecureApi';
import SectionTitle from '../../SubSection/SectionTitle';

const ManageUserSection = () => {
  const secureApi = useSecureApi();

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await secureApi.get('/users');
      return response.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="Mange users"
        subHeading="All logged in user or created user"
      />

      <div className="overflow-x-hidden">
        <table className="table">
          <thead>
            <tr className="bg-colorFive font-cinzel text-xl">
              <th className="text-colorTwo font-poppins tracking-wider">
                Number
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                User name
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Email
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Role
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Delete
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Change role
              </th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {users.map((item, index) => {
              console.log(item);
              const { _id, username, role, email } = item;
              return (
                <tr key={_id} className="m-4">
                  <th className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {index + 1}
                  </th>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {username}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {email}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {role}
                  </td>
                  <td className="border-2 border-colorTwo">
                    <button className="font-cinzel text-2xl text-colorFour font-semibold ">
                      Delete
                    </button>
                  </td>
                  <td className="border-2 border-colorTwo">
                    <button className="font-cinzel text-2xl text-colorFour font-semibold">
                      Change role
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserSection;
