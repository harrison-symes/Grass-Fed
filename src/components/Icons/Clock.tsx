import { FaClock } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const ClockIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaClock {...props.iconProps} />
    </IconContainer>
  );
};

export default ClockIcon;
