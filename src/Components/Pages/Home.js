import React from "react";
import Carousel from "../../Carousel";
import Departments from "../Departments";
import Navbar from "../Layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Departments />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
