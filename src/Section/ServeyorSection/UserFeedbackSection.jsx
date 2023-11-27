import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import useSecureApi from '../../Hooks/useSecureApi';
import SectionTitle from '../../SubSection/SectionTitle';

const UserFeedbackSection = () => {
  const { user } = useAuth();
  const secureApi = useSecureApi();

  const { data: emailRes = [] } = useQuery({
    queryKey: ['surveyUserRes', user?.email],
    queryFn: async () => {
      const response = await secureApi.get(`/surveyorResponse/${user?.email}`);
      return response.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="User Response"
        subHeading="Here are your create response from various user"
      />

      {emailRes.map((item, index) => {
        return (
          <div className="mt-12" key={index}>
            <SectionTitle heading={`User response ${index + 1}`} />

            <div className="overflow-x-hidden">
              <table className="table">
                <thead>
                  <tr className="bg-colorFive font-cinzel text-xl">
                    <th className="text-colorTwo font-poppins tracking-wider">
                      Number
                    </th>
                    <th className="text-colorTwo font-poppins tracking-wider">
                      Name
                    </th>
                    <th className="text-colorTwo font-poppins tracking-wider">
                      Email
                    </th>
                    <th className="text-colorTwo font-poppins tracking-wider">
                      Time
                    </th>

                    <th className="text-colorTwo font-poppins tracking-wider">
                      Report
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {item.info.map((info, subIndex) => {
                    const { report, userName, userEmail, timestamp } = info;
                    const modalId = `my_modal_${subIndex + 1}`;

                    return (
                      <tr key={subIndex}>
                        <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                          {subIndex + 1}
                        </td>
                        <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                          {userName}
                        </td>
                        <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                          {userEmail}
                        </td>
                        <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                          {timestamp}
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
                                User Send this message for yor :{' '}
                                <span className="font-bold">{report}</span>
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
      })}
    </div>
  );
};

export default UserFeedbackSection;
