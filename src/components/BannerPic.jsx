import BannerImage from "../assets/images/main/banner.jpg";

const BannerPic = () => {
    const bgImage = {
      backgroundImage: `url(${BannerImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "400px",
    };
    return (
      <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
    );
  };
  
  export default BannerPic;