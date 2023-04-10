import { GrPowerReset } from "react-icons/gr";
import IconContainer, { IIconProps } from "./Icon";

const ResetIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <GrPowerReset {...props.iconProps} />
    </IconContainer>
  );
};

export default ResetIcon;
