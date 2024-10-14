import Navbar from "../components/Navbar";
import PageCard from "../components/PageCard";
import Blogs from "../components/Blog";
import Footer from "../components/Footer";

import { useTranslation } from "react-i18next";

const Blog = () => {

  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <PageCard cardTitle={t("PageCard.Blogs")} />
      <Blogs />
      <Footer />
    </>
  );
};

export default Blog;
