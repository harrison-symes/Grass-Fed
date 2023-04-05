import { FaChevronUp } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const UpChevron = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaChevronUp />
    </IconContainer>
  );
};

export default UpChevron;
