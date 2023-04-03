import { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";
import DownArrowIcon from "../Icons/DownArrow";
import cn from "classnames";

interface IDropdownProps {
  id: string;
  text: string;
  value: string | null | undefined;
  children: React.ReactNode;
  label: string;
}

const Dropdown = (props: IDropdownProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
  }, [props.value]);

  return (
    <div
      className={cn("dropdown", {
        "is-active": isActive,
      })}
    >
      <label className="label" htmlFor={props.id}>
        {props.label}
        <div className="dropdown-trigger">
          <button
            id={props.id}
            onClick={() => setIsActive((state) => !state)}
            className="button is-medium"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span>{props.text}</span>
            <DownArrowIcon />
          </button>
        </div>
      </label>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">{props.children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
