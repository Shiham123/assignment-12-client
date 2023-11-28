import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import useSecureApi from '../../Hooks/useSecureApi';
import SectionTitle from '../../SubSection/SectionTitle';

const SurveyResponse = () => {
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
        subHeading="Here are your create response from various users"
      />

      {emailRes.map((item, index) => (
        <div className="mt-12" key={index}>
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
                    Vote
                  </th>
                  <th className="text-colorTwo font-poppins tracking-wider">
                    Vote
                  </th>
                </tr>
              </thead>

              <tbody>
                {item.info.map((info, subIndex) => {
                  const { userName, userEmail, timestamp, title } = info;

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
                        {item.totalVotesPerItem}
                      </td>
                      <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                        {title}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurveyResponse;
