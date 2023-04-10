import { FaCarrot } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const CarrotIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaCarrot {...props.iconProps} />
    </IconContainer>
  );
};

export default CarrotIcon;
