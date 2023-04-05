import { FaChevronRight } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const RightChevron = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaChevronRight />
    </IconContainer>
  );
};

export default RightChevron;
