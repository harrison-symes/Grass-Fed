import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
