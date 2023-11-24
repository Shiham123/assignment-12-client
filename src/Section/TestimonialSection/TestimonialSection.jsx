import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../SubSection/SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaUser } from 'react-icons/fa';

const TestimonialSection = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch('/testimonial.json')
      .then((response) => response.json())
      .then((data) => setTestimonialData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto my-[10rem]">
      <SectionTitle heading="Testimonial" subHeading="Our Happy Client" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonialData.map((item, index) => {
          const { name, feedback, date, image } = item;

          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center my-[5rem] gap-8">
                <div>
                  {image ? (
                    <img
                      width={70}
                      className="rounded-full"
                      src={image}
                      alt=""
                    />
                  ) : (
                    <FaUser />
                  )}
                </div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins text-colorFive uppercase font-semibold">
                  {name}
                </h1>
                <p className="w-1/2 text-center text-sm md:text-xl tracking-widest font-poppins font-light">
                  {feedback}
                </p>
                <p className="text-2xl font-cinzel font-bold border-b border-colorOne">
                  {date}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
