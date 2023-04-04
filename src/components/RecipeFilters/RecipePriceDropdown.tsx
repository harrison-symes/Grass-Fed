import { useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import { getCostParam } from "../../selectors";
import { QUERY_PARAMS } from "../../constants/router.constants";
import useQueryUpdater from "../hooks/useQueryUpdater";
import {
  MIN_TIME_VALUE,
  MAX_TIME_VALUE,
} from "../../constants/recipe.constants";
import Slider from "../Slider/Slider";
import { costText } from "../helpers/recipeHelpers";

const RecipePriceDropdown = () => {
  const cost = useSelector(getCostParam);
  const queryUpdater = useQueryUpdater();

  const onValueChange = (value: number) => {
    queryUpdater({
      [QUERY_PARAMS.PRICE]: value.toString(),
    });
  };

  return (
    <Dropdown
      className="recipe-filter"
      id="recipe-cost-dropdown"
      label="Cost-to-prepare"
      text={costText(cost)}
      value={cost}
    >
      <Slider
        label={costText(cost)}
        id="recipe-time-slider"
        min={MIN_TIME_VALUE}
        max={MAX_TIME_VALUE}
        value={cost}
        onChange={onValueChange}
      />
    </Dropdown>
  );
};

export default RecipePriceDropdown;
