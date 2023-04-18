import { RiNetflixFill } from "react-icons/ri";
import IconContainer, { IIconProps } from "./Icon";

const NetflixIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <RiNetflixFill {...props.iconProps} />
    </IconContainer>
  );
};

export default NetflixIcon;
