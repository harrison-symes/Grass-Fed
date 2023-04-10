import { ImCross } from "react-icons/im";
import IconContainer, { IIconProps } from "./Icon";

const CrossIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <ImCross {...props.iconProps} />
    </IconContainer>
  );
};

export default CrossIcon;
