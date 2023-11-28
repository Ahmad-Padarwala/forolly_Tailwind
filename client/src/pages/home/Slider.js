import React, { useEffect } from "react";

const Slider = () => {
  let flag = 0;

  const controller = (x) => {
    flag = flag + x;
    slideshow(flag);
  };

  const slideshow = (num) => {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) {
      return;
    }
    if (num === slides.length) {
      flag = 0;
      num = 0;
    }
    if (num < 0) {
      flag = slides.length - 1;
      num = slides.length - 1;
    }
    for (let y of slides) {
      y.style.display = "none";
    }
    slides[num].style.display = "block";
  };

  useEffect(() => {
    controller(1);
  }, []);

  return (
    <>
      <div>
        <div className="slide">
          <img src={require("../../assets/image/slider1.png")} alt="slider" />
        </div>
        <div className="slide">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/01/07/52/tuscany-3364921_640.jpg"
            alt="slider"
          />
        </div>
        <span className="arrow prev" onClick={() => controller(-1)}>
          &#10094;
        </span>
        <span className="arrow next" onClick={() => controller(1)}>
          &#10095;
        </span>
      </div>
    </>
  );
};

export default Slider;
