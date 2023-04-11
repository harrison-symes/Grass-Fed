import { GiHealthIncrease } from "react-icons/gi";
import IconContainer, { IIconProps } from "./Icon";

const HealthIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <GiHealthIncrease {...props.iconProps} />
    </IconContainer>
  );
};

export default HealthIcon;
