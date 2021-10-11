import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = ({ index }) => {
  return <div className="banner" id={"banner-" + index} />;
};

const Banners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="banner-container">
      <div className="container">
        <Slider {...settings}>
          {["banner", "banner", "banner"].map((banner, index) => {
            return <Banner key={banner + index} index={index + 1} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Banners;
