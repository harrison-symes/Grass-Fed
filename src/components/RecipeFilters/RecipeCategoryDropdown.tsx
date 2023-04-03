import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import { getQueryParam, getQueryParams } from "../../selectors";
import { QUERY_PARAMS } from "../../constants/router.constants";
import { useNavigate } from "react-router";
import useQueryUpdater from "../hooks/useQueryUpdater";

interface IRecipeCategory {
  text: string;
  value: string | null;
}

const categories: IRecipeCategory[] = [
  {
    text: "All Categories",
    value: null,
  },
  {
    text: "Breakfast",
    value: "breakfast",
  },
  {
    text: "Lunch",
    value: "lunch",
  },
  {
    text: "Dinner",
    value: "dinner",
  },
  {
    text: "Baking",
    value: "baking",
  },
  {
    text: "Dessert",
    value: "dessert",
  },
  {
    text: "Snacks",
    value: "snacks",
  },
];

const RecipeCategoryDropdown = () => {
  const param = useSelector(getQueryParam(QUERY_PARAMS.CATEGORY));
  const queryUpdater = useQueryUpdater();

  const activeCategory = categories.find(
    (category) => category.value === param
  );

  const onItemClick = (category: IRecipeCategory) => {
    queryUpdater({
      [QUERY_PARAMS.CATEGORY]: category.value,
    });
  };

  return (
    <Dropdown
      id="recipe-category-dropdown"
      label="Category"
      text={activeCategory?.text ?? "Category"}
      value={param}
    >
      {categories.map((category) => (
        <DropdownItem
          key={`recipe-category-dropdown-item-${category.value}`}
          text={category.text}
          isActive={category.value === param}
          onClick={() => onItemClick(category)}
        />
      ))}
    </Dropdown>
  );
};

export default RecipeCategoryDropdown;
