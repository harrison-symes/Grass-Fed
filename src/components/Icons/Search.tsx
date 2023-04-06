import { FaSearch } from "react-icons/fa";
import IconContainer, { IIconProps } from "./Icon";

const SearchIcon = (props: IIconProps) => {
  return (
    <IconContainer {...props.containerProps}>
      <FaSearch />
    </IconContainer>
  );
};

export default SearchIcon;
