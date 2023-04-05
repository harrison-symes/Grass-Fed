import { MouseEventHandler } from "react";
import cn from "classnames";
import "./radio.scss";

interface IRadioProps {
  className?: string;
  onClick: MouseEventHandler<HTMLInputElement>;
  label?: string;
  isChecked: boolean | undefined;
  id: string | undefined;
}

const Radio = (props: IRadioProps) => {
  return (
    <div className={cn("field", props.className)}>
      <input
        className="is-checkradio is-medium"
        id={props.id}
        type="checkbox"
        checked={props.isChecked}
        onClick={props.onClick}
      />
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
    </div>
  );
};

export default Radio;
