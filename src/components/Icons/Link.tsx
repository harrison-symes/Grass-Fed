import { FaLink } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const LinkIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaLink {...props.iconProps} />
    </IconContainer>
  );
};

export default LinkIcon;
