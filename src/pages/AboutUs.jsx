import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Location from "../components/Location";
import About from "../components/About";
import Review from "../components/Reviews";
import Team from "../components/Team";

const AboutUs = () => {
    return (
        <>
        <Navbar className="-top-[1.6rem]"/>
        <About />
        <Review />
        <Team />
        <Location />
        <Footer />
        </>
    );
}

export default AboutUs;