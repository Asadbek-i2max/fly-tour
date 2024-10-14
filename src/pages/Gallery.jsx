import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageCard from "../components/PageCard";
import GalleryComp from "../components/Gallery";

import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <PageCard cardTitle={t("PageCard.Gallery")}/>
      <GalleryComp />
      <Footer />
    </>
  );
};

export default Gallery;
