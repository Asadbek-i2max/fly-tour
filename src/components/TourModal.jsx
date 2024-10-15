import { useTranslation } from 'react-i18next';

/* eslint-disable react/prop-types */
const Modal = ({ isOpen, onClose, tour }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-2xl relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &#x2715;
        </button>

        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">{tour.title}</h2>
          <p className="text-gray-700">
            <strong>{t('Modal.Location')}:</strong> {tour.location}
          </p>
          <p className="text-gray-700">
            <strong>{t('Modal.Hotel address')}:</strong>{' '}
            {tour.hotelAddress}
          </p>
          <p className="text-gray-700">
            <strong>{t('Modal.Schedule')}:</strong> {tour.schedule}
          </p>
          <p className="text-gray-700">
            <strong>{t('Modal.Price')}:</strong> {tour.price}
          </p>
        </div>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          {t('Modal.Purchase')}
        </button>
      </div>
    </div>
  );
};

export default Modal;
