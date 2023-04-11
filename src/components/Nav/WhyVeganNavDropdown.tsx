import { ROUTES_INTERNAL } from "../../constants/router.constants";
import CarrotIcon from "../Icons/Carrot";
import HealthIcon from "../Icons/Health";
import HeartIcon from "../Icons/Heart";
import TreeIcon from "../Icons/Tree";
import NavItem from "./NavItem";

const WhyVeganNavDropdown = () => {
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <NavItem
        href={ROUTES_INTERNAL.WHY_VEGAN}
        text="Why Vegan?"
        icon={CarrotIcon}
      />

      <div className="navbar-dropdown">
        <NavItem
          href={ROUTES_INTERNAL.WHY_HEALTH}
          text="Health"
          icon={HealthIcon}
          className="is-info"
        />
        <NavItem
          href={ROUTES_INTERNAL.WHY_ENVIRONMENT}
          text="Environemnt"
          icon={TreeIcon}
        />
        <NavItem
          href={ROUTES_INTERNAL.WHY_ANIMALS}
          text="Animals"
          icon={HeartIcon}
        />
      </div>
    </div>
  );
};

export default WhyVeganNavDropdown;
