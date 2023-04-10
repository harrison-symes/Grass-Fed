import { FaPlus } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const PlusIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaPlus {...props.iconProps} />
    </IconContainer>
  );
};

export default PlusIcon;
