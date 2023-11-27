import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import useSecureApi from '../../Hooks/useSecureApi';
import SectionTitle from '../../SubSection/SectionTitle';

const AdminFeedbackSection = () => {
  const { user } = useAuth();
  const secureApi = useSecureApi();

  const { data: adminRes = [] } = useQuery({
    queryKey: ['adminRes', user?.email],
    queryFn: async () => {
      const response = await secureApi.get(`/adminResponse/${user.email}`);
      return response.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="Admin Response"
        subHeading="Here are all rejected item from admin"
      />

      <div className="overflow-x-hidden">
        <table className="table">
          <thead>
            <tr className="bg-colorFive font-cinzel text-xl">
              <th className="text-colorTwo font-poppins tracking-wider">
                Number
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Title
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Category
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Surveyor email
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Serveyor name
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                message
              </th>
            </tr>
          </thead>
          {/* table body */}
          <tbody>
            {adminRes.map((item, index) => {
              const {
                _id,
                title,
                category,
                surveyorEmail,
                surveyorName,
                message,
              } = item;
              const modalId = `my_modal_${index + 1}`;
              return (
                <tr key={_id}>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {index + 1}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {title}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {category}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {surveyorEmail}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {surveyorName}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    <button
                      className="bg-colorFive hover:bg-transparent border-2 border-colorFive text-colorFour duration-300 p-4 rounded-lg"
                      onClick={() =>
                        document.getElementById(modalId).showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog id={modalId} className="modal">
                      <div className="modal-box">
                        <h3 className="font-poppins text-lg">
                          Admin Send this message for yor :{' '}
                          <span className="font-bold">{message}</span>
                        </h3>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
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

export default AdminFeedbackSection;
