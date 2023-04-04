import { useSelector } from "react-redux";
import { QUERY_PARAMS } from "../../constants/router.constants";
import { getQueryParam } from "../../selectors";
import SearchInput from "../Inputs/Search";
import useQueryUpdater from "../hooks/useQueryUpdater";

const RecipeSearch = () => {
  const param = useSelector(getQueryParam(QUERY_PARAMS.SEARCH));
  const queryUpdater = useQueryUpdater();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? null : e.target.value;
    queryUpdater({
      [QUERY_PARAMS.SEARCH]: value,
    });
  };

  return (
    <div className="width-100">
      <SearchInput
        id="recipe-search"
        label="Search"
        value={param}
        onChange={onChange}
      />
    </div>
  );
};

export default RecipeSearch;
