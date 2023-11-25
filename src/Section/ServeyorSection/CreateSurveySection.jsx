import { useForm } from 'react-hook-form';
import SectionTitle from '../../SubSection/SectionTitle';
import { useState } from 'react';
import useSecureApi from '../../Hooks/useSecureApi';
import swal from 'sweetalert';

const CreateSurveySection = () => {
  const [yesVoted] = useState(0);
  const [noVoted] = useState(0);
  const [liked] = useState(0);
  const [disliked] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const secureApi = useSecureApi();

  const onSubmit = (data) => {
    const formData = {
      ...data,
      yesVoted,
      noVoted,
      liked,
      disliked,
      status: 'unpublished',
    };
    console.log(formData);

    swal('Survey created', 'Happy survey', 'success');

    secureApi
      .post('/survey', formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <SectionTitle
        heading="Create a survey"
        subHeading="Make sure you have a proper survey"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-8 my-8">
          <div className="w-1/2">
            <label htmlFor="" className="font-cinzel text-2xl font-semibold">
              Title
            </label>
            <input
              className="w-full rounded-lg p-4 outline-none border-[1px] border-colorFour font-poppins"
              type="text"
              placeholder="title here"
              {...register('title', { required: true })}
            />
            {errors.title && (
              <p className="font-poppins text-2xl">Must provide a title</p>
            )}
          </div>

          <div className="w-1/2">
            <label htmlFor="" className="font-cinzel text-2xl font-semibold">
              Description
            </label>
            <textarea
              className="w-full rounded-lg p-4 outline-none border-[1px] border-colorFour font-poppins"
              name=""
              id=""
              cols="30"
              rows="1"
              placeholder="Description here"
              {...register('description', { required: true })}
            ></textarea>
            {errors.description && (
              <p className="font-poppins text-2xl">Must provide a title</p>
            )}
          </div>
        </div>

        <div>
          <label className="font-cinzel text-3xl font-semibold">
            Select a category:
          </label>
          <select
            id="category"
            name="category"
            className="font-cinzel text-3xl font-semibold border-none outline-none px-4 mx-4 rounded-lg bg-colorFive"
            {...register('category', { required: true })}
          >
            <option
              className="font-cinzel text-3xl font-semibold"
              value="politics"
            >
              Politics
            </option>
            <option
              className="font-cinzel text-3xl font-semibold"
              value="social-issues"
            >
              Social Issues
            </option>
            <option
              className="font-cinzel text-3xl font-semibold"
              value="technology"
            >
              Technology and Innovation
            </option>
            <option
              className="font-cinzel text-3xl font-semibold"
              value="entertainment"
            >
              Entertainment and Pop Culture
            </option>
          </select>
        </div>
        {errors.category && (
          <p className="font-poppins text-2xl">Must provide a title</p>
        )}

        <button
          type="submit"
          className="bg-colorFive px-12 py-4 text-sm md:text-xl lg:text-2xl font-cinzel font-bold tracking-wide rounded-lg border-2 border-colorFive hover:bg-transparent duration-200"
        >
          Submit form
        </button>
      </form>
    </div>
  );
};

export default CreateSurveySection;
