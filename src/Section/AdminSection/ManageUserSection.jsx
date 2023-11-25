import { useQuery } from '@tanstack/react-query';
import useSecureApi from '../../Hooks/useSecureApi';
import SectionTitle from '../../SubSection/SectionTitle';
import Swal from 'sweetalert2';

const ManageUserSection = () => {
  const secureApi = useSecureApi();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await secureApi.get('/users');
      return response.data;
    },
  });

  const makeAdmin = (item) => {
    const { _id, username } = item;
    Swal.fire({
      title: `Are you sure make ${username} admin?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#6c99e3',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes Make admin',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedAdmin = { role: 'admin' };
        secureApi
          .patch(`/users/admin/${_id}`, updatedAdmin)
          .then((response) => {
            if (response.data.matchedCount) {
              Swal.fire({
                title: 'CHANGED',
                text: `You Changed ${username} this user`,
                icon: 'success',
              });
              refetch();
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const makeSurveyor = (item) => {
    const { _id, username } = item;
    Swal.fire({
      title: `Are you sure make ${username} Surveyor?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#6c99e3',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes Make Surveyor',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedAdmin = { role: 'surveyor' };
        secureApi
          .patch(`/users/admin/${_id}`, updatedAdmin)
          .then((response) => {
            if (response.data.matchedCount) {
              Swal.fire({
                title: 'CHANGED',
                text: `You Changed ${username} to surveyor`,
                icon: 'success',
              });
              refetch();
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const deleteUser = (id, name) => {
    Swal.fire({
      title: `Are you sure? delete ${name} user`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6c99e3',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'DELETED',
          text: `You deleted ${name} this user`,
          icon: 'success',
        });

        secureApi
          .delete(`/users/${id}`)
          .then((response) => {
            console.log(response.data);
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

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
                    <button
                      onClick={() => deleteUser(_id, username)}
                      className="font-cinzel text-2xl text-colorFour font-semibold "
                    >
                      Delete
                    </button>
                  </td>
                  <td className="border-2 border-colorTwo">
                    {role === 'admin' ? (
                      <button
                        onClick={() => {
                          makeSurveyor(item);
                        }}
                        className="font-cinzel text-2xl text-colorFour font-semibold"
                      >
                        {role}
                      </button>
                    ) : role === 'surveyor' ? (
                      <button
                        onClick={() => makeAdmin(item)}
                        className="font-cinzel text-2xl text-colorFour font-semibold"
                      >
                        {role}
                      </button>
                    ) : (
                      <button className="font-cinzel text-2xl text-colorFour font-semibold">
                        {role}
                      </button>
                    )}
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
