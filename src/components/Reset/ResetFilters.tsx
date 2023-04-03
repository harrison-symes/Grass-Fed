import { QUERY_PARAMS } from "../../constants/router.constants";
import useQueryUpdater from "../hooks/useQueryUpdater";

const ResetFilters = () => {
  const queryUpdater = useQueryUpdater();

  const onClick = () => {
    queryUpdater({
      [QUERY_PARAMS.CATEGORY]: null,
      [QUERY_PARAMS.SEARCH]: null,
    });
  };

  return (
    <button className="button is-medium" onClick={onClick}>
      Reset
    </button>
  );
};

export default ResetFilters;
