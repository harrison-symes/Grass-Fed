import { FaChevronDown } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const DownArrowIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaChevronDown />
    </IconContainer>
  );
};

export default DownArrowIcon;
