import { useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import { getTimeParam } from "../../selectors";
import { QUERY_PARAMS } from "../../constants/router.constants";
import useQueryUpdater from "../hooks/useQueryUpdater";
import Slider from "../Slider/Slider";
import {
  MAX_TIME_VALUE,
  MIN_TIME_VALUE,
} from "../../constants/recipe.constants";
import TimeIcons from "../Time/TimeIcons";

const RecipeTimeDropdown = () => {
  const queryUpdater = useQueryUpdater();
  const time = useSelector(getTimeParam);

  const onValueChange = (value: number) => {
    queryUpdater({
      [QUERY_PARAMS.TIME_TO_PREPARE]: value.toString(),
    });
  };

  return (
    <Dropdown
      className="recipe-filter"
      id="recipe-time-dropdown"
      label="Time-to-prepare"
      text={<TimeIcons value={time} />}
      value={time}
    >
      <Slider
        label={
          <div className="flex w-100 justify-between">
            Up to:
            <TimeIcons value={time} />
          </div>
        }
        id="recipe-time-slider"
        min={MIN_TIME_VALUE}
        max={MAX_TIME_VALUE}
        value={time}
        onChange={onValueChange}
      />
    </Dropdown>
  );
};

export default RecipeTimeDropdown;
