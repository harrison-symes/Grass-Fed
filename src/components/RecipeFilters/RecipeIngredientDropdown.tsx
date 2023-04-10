import { useSelector } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import {
  getIngredientParams,
  getQueryParam,
  getRepeatIngredients,
} from "../../selectors";
import { QUERY_PARAMS } from "../../constants/router.constants";
import useQueryUpdater from "../hooks/useQueryUpdater";
import Radio from "../Radio/Radio";
import SearchInput from "../Inputs/Search";

const RecipeIngredientDropdown = () => {
  const ingredients = useSelector(getRepeatIngredients);
  const ingredientSearch = useSelector(
    getQueryParam(QUERY_PARAMS.INGREDIENT_SEARCH)
  );
  const selectedIngredients = useSelector(getIngredientParams);
  const queryUpdater = useQueryUpdater();

  const updateParam = (newParam: string[] | null) => {
    console.log({ newParam });
    if (newParam === null || newParam.length === 0) {
      queryUpdater({
        [QUERY_PARAMS.INGREDIENTS]: null,
      });
    } else {
      queryUpdater({
        [QUERY_PARAMS.INGREDIENTS]: newParam.join(","),
      });
    }
  };

  const onItemClick = (ingredient: string) => {
    console.log({ ingredient });
    let newParam: string[] = ingredients;
    if (selectedIngredients.includes(ingredient)) {
      newParam = selectedIngredients.filter((ing) => ing !== ingredient);
    } else {
      newParam = [...selectedIngredients, ingredient];
    }
    updateParam(newParam);
  };

  const onToggleAll = () => {
    updateParam(null);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      queryUpdater({
        [QUERY_PARAMS.INGREDIENT_SEARCH]: null,
      });
    }
    queryUpdater({
      [QUERY_PARAMS.INGREDIENT_SEARCH]: e.target.value.toLowerCase(),
    });
  };

  const filteredIngredients = ingredients.filter(
    (ing) =>
      ingredientSearch == null ||
      ing.toLocaleLowerCase().includes(ingredientSearch)
  );

  const text =
    selectedIngredients.length === 0
      ? "Ingredients"
      : `${selectedIngredients.length} Selected`;

  return (
    <Dropdown
      className="recipe-filter"
      id="recipe-ingredient-dropdown"
      label="Ingredients"
      text={text}
      value={text}
    >
      <SearchInput
        id="recipe-ingredient-search"
        label="Search Ingredients"
        onChange={onSearchChange}
        value={ingredientSearch}
      />
      <Radio
        label="All Ingredients"
        isChecked={selectedIngredients.length === 0}
        id="recipe-ingredients-radio-all"
        onClick={() => onToggleAll()}
        className="radio-input"
      />

      <hr className="dropdown-divider" />

      {filteredIngredients.map((ingredient) => (
        <Radio
          id={`recipe-ingredient-radio-${ingredient}`}
          isChecked={selectedIngredients.includes(ingredient)}
          label={ingredient}
          onClick={() => onItemClick(ingredient)}
          className="radio-input"
        />
      ))}
    </Dropdown>
  );
};

export default RecipeIngredientDropdown;
