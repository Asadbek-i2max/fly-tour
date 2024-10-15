import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

import LOGO from "../assets/images/main/logo.png";

const Footer = () => {
  const { t } = useTranslation();
    return (
<footer className="bg-gray-900 text-gray-200 relative px-2">
  <div className="container mx-auto">
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="py-16 px-0">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
            <div className="lg:col-span-3 md:col-span-12">
              <Link to="/" className="text-2xl">
                <img src={LOGO} alt="Logo" />
              </Link>
              <p className="mt-6 text-gray-400">
                {t('Footer.Text1')}
              </p>
              <ul className="list-none mt-6 flex space-x-4 lg:space-x-[5px]">
                <li>
                  <a href="" target="_blank" className="flex items-center justify-center border border-gray-800 rounded-md hover:bg-orange-400 hover:text-white text-gray-300 p-2">
                    <i className="fa-solid fa-cart-shopping size-4" title="Buy Now"></i>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/flytripuzb" target="_blank" className="flex items-center justify-center border border-gray-800 rounded-md hover:bg-orange-400 hover:text-white text-gray-300 p-2">
                    <i className="fa-brands fa-telegram size-4" title="Telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" className="flex items-center justify-center border border-gray-800 rounded-md hover:bg-orange-400 hover:text-white text-gray-300 p-2">
                    <i className="fa-brands fa-facebook size-4" title="facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" className="flex items-center justify-center border border-gray-800 rounded-md hover:bg-orange-400 hover:text-white text-gray-300 p-2">
                    <i className="fa-brands fa-instagram size-4" title="instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" className="flex items-center justify-center border border-gray-800 rounded-md hover:bg-orange-400 hover:text-white text-gray-300 p-2">
                    <i className="fa-brands fa-twitter size-4" title="twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center justify-center border border-gray-800 rounded-md hover:bg-orange-400 hover:text-white text-gray-300 p-2">
                    <i className="fa-solid fa-envelope size-4" title="email"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 md:col-span-4">
              <div className="lg:ms-8">
                <h5 className="text-gray-100 font-semibold">{t('Footer.Address')}</h5>
                <div className="flex mt-4">
                  <i data-feather="map-pin" className="text-orange-400 mr-2 mt-1"></i>
                  <div>
                    <h6 className="text-gray-300">
                    {t('Footer.A1')}, <br />
                    {t('Footer.A2')}, 1 <br />
                    {t('Footer.A3')}
                    </h6>
                  </div>
                </div>
                <div className="flex mt-4">
                  <i data-feather="mail" className="text-orange-400 mr-2 mt-1"></i>
                  <div>
                    <a href="mailto:contact@example.com" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">flyinfo@gmail.com</a>
                  </div>
                </div>
                <div className="flex mt-4">
                  <i className="text-orange-400 mr-2 mt-1 fa-solid fa-phone"></i>
                  <div>
                    <a href="tel:+152534-468-854" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">+998 90 023 57 57</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4">
              <div className="lg:ms-8">
                <h5 className="text-gray-100 font-semibold">{t('Footer.Company')}</h5>
                <ul className="list-none mt-6">
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{t('Navbar.About')}</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/tours" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{t('Navbar.Tours')}</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/blog" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{t('Navbar.Blog')}</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/gallery" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{t('Navbar.Gallery')}</Link>
                  </li>
                  <li className="mt-2">
                    <Link href="/contact" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{t('Navbar.Contact')}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-4">
              <h5 className="text-gray-100 font-semibold">{t("Footer.Newsletter")}</h5>
              <p className="mt-6">{t("Footer.Sign")}</p>
              <form>
                <div className="grid grid-cols-1">
                  <div className="my-3">
                    <label className="form-label">{t("Footer.Write")} <span className="text-red-600">*</span></label>
                    <div className="relative mt-2">
                      <i data-feather="mail" className="absolute top-3 left-3 text-gray-400"></i>
                      <input type="email" className="pl-10 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:ring-0 placeholder:text-gray-200 outline-none" placeholder={t("Footer.Placeholder")} name="email" required />
                    </div>
                  </div>
                  <button type="submit" className="py-2 px-5 inline-block font-semibold text-base text-center bg-red-500 text-white rounded-md">{t("Footer.Sub")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-8 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <p className="mb-0">© {t("Footer.Design")} </p>
      </div>
    </div>
  </div>
</footer>
    );
}

export default Footer;
