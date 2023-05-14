import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Test from "../pages/Test"
import Test2 from "../pages/Test2"
const Router = () => {
  return (
    <BrowserRouter>

        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
        <Footer></Footer>

    </BrowserRouter>

  );
};

export default Router;
