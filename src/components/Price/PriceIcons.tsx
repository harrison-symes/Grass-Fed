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
  let priceText = "Cheap";

  switch (current) {
    case 1:
      priceText = "Frugal";
      colourClass = "is-green";
      break;
    case 2:
      priceText = "Cheap";
      colourClass = "is-blue";
      break;
    case 3:
      priceText = "Moderate";
      colourClass = "is-purple";
      break;
    case 4:
      priceText = "Pricey";
      colourClass = "is-yellow";
      break;
    case 5:
      priceText = "Luxury";
      colourClass = "is-orange";
      break;
    default:
      colourClass = "is-green";
      break;
  }

  return (
    <div className="flex justify-center" title={`Price: ${priceText}`}>
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
