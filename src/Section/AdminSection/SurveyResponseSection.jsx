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

  return (
    <div>
      <SectionTitle
        heading="survey response"
        subHeading="here are all survey user based on per survey"
      />
      {responseItem.map((item, index) => (
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
                    Total Vote
                  </th>
                </tr>
              </thead>

              <tbody>
                {item.info.map((info, subIndex) => (
                  <tr key={subIndex}>
                    <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                      {subIndex + 1}
                    </td>
                    <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                      {info.userName}
                    </td>
                    <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                      {info.userEmail}
                    </td>
                    <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                      {info.timestamp}
                    </td>
                    <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                      {item.totalVotesPerItem}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurveyResponseSection;
