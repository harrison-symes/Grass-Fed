import { BsFillPersonPlusFill } from "react-icons/bs";
import IconContainer, { IIconProps } from "./Icon";

const PersonAddIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <BsFillPersonPlusFill />
    </IconContainer>
  );
};

export default PersonAddIcon;
