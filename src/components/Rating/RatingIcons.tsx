import { MAX_RATING_VALUE } from "../../constants/recipe.constants";

import cn from "classnames";
import StarIcon from "../Icons/Star";

interface IRatingIconsProps {
  value: number;
}

const RatingIcons = (props: IRatingIconsProps) => {
  const current = Math.min(props.value, MAX_RATING_VALUE);

  const arr = new Array(MAX_RATING_VALUE).fill(0);

  let colourClass = "is-green";
  let ratingText = "";

  switch (current) {
    case 1:
      ratingText = "Yuck!";
      colourClass = "is-orange";
      break;
    case 2:
      ratingText = "Meh";
      colourClass = "is-yellow";
      break;
    case 3:
      ratingText = "Decent";
      colourClass = "is-purple";
      break;
    case 4:
      ratingText = "Yummy";
      colourClass = "is-blue";
      break;
    case 5:
      ratingText = "Delicious!";
      colourClass = "is-green";
      break;
    default:
      break;
  }

  return (
    <div className={cn("flex justify-center")} title={`Rating: ${ratingText}`}>
      {arr.map((_, i) => (
        <StarIcon
          iconProps={{
            className: current > i ? cn("o-100", colourClass) : "o-20",
          }}
        />
      ))}
    </div>
  );
};

export default RatingIcons;
