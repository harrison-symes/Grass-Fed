import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import cn from "classnames";
import Burger from "./Burger";
import CookIcon from "../Icons/Cook";
import GrassIcon from "../Icons/Grass";
import VideoIcon from "../Icons/VideoIcon";
import WhyVeganNavDropdown from "./WhyVeganNavDropdown";
import FilmIcon from "../Icons/Film";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  return (
    <>
      <nav
        className="navbar is-fixed-top is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavItem text="Grass-Fed" href="/" icon={GrassIcon} isExactPath />
          <Burger
            isActive={isActive}
            onClick={() => setIsActive((state) => !state)}
          />
        </div>
        <div className={cn("navbar-menu", { "is-active": isActive })}>
          <div className="navbar-start">
            <NavItem text="Recipes" href="/recipes" icon={CookIcon} />
            {/* <NavItem text="Podcasts" href="/podcasts" icon={PodcastIcon} /> */}
            <NavItem text="Videos" href="/videos" icon={VideoIcon} />
            <NavItem
              text="Documentaries"
              href="/documentaries"
              icon={FilmIcon}
            />
            {/* <NavItem text="About Us" href="/about" icon={InfoIcon} /> */}
            <WhyVeganNavDropdown />
          </div>
          {/* <div className="navbar-end mt3 mt0-ns">
            <NavItem text="Log In" href="/login" icon={PersonIcon} />
            <NavItem text="Sign Up" href="/signup" icon={PersonAddIcon} />
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
