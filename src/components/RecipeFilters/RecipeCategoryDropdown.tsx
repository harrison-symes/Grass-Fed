import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import {
  getCategoryParams,
  getQueryParam,
  getQueryParams,
} from "../../selectors";
import { QUERY_PARAMS } from "../../constants/router.constants";
import { useNavigate } from "react-router";
import useQueryUpdater from "../hooks/useQueryUpdater";
import Radio from "../Radio/Radio";

interface IRecipeCategory {
  text: string;
  value: string;
}

const categories: IRecipeCategory[] = [
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
  const selectedCategories = useSelector(getCategoryParams);
  const queryUpdater = useQueryUpdater();

  const updateParam = (newParam: string[] | null) => {
    if (newParam === null || newParam.length === 0) {
      queryUpdater({
        [QUERY_PARAMS.CATEGORY]: null,
      });
    } else {
      queryUpdater({
        [QUERY_PARAMS.CATEGORY]: newParam.join(","),
      });
    }
  };

  const onItemClick = (category: IRecipeCategory) => {
    let newParam: string[] = selectedCategories;
    if (selectedCategories.includes(category.value)) {
      newParam = selectedCategories.filter((cat) => cat !== category.value);
    } else {
      newParam = [...selectedCategories, category.value];
    }
    updateParam(newParam);
  };

  const onToggleAll = () => {
    updateParam(null);
  };

  const text =
    selectedCategories.length === 0
      ? "Categories"
      : `${selectedCategories.length} selected`;

  return (
    <Dropdown
      className="recipe-filter"
      id="recipe-category-dropdown"
      label="Category"
      value={`${selectedCategories.length} selected`}
      text={text}
    >
      <Radio
        label="All categories"
        isChecked={selectedCategories.length === 0}
        id="recipe-category-radio-all"
        onClick={onToggleAll}
        className="radio-input"
      />
      {categories.map((category) => (
        <Radio
          id={`recipe-category-radio-${category.value}`}
          isChecked={selectedCategories.includes(category.value)}
          label={category.text}
          onClick={() => onItemClick(category)}
          className="radio-input"
        />
      ))}
    </Dropdown>
  );
};

export default RecipeCategoryDropdown;
