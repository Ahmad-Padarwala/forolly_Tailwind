import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="mt-10 text-center lg:px-20 md:px-10 px-5">
        <p className="lg:text-3xl text-2xl font-serif">Testimonials</p>
        <p className="lg:text-4xl md:text-3xl text-2xl text-red font-bold mt-2">
          What Our Customers Say
        </p>
        <p className="mt-3 tracking-wider leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s,
        </p>
        <div>
          <img
            src={require("../../assets/image/testimen-img.webp")}
            alt="testimonial"
            className="mx-auto mt-5"
          />
        </div>
      </div>

      <div className="w-full testi-slider-main py-5">
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 text-center text-5xl leading-none text-white testi-slider-text">
            Chocolate Makes Everything Better
          </div>
          <div className="lg:col-span-9 md:col-span-8 sm:col-span-6">
            <div className="flex pt-2">
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
