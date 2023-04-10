import { QUERY_PARAMS } from "../../constants/router.constants";
import ResetIcon from "../Icons/Reset";
import useQueryUpdater from "../hooks/useQueryUpdater";

const ResetFilters = () => {
  const queryUpdater = useQueryUpdater();

  const onClick = () => {
    queryUpdater({
      [QUERY_PARAMS.CATEGORY]: null,
      [QUERY_PARAMS.SEARCH]: null,
      [QUERY_PARAMS.PRICE]: null,
      [QUERY_PARAMS.TIME_TO_PREPARE]: null,
      [QUERY_PARAMS.INGREDIENTS]: null,
      [QUERY_PARAMS.RATING]: null,
    });
  };

  return (
    <button className="button" onClick={onClick}>
      <span>Reset</span>
      <ResetIcon containerProps={{ className: "ml2" }} />
    </button>
  );
};

export default ResetFilters;
