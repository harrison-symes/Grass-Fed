import { FaInstagram } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const InstagramIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaInstagram />
    </IconContainer>
  );
};

export default InstagramIcon;
