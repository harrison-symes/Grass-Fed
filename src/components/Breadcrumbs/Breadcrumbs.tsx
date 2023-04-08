import { useLocation } from "react-router";
import cn from "classnames";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const paths = location.pathname
    .split("/")
    .filter((path) => path !== "")
    .map((path) => path.charAt(0).toUpperCase() + path.slice(1));

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="breadcrumb mt4" aria-label="breadcrumbs">
      <ul>
        <li
          key={`breadcrumbs-item-home`}
          className={cn({ "is-active": location.pathname === "/" })}
        >
          <Link to={`/`}>Home</Link>
        </li>
        {paths.map((path, i) => (
          <li
            key={`breadcrumbs-item-${path}`}
            className={cn({ "is-active": i === paths.length - 1 })}
          >
            <Link to={`/${paths.slice(0, i + 1).join("/")}`}>{path}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
