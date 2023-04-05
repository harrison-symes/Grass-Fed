import { useLocation } from "react-router";
import cn from "classnames";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const paths = location.pathname
    .split("/")
    .filter((path) => path !== "")
    .map((path) => path.charAt(0).toUpperCase() + path.slice(1));

  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
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
