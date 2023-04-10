import { BsFillPersonFill } from "react-icons/bs";
import IconContainer, { IIconProps } from "./Icon";

const PersonIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <BsFillPersonFill />
    </IconContainer>
  );
};

export default PersonIcon;
