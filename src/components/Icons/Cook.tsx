import { GiCook } from "react-icons/gi";
import IconContainer, { IIconProps } from "./Icon";

const CookIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <GiCook />
    </IconContainer>
  );
};

export default CookIcon;
