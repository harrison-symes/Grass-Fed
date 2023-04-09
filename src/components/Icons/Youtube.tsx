import { FaYoutube } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const YoutubeIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaYoutube />
    </IconContainer>
  );
};

export default YoutubeIcon;
