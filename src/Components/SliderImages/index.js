import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'; // Import your CSS file

import CitiesData from '../../Data/DestinationData.json';
const {Destinations} = CitiesData

// Custom Arrow Component
const CustomArrow = ({ className, onClick, icon }) => (
  <div
    className={className}
    onClick={onClick}
    style={{ background: 'grey', color:'grey',borderRadius: '50%', cursor: 'pointer',outline:'none' }}
  >
    {icon}
  </div>
);

const SliderImages = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    prevArrow: <CustomArrow className="slick-prev" icon="PreviousIcon" />,
    nextArrow: <CustomArrow className="slick-next" icon="NextIcon" />,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <div className="carousel-app-container">
      <Slider {...settings}>
        {Destinations.map((eachItem, index) => (
          <div className="image-container-carousel" key={index}>
            <img src={eachItem.images} alt={`my${index + 1}`} className="carousel-images-width04" />
            <p className="para">{eachItem.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderImages;
