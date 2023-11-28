import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../SubSection/SectionTitle';
import usePublicApi from '../../Hooks/usePublicApi';

const PaymentSection = () => {
  const publicApi = usePublicApi();

  const { data: pro = [] } = useQuery({
    queryKey: ['pro'],
    queryFn: async () => {
      const response = await publicApi.get('/pro');
      return response.data;
    },
  });

  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Pro Users" />

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
                Price
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Transaction id
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {pro.map((user, index) => {
              const { transactionId, price, name, email, status } = user;
              return (
                <tr key={index}>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {index + 1}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {name}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {email}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {price}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {transactionId}
                  </td>
                  <td className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {status}
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

export default PaymentSection;
