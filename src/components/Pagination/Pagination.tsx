import { useSelector } from "react-redux";
import { getPageNumber, getTotalRecipePages } from "../../selectors";
import cn from "classnames";
import useQueryUpdater from "../hooks/useQueryUpdater";
import { QUERY_PARAMS } from "../../constants/router.constants";
import { useMemo } from "react";
import PaginationLink from "./PaginationLink";

interface IPaginationProps {
  totalPages: number;
}

const Pagination = (props: IPaginationProps) => {
  const page = useSelector(getPageNumber);

  const queryUpdater = useQueryUpdater();

  const navigatePage = (newPage: number) => {
    if (newPage > props.totalPages || newPage < 1) return;

    queryUpdater({
      [QUERY_PARAMS.PAGE_NUMER]: newPage.toString(),
    });
  };

  const pageNumbers = useMemo(
    () =>
      Array(props.totalPages)
        .fill(0)
        .map((_p, i) => i + 1),
    [props.totalPages]
  );

  if (props.totalPages <= 1) return null;

  return (
    <div className="container">
      <nav className="pagination" role="navigation" aria-label="pagination">
        <a
          className={cn("pagination-previous", { "is-disabled": page <= 1 })}
          onClick={() => navigatePage(page - 1)}
        >
          Previous
        </a>
        <a
          className={cn("pagination-next", {
            "is-disabled": page >= props.totalPages,
          })}
          onClick={() => navigatePage(page + 1)}
        >
          Next Page
        </a>
        <ul className="pagination-list">
          {pageNumbers.map((number) => (
            <PaginationLink
              key={`pagination-link-${number}`}
              pageNumber={number}
              onClick={() => navigatePage(number)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
