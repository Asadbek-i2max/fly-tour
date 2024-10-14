import InfoBar from '../components/InfoBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FlyCard from '../components/FlyCard';
import Banner from '../components/Banner';
import BannerPic from '../components/BannerPic';
import Tours from '../components/Tours';
import Blogs from '../components/Blog';
import Footer from '../components/Footer';
import Location from '../components/Location';

function Main() {
  return (
    <div>
      <InfoBar />
      <Navbar />
      <Hero />
      <FlyCard />
      <BannerPic />
      <Tours />
      <Banner />
      <Blogs />
      <Location />
      <Footer />
    </div>
  );
}

export default Main;