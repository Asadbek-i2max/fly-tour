import PageCard from "../components/PageCard";
import Navbar from "../components/Navbar";
import ToursCom from "../components/Tours";
import Footer from "../components/Footer";

import { useTranslation } from "react-i18next";

const Tours = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <PageCard cardTitle={t("PageCard.Tours")}/>
      <ToursCom />
      <Footer />
    </>
  );
};

export default Tours;
