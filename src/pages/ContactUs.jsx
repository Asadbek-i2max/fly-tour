import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import PageCard from "../components/PageCard";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <PageCard cardTitle={"Contact us"}></PageCard>
      <Contact />
      <Footer />
    </>
  );
};

export default ContactUs;
