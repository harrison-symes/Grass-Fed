import cn from "classnames"
import SearchIcon from "../Icons/Search";

interface ISearchInputProps {
    isLoading?: boolean;
}

const SearchInput = (props: ISearchInputProps) => {
    return (
        <div className="field">
            <p className="control has-icons-left">
                <SearchIcon containerProps={{ className: "is-left input-icon" }} />
                <input 
                    className={cn("input is-primary is-medium", {
                        "is-loading": props.isLoading
                    })}
                    type="text"
                    placeholder="Search"
                />

            </p>
        </div>
    )
}

export default SearchInput