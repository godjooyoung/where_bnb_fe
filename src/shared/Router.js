import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register";
import Kakao from "../components/Kakao"
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/><Main /><Footer/></>} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Kakao/>}/>
        </Routes>
    </BrowserRouter>

  );
};

export default Router;
