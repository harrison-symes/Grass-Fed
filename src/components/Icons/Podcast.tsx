import { FaPodcast } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const PodcastIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaPodcast {...props.iconProps} />
    </IconContainer>
  );
};

export default PodcastIcon;
