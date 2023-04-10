import { FaMinus } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const MinusIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaMinus {...props.iconProps} />
    </IconContainer>
  );
};

export default MinusIcon;
