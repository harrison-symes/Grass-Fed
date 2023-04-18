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
          <p className="hero-title text-center is-size-4">
            <div className="is-size-2 fw5 mb2">Be Vegan</div>
            <div>For your Health</div>
            <div>For the Environment</div>
            <div>For the love of Animals</div>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
