import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import PageCard from "../components/PageCard";
import Footer from "../components/Footer";

import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <PageCard cardTitle={t("PageCard.ContactUs")}></PageCard>
      <Contact />
      <Footer />
    </>
  );
};

export default ContactUs;
