import { useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import { getQueryParam } from "../../selectors";
import { QUERY_PARAMS } from "../../constants/router.constants";
import useQueryUpdater from "../hooks/useQueryUpdater";
import { IRecipeTime } from "../../models/recipe.models";

interface IRecipeTimeOption {
  text: string;
  value: IRecipeTime | null;
}

const times: IRecipeTimeOption[] = [
  {
    text: "All times",
    value: null,
  },
  {
    text: "Quick",
    value: "quick",
  },
  {
    text: "Medium",
    value: "medium",
  },
  {
    text: "Long",
    value: "long",
  },
];

const RecipeTimeDropdown = () => {
  const param = useSelector(getQueryParam(QUERY_PARAMS.TIME_TO_PREPARE));
  const queryUpdater = useQueryUpdater();

  const activeTime = times.find((time) => time.value === param);

  const onItemClick = (category: IRecipeTimeOption) => {
    queryUpdater({
      [QUERY_PARAMS.TIME_TO_PREPARE]: category.value,
    });
  };

  return (
    <Dropdown
      id="recipe-price-dropdown"
      label="Time-to-prepare"
      text={activeTime?.text ?? "Time to prepare"}
      value={param}
    >
      {times.map((time) => (
        <DropdownItem
          key={`recipe-time-dropdown-item-${time.value}`}
          text={time.text}
          isActive={time.value === param}
          onClick={() => onItemClick(time)}
        />
      ))}
    </Dropdown>
  );
};

export default RecipeTimeDropdown;
