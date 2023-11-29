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
import useProUser from '../../Hooks/useProUser';

const SurveyDetailsPage = () => {
  const { id } = useParams();
  const publicApi = usePublicApi();
  const { user } = useAuth();
  const [like, setLike] = useState('');
  const formRef = useRef();
  const secureApi = useSecureApi();
  const navigate = useNavigate();
  const [proUser] = useProUser();

  const { data: perItems = [], refetch } = useQuery({
    queryKey: ['perSurvey', id],
    queryFn: async () => {
      const response = await publicApi.get(`/survey/details/${id}`);
      return response.data;
    },
  });

  const {
    _id,
    title,
    description,
    category,
    timestamp,
    question,
    options,
    comment,
    liked,
    disliked,
  } = perItems;

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

  const handleComment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get('comment');

    const proUserComment = { comment };

    publicApi
      .put(`/survey/details/${_id}`, proUserComment)
      .then((response) => {
        console.log(response);

        if (response.data.matchedCount || response.data.matchedCount) {
          Swal.fire({
            title: 'Comment added',
            icon: 'success',
          });
          formRef.current.reset();
          refetch();
        }
      })
      .catch((error) => console.log(error));
  };

  const likeSurvey = () => {
    publicApi
      .patch(`/like/${_id}`)
      .then((response) => {
        console.log(response);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  const dislikeSurvey = () => {
    publicApi
      .patch(`/dislike/${_id}`)
      .then((response) => {
        console.log(response);
        refetch();
      })
      .catch((error) => console.log(error));
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
        <div className="flex justify-center items-center mx-12">
          {liked && (
            <p className="bg-colorFour text-colorThree rounded-full p-1 text-[7px]">
              {liked}
            </p>
          )}
          <AiOutlineLike
            size={50}
            className={`cursor-pointer ${like === 'like' ? 'hidden' : ''}`}
            onClick={() => {
              setLike('like');
              likeSurvey();
            }}
          />
          <AiFillLike
            size={50}
            className={`cursor-pointer ${like === 'like' ? '' : 'hidden'}`}
          />
        </div>

        {/* disliked */}
        <div className="flex justify-center items-center mx-12">
          {disliked && (
            <p className="bg-colorFour text-colorThree rounded-full p-1 text-[7px]">
              {disliked}
            </p>
          )}
          <AiOutlineDislike
            size={50}
            className={`cursor-pointer ${like === 'dislike' ? 'hidden' : ''}`}
            onClick={() => {
              setLike('dislike');
              dislikeSurvey();
            }}
          />
          <AiFillDislike
            size={50}
            className={`cursor-pointer ${like === 'dislike' ? '' : 'hidden'}`}
          />
        </div>
      </div>

      {/*  */}

      {proUser === true && (
        <form
          onSubmit={handleComment}
          ref={formRef}
          className="flex flex-col justify-center items-center border-2 border-colorFour p-8 rounded-lg"
        >
          <label htmlFor="" className="font-semibold">
            Comment :{' '}
          </label>
          <input
            className="bg-colorThree text-xl font-poppins mx-4 outline-none border-2 border-colorFive rounded-lg p-4"
            type="text"
            placeholder="type your comment here"
            name="comment"
          />
          <button className="border-2 border-colorFive rounded-lg bg-colorFive hover:bg-transparent p-4 m-4 duration-300">
            Submit
          </button>
        </form>
      )}

      <div className="flex flex-col justify-center items-center">
        <h3 className="font-cinzel text-3xl font-semibold border-b-2 border-colorFour">
          Here are All comments
        </h3>
        {comment &&
          comment.map((perComment, index) => {
            return (
              <div
                key={index}
                className="flex gap-12 border-t-2 border-colorFour p-8 m-4"
              >
                <p className="font-poppins text-2xl font-semibold">
                  {index + 1}
                </p>
                <p className="font-poppins text-2xl font-semibold">
                  {perComment}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SurveyDetailsPage;
