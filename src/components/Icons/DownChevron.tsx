import { FaChevronDown } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const DownChevron = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaChevronDown />
    </IconContainer>
  );
};

export default DownChevron;
