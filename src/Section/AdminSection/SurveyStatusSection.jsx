import { useQuery } from '@tanstack/react-query';
import useSecureApi from '../../Hooks/useSecureApi';
import SectionTitle from '../../SubSection/SectionTitle';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const SurveyStatusSection = () => {
  const secureApi = useSecureApi();

  const { data: surveyItems = [], refetch } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const response = await secureApi.get('/survey');
      return response.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const surveyUnpublish = (item) => {
    const { _id } = item;
    Swal.fire({
      title: 'Enter your message',
      input: 'text',
      inputPlaceholder: 'Type your message here...',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: (message) => {
        if (!message) {
          Swal.showValidationMessage('Message cannot be empty');
        }
        return message;
      },
    })
      .then((result) => {
        const enteredMessage = result.value;
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Message Submitted',
            text: `You entered: ${result.value}`,
            icon: 'success',
          });
        }

        const feedback = {
          enteredMessage,
          status: 'unpublish',
        };
        secureApi
          .put(`/survey/${_id}`, feedback)
          .then((response) => {
            console.log(response);
            refetch();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
      });

    refetch();
  };

  const surveyPublish = (item) => {
    const { _id } = item;
    Swal.fire({
      title: `Are you sure? publish`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6c99e3',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes Publish',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Published',
          text: `You Published successfully`,
          icon: 'success',
        });

        const publishSurvey = {
          status: 'published',
        };

        secureApi
          .patch(`/survey/${_id}`, publishSurvey)
          .then((response) => {
            console.log(response);
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Survey status"
        subHeading="publish or unpublish survey"
      />

      <div className="overflow-x-hidden">
        <table className="table">
          <thead>
            <tr className="bg-colorFive font-cinzel text-xl">
              <th className="text-colorTwo font-poppins tracking-wider">
                Number
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                category
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                title
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                Publish
              </th>
              <th className="text-colorTwo font-poppins tracking-wider">
                UnPublish
              </th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {surveyItems.map((item, index) => {
              const { _id, category, title } = item;
              return (
                <tr key={_id} className="m-4">
                  <th className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {index + 1}
                  </th>
                  <th className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {category}
                  </th>
                  <th className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    {title}
                  </th>
                  <th className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    <button
                      onClick={() => surveyPublish(item)}
                      className="font-cinzel text-2xl text-colorFour font-semibold bg-colorFive p-4 rounded-lg"
                    >
                      Publish
                    </button>
                  </th>
                  <th className="font-cinzel text-2xl text-colorFour font-semibold py-8 border-2 border-colorTwo">
                    <button
                      onClick={() => surveyUnpublish(item)}
                      className="font-cinzel text-2xl text-colorFour font-semibold bg-colorFive p-4 rounded-lg"
                    >
                      UnPublish
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyStatusSection;
