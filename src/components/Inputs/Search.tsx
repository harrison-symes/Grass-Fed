import cn from "classnames";
import SearchIcon from "../Icons/Search";

interface ISearchInputProps {
  isLoading?: boolean;
  id: string;
  value: string | undefined | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const SearchInput = (props: ISearchInputProps) => {
  return (
    <div className="field">
      <label className="label" htmlFor={props.id}>
        {props.label}
        <div className="control has-icons-left">
          <SearchIcon containerProps={{ className: "is-left input-icon" }} />
          <input
            id={props.id}
            className={cn("input is-primary is-medium", {
              "is-loading": props.isLoading,
            })}
            type="text"
            placeholder="Search"
            value={props.value ?? ""}
            onChange={props.onChange}
          />
        </div>
      </label>
    </div>
  );
};

export default SearchInput;
