import { useState } from 'react';
import SectionTitle from '../../SubSection/SectionTitle';

const CreateSurveySection = () => {
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  const handleYesClick = () => {
    setYesCount(yesCount + 1);
  };

  const handleNoClick = () => {
    setNoCount(noCount - 1);
  };

  return (
    <div>
      <SectionTitle
        heading="Create a survey"
        subHeading="Make sure you have a proper survey"
      />
      <form>
        <div className="flex gap-8 my-8">
          <div className="w-1/2">
            <label htmlFor="" className="font-cinzel text-2xl font-semibold">
              Title
            </label>
            <input
              className="w-full rounded-lg p-4 outline-none border-[1px] border-colorFour font-cinzel"
              type="text"
              placeholder="title here"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="" className="font-cinzel text-2xl font-semibold">
              Description
            </label>
            <textarea
              className="w-full rounded-lg p-4 outline-none border-[1px] border-colorFour font-cinzel"
              name=""
              id=""
              cols="30"
              rows="1"
            ></textarea>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <p className="font-cinzel text-3xl py-4 font-semibold">
              Do you like this survey?
            </p>
            <div className="flex gap-8">
              <button
                onClick={handleYesClick}
                className="bg-colorFive px-12 py-4 text-sm md:text-xl lg:text-2xl font-cinzel font-bold tracking-wide rounded-lg border-2 border-colorFive hover:bg-transparent duration-200"
              >
                Voted
              </button>
              <button
                onClick={handleNoClick}
                className="bg-colorFive px-12 py-4 text-sm md:text-xl lg:text-2xl font-cinzel font-bold tracking-wide rounded-lg border-2 border-colorFive hover:bg-transparent duration-200"
              >
                Not voted
              </button>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex gap-8 mt-[4rem]">
              <button className="bg-colorFive px-12 py-4 text-sm md:text-xl lg:text-2xl font-cinzel font-bold tracking-wide rounded-lg border-2 border-colorFive hover:bg-transparent duration-200">
                Like
              </button>
              <button className="bg-colorFive px-12 py-4 text-sm md:text-xl lg:text-2xl font-cinzel font-bold tracking-wide rounded-lg border-2 border-colorFive hover:bg-transparent duration-200">
                Dislike
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateSurveySection;
