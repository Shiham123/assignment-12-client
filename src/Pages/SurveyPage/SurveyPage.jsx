import { useQuery } from '@tanstack/react-query';
import usePublicApi from '../../Hooks/usePublicApi';

const SurveyPage = () => {
  const publicApi = usePublicApi();

  const { data: allSurvey = [] } = useQuery({
    queryKey: ['allSurvey'],
    queryFn: async () => {
      const response = await publicApi.get('/survey/item');
      console.log(response);
      return response.data;
    },
  });

  console.log(allSurvey);

  return <div>this is survey page</div>;
};

export default SurveyPage;
