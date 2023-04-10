import { MAX_COST_VALUE } from "../../constants/recipe.constants";
import ClockIcon from "../Icons/Clock";

interface ITimeIconsProps {
  value: number;
}

const TimeIcons = (props: ITimeIconsProps) => {
  const current = Math.min(props.value, MAX_COST_VALUE);

  const arr = new Array(MAX_COST_VALUE).fill(0);

  return (
    <div className="flex justify-center">
      {arr.map((_, i) => (
        <ClockIcon iconProps={{ className: current > i ? "o-100" : "o-20" }} />
      ))}
    </div>
  );
};

export default TimeIcons;
