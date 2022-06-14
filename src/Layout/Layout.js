import React from "react";
import Footer from "../Components/Common/Footer/Footer";
import Header from "../Pages/Header/Header";
import Home from "../Pages/Home/Home";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Home/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
