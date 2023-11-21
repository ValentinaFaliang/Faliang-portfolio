import React, { useEffect, useState } from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Contact from "../modals";
import Blog from "../blog";

const App = () => {
  return (
    <div className="wrapper__fullPage">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
