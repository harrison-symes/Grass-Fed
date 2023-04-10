import { GiHighGrass } from "react-icons/gi";
import IconContainer, { IIconProps } from "./Icon";

const GrassIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <GiHighGrass {...props.iconProps} />
    </IconContainer>
  );
};

export default GrassIcon;
