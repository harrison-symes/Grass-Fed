import { FaFilm } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const FilmIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaFilm {...props.iconProps} />
    </IconContainer>
  );
};

export default FilmIcon;
