import { useState } from 'react';

import { useTranslation } from 'react-i18next';


const Tours = () => {
  const { t } = useTranslation();

  const toursData = [
    { id: 1, title: t('Tours.Paris'), price: '1200$', image: '../assets/images/tours/paris.jpg' },
    { id: 2, title: t('Tours.Istanbul'), price: '700$', image: '../assets/images/tours/stanbul.jpg' },
    { id: 3, title: t('Tours.Sharm-al-sheikh'), price: '600$', image: '../assets/images/tours/sharm.jpg' },
    { id: 4, title: t('Tours.Maldives'), price: '700$', image: '../assets/images/tours/maldive.jpg' },
    { id: 5, title: t('Tours.Samarqand'), price: '200$', image: '../assets/images/tours/samarqand.jpg' },
    { id: 6, title: t('Tours.Antalya'), price: '799$', image: '../assets/images/tours/antal.jpg' },
    { id: 7, title: t('Tours.Cappadocia'), price: '520$', image: '../assets/images/tours/cappa.jpg' },
    { id: 8, title: t('Tours.Khiva'), price: '120$', image: '../assets/images/tours/khiva.jpg' },
    { id: 9, title: t('Tours.Medina'), price: '1200$', image: '../assets/images/tours/madina.jpg' },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  const totalPages = Math.ceil(toursData.length / toursPerPage);

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = toursData.slice(indexOfFirstTour, indexOfLastTour);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      <h2 className="text-2xl font-bold text-center mb-6">{t('Navbar.Tours')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {currentTours.map((tour) => (
          <div key={tour.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={tour.image} alt={tour.title} className="w-full object-cover object-contain" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{tour.title}</h3>
              <p className="text-gray-600">{tour.price}</p>
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

