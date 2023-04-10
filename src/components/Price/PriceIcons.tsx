import { MAX_COST_VALUE } from "../../constants/recipe.constants";
import DollarIcon from "../Icons/Dollar";

interface IPriceIconsProps {
  value: number;
}

const PriceIcons = (props: IPriceIconsProps) => {
  const current = Math.min(props.value, MAX_COST_VALUE);

  const arr = new Array(MAX_COST_VALUE).fill(0);

  return (
    <div className="flex justify-center">
      {arr.map((_, i) => (
        <DollarIcon iconProps={{ className: current > i ? "o-100" : "o-20" }} />
      ))}
    </div>
  );
};

export default PriceIcons;
