import { FaTwitter } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const TwitterIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaTwitter {...props.iconProps} />
    </IconContainer>
  );
};

export default TwitterIcon;
