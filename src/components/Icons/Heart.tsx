import { FaHeart } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const HeartIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaHeart {...props.iconProps} />
    </IconContainer>
  );
};

export default HeartIcon;
