import * as React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Nav />
      <div className="page-content section">
        <Breadcrumbs />
        <Outlet />
      </div>
      <div className="hero is-primary">
        <div className="hero-body">
          <p className="hero-title text-center is-size-1">
            Are <b>YOU</b> vegan yet?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
