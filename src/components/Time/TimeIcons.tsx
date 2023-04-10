import { MAX_COST_VALUE } from "../../constants/recipe.constants";
import ClockIcon from "../Icons/Clock";

import cn from "classnames";

interface ITimeIconsProps {
  value: number;
}

const TimeIcons = (props: ITimeIconsProps) => {
  const current = Math.min(props.value, MAX_COST_VALUE);

  const arr = new Array(MAX_COST_VALUE).fill(0);

  let colourClass = "is-green";
  let timeText = "";

  switch (current) {
    case 1:
      timeText = "Quick";
      colourClass = "is-green";
      break;
    case 2:
      timeText = "Fast";
      colourClass = "is-blue";
      break;
    case 3:
      timeText = "Reasonable";
      colourClass = "is-purple";
      break;
    case 4:
      timeText = "Slow";
      colourClass = "is-yellow";
      break;
    case 5:
      timeText = "Long";
      colourClass = "is-orange";
      break;
    default:
      break;
  }

  return (
    <div
      className={cn("flex justify-center")}
      title={`Time to make: ${timeText}`}
    >
      {arr.map((_, i) => (
        <ClockIcon
          iconProps={{
            className: current > i ? cn("o-100", colourClass) : "o-20",
          }}
        />
      ))}
    </div>
  );
};

export default TimeIcons;
