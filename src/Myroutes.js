import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import About from "./Components/Pages/About";
import Cart from "./Components/Pages/Cart";
import Contacts from "./Components/Pages/Contacts";
import FAQ from "./Components/Pages/FAQ";
import Home from "./Components/Pages/Home";
import { Login } from "./Components/Pages/Login";
import Products from "./Components/Pages/Products";
import Register from "./Components/Pages/Register";
import Data from "./Hooks/Data";
import DataFetch from "./Hooks/DataFetch";
import Main from "./Hooks/Redux/Main";

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/data" element={<Data />} />
        <Route path="/datafetch" element={<DataFetch />} />
        <Route path="/main" element={<Main />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Myroutes;
