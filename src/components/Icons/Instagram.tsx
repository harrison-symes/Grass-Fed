import { FaInstagram } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const IntagramIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaInstagram />
    </IconContainer>
  );
};

export default IntagramIcon;
