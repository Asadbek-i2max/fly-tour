import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageCard from "../components/PageCard";
import GalleryComp from "../components/Gallery";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <PageCard cardTitle={"Gallery"}/>
      <GalleryComp />
      <Footer />
    </>
  );
};

export default Gallery;
