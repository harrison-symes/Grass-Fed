import { useSelector } from "react-redux";
import { getPageNumber } from "../../selectors";
import cn from "classnames";

interface IPaginationLinkProps {
  pageNumber: number;
  onClick: () => void;
}

const PaginationLink = (props: IPaginationLinkProps) => {
  const page = useSelector(getPageNumber);

  return (
    <li>
      <a
        onClick={props.onClick}
        className={cn("pagination-link", {
          "is-current": page === props.pageNumber,
        })}
        aria-label={`Goto page ${props.pageNumber}`}
      >
        {props.pageNumber}
      </a>
    </li>
  );
};

export default PaginationLink;
