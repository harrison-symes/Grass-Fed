import { MAX_TIME_VALUE } from "../../constants/recipe.constants";

interface ISliderProps {
  id: string;
  min?: number;
  max: number;
  value: number | null;
  onChange: (value: number) => void;
  label?: JSX.Element | string;
}

const Slider = (props: ISliderProps) => {
  return (
    <div className="w-100 mb1 ph3">
      {props.label && (
        <label className="label center" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input
        id={props.id}
        className="slider is-fullwidth is-medium is-link"
        step="1"
        min={props.min}
        max={props.max}
        value={props.value ?? MAX_TIME_VALUE}
        type="range"
        onChange={(e) => props.onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

Slider.defaultProps = {
  min: 0,
};

export default Slider;
