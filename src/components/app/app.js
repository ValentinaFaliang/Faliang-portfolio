import React, { useEffect, useState } from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./app.scss";
import Contact from "../modals";
import Blog from "../blog";
import { About } from "../sections";

const App = () => {
  return (
    <div className="wrapper__fullPage">
      <BrowserRouter>
        <div className="wrapper__fullPage__content">
          <Header />
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
