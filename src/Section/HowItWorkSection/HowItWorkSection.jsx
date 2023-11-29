import SurveyImg from '../../assets/How it work/1311196_296.jpg';
import commentImg from '../../assets/How it work/34294162_graphic_designer_man.jpg';
import imgThree from '../../assets/How it work/3d-illustration-pen-putting-blue-ticks-paper.jpg';
import imgFour from '../../assets/How it work/4105860_2152177.jpg';

const HowItWorkSection = () => {
  return (
    <div className="my-32">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-colorOne font-bold font-cinzel uppercase py-4">
          How it work
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-cinzel font-semibold text-colorFour tracking-widest capitalize py-4 border-b-2 border-colorFive">
          Our website details
        </h2>
      </div>

      {/*  */}
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-8 m-16">
        <div className="flex flex-col justify-center items-center border-[1px] border-colorFive p-12 rounded-lg shadow-lg shadow-colorFive hover:bg-colorFour hover:text-colorTwo hover:shadow-colorFour hover:scale-110 hover:border-none duration-300 h-full">
          <img width={300} className="rounded-lg" src={SurveyImg} alt="" />
          <h1 className="font-cinzel text-2xl text-center py-12 font-semibold tracking-widest">
            Our website has a survey method
          </h1>
        </div>

        <div className="flex flex-col justify-c enter items-center border-[1px] border-colorFive p-12 rounded-lg shadow-lg shadow-colorFive hover:bg-colorFour hover:text-colorTwo hover:shadow-colorFour hover:scale-110 hover:border-none duration-300 h-full">
          <img className="rounded-lg" src={imgThree} alt="" />
          <h1 className="font-cinzel text-2xl text-center py-12 font-semibold tracking-widest">
            You can survey and comment and like the survey
          </h1>
        </div>

        <div className="flex flex-col justify-c enter items-center border-[1px] border-colorFive p-12 rounded-lg shadow-lg shadow-colorFive hover:bg-colorFour hover:text-colorTwo hover:shadow-colorFour hover:scale-110 hover:border-none duration-300 h-full">
          <img className="rounded-lg" src={imgFour} alt="" />
          <h1 className="font-cinzel text-2xl text-center py-12 font-semibold tracking-widest">
            Your comment or feedback is very important for us
          </h1>
        </div>

        <div className="flex flex-col justify-c enter items-center border-[1px] border-colorFive p-12 rounded-lg shadow-lg shadow-colorFive hover:bg-colorFour hover:text-colorTwo hover:shadow-colorFour hover:scale-110 hover:border-none duration-300 h-full">
          <img className="rounded-lg" src={commentImg} alt="" />
          <h1 className="font-cinzel text-2xl text-center py-12 font-semibold tracking-widest">
            Pro user have ability to comment a survey
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkSection;
