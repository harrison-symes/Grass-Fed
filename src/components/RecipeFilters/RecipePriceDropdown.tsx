import { useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import { getQueryParam } from "../../selectors";
import { QUERY_PARAMS } from "../../constants/router.constants";
import useQueryUpdater from "../hooks/useQueryUpdater";
import { IRecipePrice } from "../../models/recipe.models";

interface IRecipePriceOption {
  text: string;
  value: IRecipePrice | null;
}

const prices: IRecipePriceOption[] = [
  {
    text: "All Prices",
    value: null,
  },
  {
    text: "Cheap",
    value: "cheap",
  },
  {
    text: "Moderate",
    value: "moderate",
  },
  {
    text: "Pricey",
    value: "pricey",
  },
  {
    text: "Luxury",
    value: "luxury",
  },
];

const RecipePriceDropdown = () => {
  const param = useSelector(getQueryParam(QUERY_PARAMS.PRICE));
  const queryUpdater = useQueryUpdater();

  const activePrice = prices.find((price) => price.value === param);

  const onItemClick = (category: IRecipePriceOption) => {
    queryUpdater({
      [QUERY_PARAMS.PRICE]: category.value,
    });
  };

  return (
    <Dropdown
      id="recipe-price-dropdown"
      label="Price"
      text={activePrice?.text ?? "Price"}
      value={param}
      className="recipe-filter"
    >
      {prices.map((price) => (
        <DropdownItem
          key={`recipe-price-dropdown-item-${price.value}`}
          text={price.text}
          isActive={price.value === param}
          onClick={() => onItemClick(price)}
        />
      ))}
    </Dropdown>
  );
};

export default RecipePriceDropdown;
