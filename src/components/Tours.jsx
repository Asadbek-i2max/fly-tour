import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import Modal from './TourModal';

import P from '../assets/images/tours/paris.jpg';
import SH from '../assets/images/tours/sharm.jpg';
import ST from '../assets/images/tours/stanbul.jpg';
import M from '../assets/images/tours/maldive.jpg';
import S from '../assets/images/tours/samarqand.jpg';
import A from '../assets/images/tours/antal.jpg';
import C from '../assets/images/tours/cappa.jpg';
import K from '../assets/images/tours/khiva.jpg';
import MD from '../assets/images/tours/madina.jpg';

const Tours = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const openModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  const toursData = [
    {
      id: 1,
      title: t('Tours.Paris'),
      price: '1200$',
      image: P,
      location: t('Tours.Paris'),
      hotelAddress: 'Reneau Square, Paris',
      schedule: t('Modal.AllDay'),
    },
    {
      id: 2,
      title: t('Tours.Istanbul'),
      price: '700$',
      image: ST,
      location: t('Tours.Istanbul'),
      hotelAddress: 'Sofia 88A, Istanbul',
      schedule: t('Modal.AllDay'),
    },
    {
      id: 3,
      title: t('Tours.Sharm-al-sheikh'),
      price: '600$',
      image: SH,
      location: t('Tours.Sharm-al-sheikh'),
      hotelAddress: '789 Coral Beach, Sharm',
      schedule: t('Modal.AllDay'),
    },
    {
      id: 4,
      title: t('Tours.Maldives'),
      price: '700$',
      image: M,
      location: t('Tours.Maldives'),
      hotelAddress: 'Blue island, Maldives',
      schedule: t('Modal.AllDay'),
    },
    {
      id: 5,
      title: t('Tours.Samarqand'),
      price: '200$',
      image: S,
      location: t('Tours.Samarqand'),
      hotelAddress: 'Qoplin 71, Samarqand',
      schedule: t('Modal.AllDay'),
    },
    {
      id: 6,
      title: t('Tours.Antalya'),
      price: '799$',
      image: A,
      location: t('Tours.Antalya'),
      hotelAddress: 'Emeral beach, Antalya',
      schedule: t('Modal.AllDay'),
    },
    {
      id: 7,
      title: t('Tours.Cappadocia'),
      price: '520$',
      image: C,
      location: t('Tours.Cappadocia'),
      hotelAddress: 'Bayram, Cappadocia',
      schedule: t('Modal.AllDay'),
    },
    {
      id: 8,
      title: t('Tours.Khiva'),
      price: '120$',
      image: K,
      location: t('Tours.Khiva'),
      hotelAddress: '123 Khazo, Khiva',
      schedule: t('Modal.AllDay'),
    },
    {
      id: 9,
      title: t('Tours.Medina'),
      price: '1200$',
      image: MD,
      location: t('Tours.Medina'),
      hotelAddress: '789A, Medina',
      schedule: t('Modal.AllDay'),
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  const totalPages = Math.ceil(toursData.length / toursPerPage);

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = toursData.slice(
    indexOfFirstTour,
    indexOfLastTour
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        {t('Navbar.Tours')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {currentTours.map((tour) => (
          <div
            key={tour.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => openModal(tour)}
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full object-cover object-contain"
            />
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
            className={`mx-1 px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? 'bg-orange-400'
                : 'bg-white hover:bg-gray-200'
            } text-black`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        tour={selectedTour}
      />
    </div>
  );
};

export default Tours;
