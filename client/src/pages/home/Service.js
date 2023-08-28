import React from "react";

const Service = () => {
  return (
    <>
      <div className="flex flex-wrap shadow-lg">
        <div className="lg:w-1/3 md:w-full px-8 py-1 service-title">
          <p className="text-lg mb-5">Services</p>
          <p className="lg:text-4xl text-3xl font-bold text-red tracking-wider">
            <span className="lg:border-red border-b border-b-4 pb-2 md:border-white">
              WHY
            </span>{" "}
            CHOOSE US
          </p>
        </div>

        <div className="lg:w-2/3 md:w-full bg-chocolate py-1">
          <div className="flex flex-wrap">
            <div className="w-full flex lg:w-1/3 md:w-1/2 gap-5 lg:mt-10 lg:ps-4 md:mb-8 sm:mb-8 mb-8 justify-center">
              <div className="text-6xl choose-icons">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div>
                <p className="text-xl text-white font-bold">70+</p>
                <p className="text-xl font-bold tracking-widest text-white">
                  PRODUCTS
                </p>
              </div>
            </div>
            <div className="w-full flex lg:w-1/3 md:w-1/2 gap-5 lg:mt-10 sm:mb-8 mb-8 justify-center">
              <div className="text-6xl choose-icons">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div>
                <p className="text-xl text-white font-bold">500+</p>
                <p className="text-xl font-bold tracking-widest text-white">
                  DISTRIBUTORS
                </p>
              </div>
            </div>
            <div className="w-full flex lg:w-1/3 md:w-1/2 gap-5 lg:mt-10 justify-center">
              <div className="text-6xl choose-icons">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div>
                <p className="text-xl text-white font-bold">100k+</p>
                <p className="text-xl font-bold tracking-widest text-white">
                  CUSTOMERS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto flex flex-wrap mt-5 px-0 justify-around card-section">
        <div className="lg:mt-0 md:col-span-6 col-span-12">
          <div className="flex py-7 mt-5 rounded-xl overflow-hidden px-4 card-main">
            <div className="card-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="ps-3">
              <p className="font-bold text-lg font-sans mb-2">High Quality</p>
              <p className="tracking-wide font-sans text-sm text-zinc-500 card-para">
                Forolly is a great brand with a variety of options like Brownie
                Vanilla, Badam Shake, Cherry Merry, Choco Coconut, Mango Coconut
                Barfi, and Choco Paan and it’s one of our top dietitian-approved
                choices for chocolates with high-quality ingredients.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-0 mt-5 md:col-span-6 col-span-12">
          <div className="flex py-7 mt-0 md:mt-5 rounded-xl overflow-hidden px-4 card-main">
            <div className="card-icon">
              <i className="fas fa-smile"></i>
            </div>
            <div className="ps-3">
              <p className="font-bold text-lg font-sans mb-2">Super Taste</p>
              <p className="tracking-wide font-sans text-sm text-zinc-500 card-para">
                Chocolate feels smooth and velvety in your mouth. Also known as
                mouth-feel, high-quality chocolate has a distinct texture that
                is difficult to describe but easily recognizable when you feel
                it in your own mouth.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-0 mt-5 md:col-span-6 col-span-12">
          <div className="flex py-7 mt-0 md:mt-5 rounded-xl overflow-hidden px-4 card-main">
            <div className="card-icon">
              <i className="fas fa-gift"></i>
            </div>
            <div className="ps-3">
              <p className="font-bold text-lg font-sans mb-2">Great for Gift</p>
              <p className="tracking-wide font-sans text-sm text-zinc-500 card-para">
                From the indulgent scent to the silky-smooth texture and
                decadent flavor, it’s tough not to love chocolate—which is
                exactly why it makes for a solid gift for every occasion,
                whether it be Mother’s Day or Valentine’s Day. it’s almost
                universally beloved by all ages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
