import PageCard from "../components/PageCard";
import Navbar from "../components/Navbar";
import ToursCom from "../components/Tours";
import Footer from "../components/Footer";

const Tours = () => {
  return (
    <>
      <Navbar />
      <PageCard cardTitle={"Tour packages"}/>
      <ToursCom />
      <Footer />
    </>
  );
};

export default Tours;
