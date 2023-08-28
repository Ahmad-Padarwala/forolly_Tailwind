import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

const HomeRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default HomeRoute;
