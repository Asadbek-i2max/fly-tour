import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import G1 from "../assets/images/gallery/gallery1.jpg";
import G2 from "../assets/images/gallery/gallery2.jpg";
import G3 from "../assets/images/gallery/gallery3.jpg";
import G4 from "../assets/images/gallery/gallery4.jpg";
import G5 from "../assets/images/gallery/gallery5.jpg";

const Gallery = () => {
  const images = [
    G1,
    G2,
    G3,
    G4,
    G5
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}  
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
