import React, { useEffect, useState } from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./app.scss";
import Contact from "../modals";
import Feedback from "../feedback";

const App = () => {
  return (
    <div className="wrapper__fullPage">
      <BrowserRouter>
        <div className="wrapper__fullPage__content">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <Contact />
    </div>
  );
};

export default App;
