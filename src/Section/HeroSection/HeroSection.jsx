// import heroSvg from '../../assets/34682605_8136204.svg';
import { useState } from 'react';
import ButtonComponent from '../../SubComponent/button';
import styleHero from './hero.module.scss';

const HeroSection = () => {
  const [heroBtn] = useState(true);
  return (
    <div>
      <div className={`hero min-h-screen ${styleHero.heroBg}`}>
        <div className="hero-overlay bg-opacity-60 bg-colorFour"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col">
            <h1 className="font-playfairDisplay text-white font-normal capitalize text-xl md:text-2xl lg:text-3xl py-12 md:py-8 lg:p-12 leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]">
              Engage in the democratic process by participating in our polls.
              Your voice matters, and together, we can influence positive
              change. <br /> Join thousands of others in sharing your
              perspective on important issues. Let your opinions be heard and
              play a role in shaping the future.
            </h1>
            <div>
              <ButtonComponent heroBtn={heroBtn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
