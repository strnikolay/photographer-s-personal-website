import React, { useState, createContext } from "react";
//import PropTypes from "prop-types";

import Arrows from "./components/Controls/Arrows";
import Dots from "./components/Controls/Dots";

import SlidesList from "./slider/SlidesList";

export const SliderContext = createContext();

//const Slider = function ({ width, height}) {
const Slider = function () {    
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)

  const items = [
    {
        title:"",
        url:""
    },
    {
        title:"",
        url:""
    },
    {
        title:"",
        url:""
    }
  ]


  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }



  return (
    <div
      //style={{ width, height }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <Arrows />
        <SlidesList items={items} />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

/*Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%"
};*/

export default Slider;