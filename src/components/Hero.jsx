import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

import bg1 from '../assets/images/main/bg1.jpeg';
import bg2 from '../assets/images/main/bg2.jpeg';
import { useRef } from 'react';

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
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
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
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
              <div className="text-center relative">
                <img
                  src="../assets/images/main/map-plane.png"
                  className="mx-auto w-72"
                  alt="plane"
                />
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                  {t('Hero.Title')} <br /> {t('Hero.TitleUnder')}
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  {t('Hero.Desc')}
                </p>
                <div className="mt-6">
                  <a
                    href="/tours"
                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md"
                  >
                    {t('Hero.See')}
                  </a>
                </div>
                <div className="relative top-52">
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
                  src="../assets/images/main/map-plane.png"
                  className="mx-auto w-72"
                  alt="plane"
                />
                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                  {t('Hero.Title2')}
                </h1>
                <p className="text-white/70 text-xl max-w-xl mx-auto">
                  {t('Hero.Desc2')}
                </p>
                <div className="mt-6">
                  <a
                    href=""
                    className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md"
                  >
                    {t('Hero.See')}
                  </a>
                </div>
                <div className="relative top-52">
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
