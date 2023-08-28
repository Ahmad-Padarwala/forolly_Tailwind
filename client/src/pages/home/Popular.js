import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import PORT from "../../assets/constant/Url";

const Popular = () => {
  const [popularProduct, setPopularProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPopulatProduct();
  }, []);
  const getPopulatProduct = () => {
    axios
      .get(`${PORT}product/1/4`)
      .then((response) => {
        setPopularProduct(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Product data in Brand.js:", error);
      });
  };

  const handleWatchProduct = (prodId) => {
    navigate("/products/aboutproduct", {
      state: { id: prodId },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="mt-5 bg-chocolate bg-no-repeat bg-right-top prod-bg lg:p-14 p-7">
        <div className="lg:flex flex-wrap populer-product">
          <div className="lg:w-4/6 w-full lg:pr-5 pr-0">
            <p className="text-4xl text-red font-bold">Popular Products</p>
            <p className="mt-3 text-white">
              Chocolate and love go hand in hand – if you want to get on your
              loved one’s good side, feed them a steady supply of confectionery!
              In fact, a study by the Journal of Social and Personal
              Relationships found that eating sweet treats can lead to
              heightened romantic interest.
            </p>
          </div>
          <div className="md:w-4/12 w-full lg:m-auto lg:mt-0 mt-5">
            <NavLink
              to="/products"
              className="px-4 bg-white left-20 py-2 text-center inline-block relative rounded text-sm cate-btn product-btn"
            >
              View All Products
            </NavLink>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 pb-5 gap-5">
          {popularProduct.map((popular) => {
            return (
              <div className="col-span-1 mx-2">
                <div
                  className="four-card-main pointer py-6 rounded-xl text-center cursor-pointer"
                  onClick={() => {
                    handleWatchProduct(popular.prod_id);
                  }}
                >
                  <p className="text-xl text-white font-semibold">
                    {popular.title}
                  </p>
                  {popular.image && (
                    <img
                      src={require(`../../assets/image/upload/${popular.image}`)}
                      alt="popularProduct"
                      className="four-card-img object-cover mx-auto mt-3"
                      width="187px"
                      height="187px"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
