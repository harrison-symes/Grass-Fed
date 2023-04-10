import { MAX_COST_VALUE } from "../../constants/recipe.constants";
import DollarIcon from "../Icons/Dollar";

import cn from "classnames";

interface IPriceIconsProps {
  value: number;
}

const PriceIcons = (props: IPriceIconsProps) => {
  const current = Math.min(props.value, MAX_COST_VALUE);

  const arr = new Array(MAX_COST_VALUE).fill(0);

  let colourClass = "is-green";

  switch (current) {
    case 3:
    case 4:
      colourClass = "is-yellow";
      break;
    case 5:
      colourClass = "is-orange";
      break;
    default:
      colourClass = "is-green";
      break;
  }

  return (
    <div className="flex justify-center">
      {arr.map((_, i) => (
        <DollarIcon
          iconProps={{
            className: current > i ? cn("o-100", colourClass) : "o-20",
          }}
        />
      ))}
    </div>
  );
};

export default PriceIcons;
