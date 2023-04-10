import { FaStar } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const StarIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaStar {...props.iconProps} />
    </IconContainer>
  );
};

export default StarIcon;
