import { useQuery } from '@tanstack/react-query';
import usePublicApi from '../../Hooks/usePublicApi';
import { Link } from 'react-router-dom';

const SurveyPage = () => {
  const publicApi = usePublicApi();

  const { data: allSurvey = [] } = useQuery({
    queryKey: ['allSurvey'],
    queryFn: async () => {
      const response = await publicApi.get('/survey/item');
      return response.data;
    },
  });

  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-4 m-8">
      {allSurvey.map((item, index) => {
        const { _id, title, description, category } = item;
        return (
          <div
            key={index}
            className="bg-colorFive text-colorFour p-4 rounded-lg font-poppins"
          >
            <h1 className="font-poppins text-3xl py-4">
              Survey title : {title}
            </h1>
            <h1 className="font-poppins text-2xl py-4">
              Description : {description}
            </h1>
            <h1 className="font-poppins text-xl py-4">Category : {category}</h1>
            <Link to={`/surveyPage/${_id}`}>
              <button className="bg-colorTwo font-poppins text-xl hover:bg-transparent border-2 border-colorTwo px-4 py-2 hover:text-colorTwo rounded-lg duration-300">
                See more
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SurveyPage;
