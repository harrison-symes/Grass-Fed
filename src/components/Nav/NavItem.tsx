import { useDispatch, useSelector } from "react-redux";
import { getPath } from "../../selectors";
import cn from "classnames";
import { push } from "redux-first-history";

interface INavItemProps {
  text: string;
  href: string;
  icon?: React.FC;
}

const NavItem = (props: INavItemProps) => {
  const path = useSelector(getPath);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(push(props.href));
  };

  return (
    <a
      onClick={onClick}
      className={cn("navbar-item flex items-center", {
        "is-active": path === props.href,
      })}
    >
      {props.icon && <props.icon />}
      {props.text}
    </a>
  );
};

export default NavItem;
