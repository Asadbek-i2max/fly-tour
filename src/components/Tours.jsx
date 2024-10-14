import { useState } from 'react';

const toursData = [
  { id: 1, title: 'Tour 1', description: 'Description for Tour 1', image: '/src/assets/images/stanbul.jpg' },
  { id: 2, title: 'Tour 2', description: 'Description for Tour 2', image: '/src/assets/images/stanbul.jpg' },
  { id: 3, title: 'Tour 3', description: 'Description for Tour 3', image: '/src/assets/images/stanbul.jpg' },
  { id: 4, title: 'Tour 4', description: 'Description for Tour 4', image: '/src/assets/images/stanbul.jpg' },
  { id: 5, title: 'Tour 5', description: 'Description for Tour 5', image: '/src/assets/images/stanbul.jpg' },
  { id: 6, title: 'Tour 6', description: 'Description for Tour 6', image: '/src/assets/images/sharm.jpg' },
  { id: 7, title: 'Tour 6', description: 'Description for Tour 6', image: '/src/assets/images/sharm.jpg' },
  { id: 8, title: 'Tour 6', description: 'Description for Tour 6', image: '/src/assets/images/sharm.jpg' },
  { id: 9, title: 'Tour 6', description: 'Description for Tour 6', image: '/src/assets/images/sharm.jpg' },
];

const Tours = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  const totalPages = Math.ceil(toursData.length / toursPerPage);

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = toursData.slice(indexOfFirstTour, indexOfLastTour);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Tours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {currentTours.map((tour) => (
          <div key={tour.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={tour.image} alt={tour.title} className="w-full object-cover object-contain" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{tour.title}</h3>
              <p className="text-gray-600">{tour.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-orange-400' : 'bg-white hover:bg-gray-200'} text-black`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tours;

