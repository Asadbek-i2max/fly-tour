// import { useTranslation } from 'react-i18next';

const InfoBar = () => {
  //   const { t } = useTranslation();
  const iconcolor = { color: '#e8a411' };

  return (
    <div className="bg-slate-900 text-slate-300 py-2 border-b border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-sm mb-2 md:mb-0 flex flex-col items-center">
          <span className="mr-4">
            <i className="fa-regular fa-clock" style={iconcolor}></i>
            <span className="ml-1">Mon-Sun: 9am to 6pm</span>
          </span>
          <span className="mr-4">
            <i
              className="fa-solid fa-location-dot"
              style={iconcolor}
            ></i>
            <span className="ml-1">Tashkent, Uzbekistan</span>
          </span>
        </div>

        <div className="text-sm flex space-x-3">
          <span>
            <i className="fas fa-envelope mr-1" style={iconcolor}></i>
            <span className="ml-1">Email: flytour@info.com</span>
          </span>
          <a href="#" className="hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-700">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
