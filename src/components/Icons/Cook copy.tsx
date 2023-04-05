import { FaCheck } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const CheckMarkIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaCheck />
    </IconContainer>
  );
};

export default CheckMarkIcon;
