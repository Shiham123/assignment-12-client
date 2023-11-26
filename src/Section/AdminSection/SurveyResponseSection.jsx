import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../SubSection/SectionTitle';
import useSecureApi from '../../Hooks/useSecureApi';

const SurveyResponseSection = () => {
  const secureApi = useSecureApi();

  const { data: responseItem = [] } = useQuery({
    queryKey: ['responseItem'],
    queryFn: async () => {
      const response = await secureApi('/responseItem');
      return response.data;
    },
  });

  // const { detailedInformation, totalYesVotes } = responseItem;

  const userInfo = responseItem.detailedInformation || [];
  const totalVote = responseItem.totalYesVotes;

  return (
    <div>
      <SectionTitle
        heading="Survey response"
        subHeading="all survey here by added various user"
      />

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
                Total Vote
              </th>
            </tr>
          </thead>

          {/*  */}
          <tbody>
            {userInfo.map((item, index) => {
              const { userName, userEmail, timestamp } = item;
              return (
                <tr key={index}>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {index + 1}
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
                    {totalVote}
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

export default SurveyResponseSection;
