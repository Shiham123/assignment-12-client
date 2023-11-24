import FaqSection from '../../Section/FaqSection/FaqSection';
import HeroSection from '../../Section/HeroSection/HeroSection';
import TestimonialSection from '../../Section/TestimonialSection/TestimonialSection';

const HomePage = () => {
  return (
    <section className="bg-colorThree">
      <HeroSection />
      <TestimonialSection />
      <FaqSection />
    </section>
  );
};

export default HomePage;
