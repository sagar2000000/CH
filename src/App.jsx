import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detailed from "./components/Detailed";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
   
    <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Detailed />} />
      </Routes>
     </>
  );
};

export default App;
