import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import bg1 from '../assets/images/bg1.jpeg';
import bg2 from '../assets/images/bg2.jpeg';
import { useRef } from 'react';

const Hero = () => {
  const swiperRef = useRef(null);

  const handleSlideChange = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        ref={swiperRef}
        className="absolute top-0 left-0 w-full h-full"
        loop={true}
        autoplay={{ delay: 3000 }}
        effect="fade"
        slidesPerView={1}
      >
        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg1})`,
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="flex items-center justify-center h-full relative">
              <div className="text-center">
                <img
                  src="/src/assets/images/map-plane.png"
                  className="mx-auto w-72"
                  alt="plane"
                />
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                  Find Your Best <br /> Travels Package
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  Planning for a trip? We will organize your trip with
                  the best places and within best budget!
                </p>
                <div className="mt-6">
                  <a
                    href=""
                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                  >
                    See More
                  </a>
                </div>
                <div className="mt-10">
                  <button
                    onClick={() => handleSlideChange(0)}
                    className="py-1 px-3 mx-1 rounded-full transition duration-300 bg-white"
                  >
                    1
                  </button>
                  <button
                    onClick={() => handleSlideChange(1)}
                    className="py-1 px-3 mx-1 rounded-full transition duration-300 text-white"
                  >
                    2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg2})`,
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="flex items-center justify-center h-full relative">
              <div className="text-center">
                <img
                  src="/src/assets/images/map-plane.png"
                  className="mx-auto w-72"
                  alt="plane"
                />
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                  Find Your Best <br /> Travels Package
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  Planning for a trip? We will organize your trip with
                  the best places and within best budget!
                </p>
                <div className="mt-6">
                  <a
                    href=""
                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                  >
                    See More
                  </a>
                </div>
                <div className="mt-10">
                  <button
                    onClick={() => handleSlideChange(0)}
                    className="py-1 px-3 mx-1 rounded-full transition duration-300 text-white"
                  >
                    1
                  </button>
                  <button
                    onClick={() => handleSlideChange(1)}
                    className="py-1 px-3 mx-1 rounded-full transition duration-300 bg-white"
                  >
                    2
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
