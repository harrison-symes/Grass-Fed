import { BsFillPersonFill } from "react-icons/bs";
import IconContainer, { IIconProps } from "./Icon";

const PersonIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <BsFillPersonFill {...props.iconProps} />
    </IconContainer>
  );
};

export default PersonIcon;
