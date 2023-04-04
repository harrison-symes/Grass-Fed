import { IIconProps } from "../Icons/Icon";
import cn from "classnames";

interface IDropdownItemProps {
  text: string;
  icon?: React.FC<IIconProps>;
  isActive?: boolean;
  onClick: () => void;
}

const DropdownItem = (props: IDropdownItemProps) => {
  return (
    <a
      role="button"
      className={cn("dropdown-item", { "is-active": props.isActive })}
      onClick={props.onClick}
    >
      {props.icon && <props.icon />}
      {props.text}
    </a>
  );
};

export default DropdownItem;
