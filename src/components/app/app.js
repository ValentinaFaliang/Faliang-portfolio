import React from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import "./app.scss";

const App = () => {
    return (
        <div className="wrapper__fullPage">
            <Header/>
            <Main />
            <Footer/>
        </div>
    )
};

export default App;