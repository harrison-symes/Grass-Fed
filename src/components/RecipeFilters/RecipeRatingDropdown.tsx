import { useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import { getRatingParam } from "../../selectors";
import { QUERY_PARAMS } from "../../constants/router.constants";
import useQueryUpdater from "../hooks/useQueryUpdater";
import Slider from "../Slider/Slider";
import {
  MAX_RATING_VALUE,
  MIN_RATING_VALUE,
} from "../../constants/recipe.constants";
import RatingIcons from "../Rating/RatingIcons";

const RecipeRatingDropdown = () => {
  const queryUpdater = useQueryUpdater();
  const rating = useSelector(getRatingParam);

  const onValueChange = (value: number) => {
    queryUpdater({
      [QUERY_PARAMS.RATING]: value.toString(),
    });
  };

  return (
    <Dropdown
      className="recipe-filter"
      id="recipe-rating-dropdown"
      label="Rating"
      text={<RatingIcons value={rating} />}
      value={rating}
    >
      <Slider
        label={
          <div className="flex w-100 justify-between">
            At least:
            <RatingIcons value={rating} />
          </div>
        }
        id="recipe-rating-slider"
        min={MIN_RATING_VALUE}
        max={MAX_RATING_VALUE}
        value={rating}
        onChange={onValueChange}
      />
    </Dropdown>
  );
};

export default RecipeRatingDropdown;
