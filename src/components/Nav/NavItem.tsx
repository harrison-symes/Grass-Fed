import { useDispatch, useSelector } from "react-redux";
import { getPath } from "../../selectors";
import cn from "classnames";
import { push } from "redux-first-history";

interface INavItemProps {
  text: string;
  href: string;
  icon?: React.FC;
  isExactPath?: boolean;
  className?: string;
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
      className={cn("navbar-item flex items-center", props.className, {
        "is-active": props.isExactPath
          ? path === props.href
          : path?.includes(props.href),
      })}
    >
      {props.icon && <props.icon />}
      <p className="inline-flex ml2">{props.text}</p>
    </a>
  );
};

export default NavItem;
