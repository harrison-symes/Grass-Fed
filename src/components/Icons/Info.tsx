import { FaInfoCircle } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const InfoIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaInfoCircle {...props.iconProps} />
    </IconContainer>
  );
};

export default InfoIcon;
