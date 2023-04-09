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
      <Footer />
    </div>
  );
};

export default Layout;
