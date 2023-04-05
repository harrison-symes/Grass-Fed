import { FaMinus } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const MinusIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaMinus />
    </IconContainer>
  );
};

export default MinusIcon;
