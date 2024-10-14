
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const testimonialsData = [
  {
    id: 1,
    text: "This is the best service I've ever used! Highly recommended.",
    author: "John Doe",
    position: "Customer",
  },
  {
    id: 2,
    text: "Amazing experience, will definitely use again!",
    author: "Jane Smith",
    position: "Frequent Traveler",
  },
  {
    id: 3,
    text: "Exceptional quality and service. Five stars!",
    author: "Emily Johnson",
    position: "Business Traveler",
  },
];

const Review = () => {
  return (
    <div className="bg-slate-700 to-purple-600 py-10">
      <h2 className="text-center text-4xl font-bold text-indigo-600 mb-6">Testimonials</h2>
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="max-w-screen-md mx-auto"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="p-8 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <p className="mb-4 italic text-gray-600">`{testimonial.text}`</p>
              <h3 className="font-bold text-lg text-gray-800">{testimonial.author}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
