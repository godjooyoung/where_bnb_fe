import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register";
import Test from "../pages/Test"
const Router = () => {
  return (
    <BrowserRouter>

        
        <Routes>
          <Route path="/" element={<><Header/><Main /><Footer/></>} />
          <Route path="/login" element={<><Header/><Login /><Footer/></>} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<><Header/><Test /><Footer/></>} />
        </Routes>
        

    </BrowserRouter>

  );
};

export default Router;
