import { useSelector } from "react-redux";
import Dropdown from "../../Dropdown/Dropdown";
import { getServingsValue } from "../../../selectors";
import DropdownItem from "../../Dropdown/DropdownItem";
import useQueryUpdater from "../../hooks/useQueryUpdater";
import { QUERY_PARAMS } from "../../../constants/router.constants";

const quantities: number[] = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const QuantityControl = () => {
  const servings = useSelector(getServingsValue);

  const queryUpdater = useQueryUpdater();

  const onClick = (quantity: number) => {
    queryUpdater({
      [QUERY_PARAMS.SERVINGS]: quantity.toString(),
    });
  };

  return (
    <Dropdown
      id="Recipe-quantity-dropdown"
      label="Servings"
      text={`${servings} Servings`}
      value={servings}
      className="w-100 w-auto-ns is-right"
    >
      {quantities.map((quantity) => (
        <DropdownItem
          key={`quantity-dropdown-${quantity}`}
          onClick={() => onClick(quantity)}
          text={`${quantity} Servings`}
          isActive={servings === quantity}
        />
      ))}
    </Dropdown>
  );
};

export default QuantityControl;
