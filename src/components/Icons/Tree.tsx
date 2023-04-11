import { FaTree } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const TreeIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaTree {...props.iconProps} />
    </IconContainer>
  );
};

export default TreeIcon;
