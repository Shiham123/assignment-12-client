import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import usePublicApi from '../../Hooks/usePublicApi';

const SurveyDetailsPage = () => {
  const { id } = useParams();
  const publicApi = usePublicApi();

  const { data: perItems = [] } = useQuery({
    queryKey: ['perSurvey', id],
    queryFn: async () => {
      const response = await publicApi.get(`/survey/details/${id}`);
      return response.data;
    },
  });

  console.log(perItems);

  const { title, description, category, timestamp } = perItems;

  return (
    <div className="flex justify-center items-center text-3xl flex-col gap-8 my-12">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{timestamp}</p>
      <h2>{category}</h2>
    </div>
  );
};

export default SurveyDetailsPage;
