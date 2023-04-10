import { FaDollarSign } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const DollarIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaDollarSign {...props.iconProps} />
    </IconContainer>
  );
};

export default DollarIcon;
