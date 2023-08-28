import React, { useEffect, useState } from "react";
import axios from "axios";
// import ProductItem from "./ProductItem";
import PORT from "../../assets/constant/Url";
import ShimerUi from "../components/ShimerUi";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = () => {
    setIsLoading(true);
    axios
      .get(`${PORT}product/1/1`)
      .then((response) => {
        setProductData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching Product data in Brand.js:", error);
        setIsLoading(false);
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
      <div className="text-center lg:px-60 md:px-40 sm:px-20 px-8 px-0 my-12">
        <p className="text-xl mb-5">Our</p>
        <p className="text-red text-4xl font-extrabold mb-5">PRODUCTS</p>
        <p>
          Your content goes here. Edit or remove this text inline or in the
          module Content settings. You can also style every aspect of this
          content in the module Design settings and even apply custom CSS to
          this text in the module Advanced settings
        </p>
      </div>

      <div className="w-full lg:px-12 md:px-12 mt-10">
        <div className="text-center product-item flex flex-wrap">
          {productData.map((product) => (
            <div className="product-items mb-10" key={product.prod_id}>
              <div className="product-all text-center">
                <div
                  className="items-center bg-productItemBg rounded-full cursor-pointer flex justify-center relative"
                  id="product-main"
                  onClick={() => {
                    handleWatchProduct(product.prod_id);
                  }}
                >
                  {isLoading ? (
                    <ShimerUi height={230} width={230} borderRadius={130} />
                  ) : (
                    product.image && (
                      <img
                        className="prod-img"
                        src={require(`../../assets/image/upload/${product.image}`)}
                        alt="productImages"
                        width="100px"
                      />
                    )
                  )}
                </div>
                {isLoading ? (
                  <ShimerUi height={20} width={100} />
                ) : (
                  <p className="font-bold tracking-widest">{product.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
