import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import usePublicApi from '../../Hooks/usePublicApi';

import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import useAuth from '../../Hooks/useAuth';
import { useRef, useState } from 'react';
import useSecureApi from '../../Hooks/useSecureApi';
import Swal from 'sweetalert2';

const SurveyDetailsPage = () => {
  const { id } = useParams();
  const publicApi = usePublicApi();
  const { user } = useAuth();
  const [liked, setLiked] = useState('');
  const formRef = useRef();
  const secureApi = useSecureApi();
  const navigate = useNavigate();

  const { data: perItems = [] } = useQuery({
    queryKey: ['perSurvey', id],
    queryFn: async () => {
      const response = await publicApi.get(`/survey/details/${id}`);
      return response.data;
    },
  });

  const { _id, title, description, category, timestamp, question, options } =
    perItems;

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const report = formData.get('report');
    const vote = formData.get('option');
    const surveyInfo = {
      report,
      vote,
      userEmail: user?.email,
      userName: user?.displayName,
      surveyItemId: _id,
      title: title,
      category: category,
    };

    secureApi
      .post('/visitedSurvey', surveyInfo)
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          Swal.fire({
            title: 'Successfully added',
            text: 'You already survey this item',
            icon: 'success',
          });
        }
        formRef.current.reset();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: 'Already added item',
          text: 'You already survey this item',
          icon: 'question',
        });
      });
  };

  return (
    <div className="flex justify-center items-center text-3xl flex-col gap-8 my-12 bg-colorTwo border-2 border-colorOne m-4 p-4 rounded-lg">
      <h1 className="font-semibold capitalize font-poppins text-3xl">
        Survey title : {title}
      </h1>
      <p className="font-semibold capitalize font-poppins text-xl">
        Survey Description : {description}
      </p>
      <p className="font-semibold capitalize font-poppins text-xl">
        Survey crated data : {timestamp}
      </p>
      <h2 className="font-semibold capitalize font-poppins text-xl">
        Survey Category : {category}
      </h2>
      <form
        onSubmit={onSubmit}
        ref={formRef}
        className="border-2 border-black p-8 rounded-lg"
      >
        <h2 className="font-semibold capitalize font-poppins text-xl">
          Survey Question : {question}
        </h2>

        {options && (
          <div className="flex gap-8 my-8">
            <label htmlFor="yes">{options[0]}</label>
            <input type="radio" name="option" id="yes" value={options[0]} />

            <label htmlFor="no">{options[1]}</label>
            <input type="radio" name="option" id="no" value={options[1]} />
          </div>
        )}

        <div className="my-8">
          <label htmlFor="" className="text-3xl font-poppins">
            Report Survey
          </label>
          <input
            type="text"
            className="bg-colorThree text-xl font-poppins mx-4 outline-none border-2 border-colorFive rounded-lg p-4"
            placeholder="Write here your report"
            name="report"
          />
        </div>

        <button
          type="submit"
          className="bg-colorFive  font-poppins hover:bg-transparent border-2 border-colorFive text-colorTwo hover:text-colorFour duration-300 p-4 rounded-lg"
        >
          Submit Survey
        </button>
      </form>
      {/* Liked section */}
      <h1>Please like or dislike to help our create better survey</h1>
      <div className="flex my-8">
        <AiOutlineLike
          size={50}
          className={`cursor-pointer ${liked === 'liked' ? 'hidden' : ''}`}
          onClick={() => setLiked('liked')}
        />
        <AiFillLike
          size={50}
          className={`cursor-pointer ${liked === 'liked' ? '' : 'hidden'}`}
        />

        {/* disliked */}
        <AiOutlineDislike
          size={50}
          className={`cursor-pointer ${liked === 'disliked' ? 'hidden' : ''}`}
          onClick={() => setLiked('disliked')}
        />
        <AiFillDislike
          size={50}
          className={`cursor-pointer ${liked === 'disliked' ? '' : 'hidden'}`}
        />
      </div>
    </div>
  );
};

export default SurveyDetailsPage;
