import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Home/Hero";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

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
