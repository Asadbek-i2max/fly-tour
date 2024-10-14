import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const InfoBar = () => {
  const { t } = useTranslation();
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < 768
  );

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconcolor = { color: '#FFA500' };

  return (
    <div
      className={`absolute z-10 w-full py-2 px-2 ${
        isSmallScreen ? 'hidden' : 'bg-slate-900 text-slate-300'
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-2 md:mb-0">
          <span>
            <i className="fa-regular fa-clock" style={iconcolor}></i>
            <span className="ml-1">{t('InfoBar.Work')}</span>
          </span>
          <span className="ml-4">
            <i
              className="fa-solid fa-location-dot"
              style={iconcolor}
            ></i>
            <span className="ml-1">{t('InfoBar.Adress')}</span>
          </span>
        </div>

        <div className="text-sm flex space-x-3">
          <span>
            <i className="fas fa-envelope mr-1" style={iconcolor}></i>
            <span className="ml-1">{t('InfoBar.Email')}: flytour@info.com</span>
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
