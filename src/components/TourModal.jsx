import { useTranslation } from "react-i18next";

/* eslint-disable react/prop-types */
const Modal = ({ isOpen, onClose, tour }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-2xl relative h-[80vh] overflow-y-auto">
        <button
          className="absolute top-3 right-1 text-gray-600 hover:text-red-600 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          onClick={onClose}
          aria-label="Close"
        >
          &#x2715;
        </button>

        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-62 object-cover rounded-lg shadow-md relative top-5"
        />

        <div className="mt-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {tour.title}
          </h2>

          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 mb-4 flex items-center">
              <i className="fas fa-map-marker-alt text-blue-500 mr-3"></i>
              <p className="text-gray-600">
                <strong className="text-gray-800">
                  {t("Modal.Location")}:
                </strong>{" "}
                {tour.location}
              </p>
            </div>

            <div className="w-full sm:w-1/2 mb-4 flex items-center">
              <i className="fas fa-hotel text-green-500 mr-3"></i>
              <p className="text-gray-600">
                <strong className="text-gray-800">
                  {t("Modal.Hotel address")}:
                </strong>{" "}
                {tour.hotelAddress}
              </p>
            </div>

            <div className="w-full sm:w-1/2 mb-4 flex items-center">
              <i className="fas fa-calendar-alt text-yellow-500 mr-3"></i>
              <p className="text-gray-600">
                <strong className="text-gray-800">
                  {t("Modal.Schedule")}:
                </strong>{" "}
                {tour.schedule}
              </p>
            </div>

            <div className="w-full sm:w-1/2 mb-4 flex items-center">
              <i className="fas fa-dollar-sign text-red-500 mr-3"></i>
              <p className="text-gray-600">
                <strong className="text-gray-800">{t("Modal.Price")}:</strong>{" "}
                {tour.price}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
          <ul className="list-none text-gray-700 space-y-2">
            <li>✈️ {t("Modal.Direct")}</li>
            <li>🏩 {t("Modal.Accom")}</li>
            <li>🚗 {t("Modal.Group")}</li>
            <li>⚕ {t("Modal.Health")}</li>
            <li>💯 {t("Modal.Services")}</li>
          </ul>
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {t("Modal.BookTour")}
          </h3>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="fullName"
              >
                {t("Modal.Name")}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                {t("Modal.Email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="phone"
              >
                {t("Modal.Number")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="date"
              >
                {t("Modal.Date")}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              onClick={onClose}
            >
              {t("Modal.Purchase")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
