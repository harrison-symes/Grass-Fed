import { useEffect, useRef, useState } from "react";
import DownArrowIcon from "../Icons/DownArrow";
import cn from "classnames";
import CrossIcon from "../Icons/Cross";

import "./dropdown.scss";

interface IDropdownProps {
  id: string;
  text: string;
  value: string | number | null | undefined;
  children: React.ReactNode;
  label: string;
  className?: string;
}

const Dropdown = (props: IDropdownProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLLabelElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: MouseEvent) => {
    if (
      triggerRef.current &&
      triggerRef.current.contains(event.target as Node)
    ) {
      setIsActive((state) => !state);
    } else if (
      contentRef.current &&
      !contentRef.current.contains(event.target as Node)
    ) {
      // clicked outside of the dropdown, hide it
      setIsActive(false);
    }
  };

  useEffect(() => {
    // add event listener for clicks outside of the dropdown
    document.addEventListener("mousedown", handleClick);

    return () => {
      // remove event listener on unmount
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      className={cn("dropdown", props.className, {
        "is-active": isActive,
      })}
    >
      <label className="label w-100" htmlFor={props.id} ref={triggerRef}>
        {props.label}
        <div className="dropdown-trigger">
          <button
            id={props.id}
            className="button w-100"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span>{props.text}</span>
            <DownArrowIcon />
          </button>
        </div>
      </label>
      <div className="dropdown-menu w-100" id="dropdown-menu3" role="menu">
        <div className="dropdown-content" ref={contentRef}>
          <div className="dropdown-close__container">
            <p className="fw7">{props.label}</p>
            <div
              className="dropdown-close__button"
              onClick={() => setIsActive(false)}
            >
              <CrossIcon />
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
