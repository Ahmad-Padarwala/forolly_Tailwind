import React from "react";
import Navbar from "../components/Navbar";
import History from "./History";
import Service from "./Service";
import Popular from "./Popular";
import Testimonial from "./Testimonial";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <History />
      <Service />
      <Popular />
      <Testimonial />
      <Footer />
    </>
  );
};

export default index;
