import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Location from "../components/Location";
import About from "../components/About";
import Review from "../components/Reviews";
import Team from "../components/Team"

const AboutUs = () => {
    return (
        <>
        <Navbar />
        <About />
        <Review />
        <Team />
        <Location />
        <Footer />
        </>
    );
}

export default AboutUs;