import { FaVideo } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const VideoIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaVideo {...props.iconProps} />
    </IconContainer>
  );
};

export default VideoIcon;
