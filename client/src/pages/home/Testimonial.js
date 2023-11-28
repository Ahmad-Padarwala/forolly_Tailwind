import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="mt-10 text-center lg:px-20 md:px-10 lg:px-5">
        <p className="lg:text-2xl text-xl">Testimonials</p>
        <p className="lg:text-3xl md:text-2xl text-2xl text-red font-bold mt-2 font-montserrat">
          What Our Customers Say
        </p>
        <p className="mt-3 tracking-wider leading-7 lg:text-center text-justify px-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s,
        </p>
        <div className="md:px-0 px-3">
          <img
            src={require("../../assets/image/testimen-img.webp")}
            alt="testimonial"
            className="mx-auto mt-5"
          />
        </div>
      </div>

      <div className="w-full testi-slider-main py-5 md:pb-8 pb-10">
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 text-center text-5xl leading-none text-white testi-slider-text">
            Chocolate Makes Everything Better
          </div>
          <div className="lg:col-span-9 md:col-span-8 sm:col-span-6">
            <div className="flex pt-4">
              <div className="item">
                <img
                  src={require("../../assets/image/bottom-slider1.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
              <div className="item">
                <img
                  src={require("../../assets/image/bottom-slider2.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
              <div className="item" id="bottom-slider">
                <img
                  src={require("../../assets/image/bottom-slider3.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
              <div className="item" id="bottom-slider">
                <img
                  src={require("../../assets/image/bottom-slider4.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
              <div className="item" id="bottom-slider1">
                <img
                  src={require("../../assets/image/bottom-slider5.webp")}
                  alt="slider-bottom"
                  height="170px"
                  width="170px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
