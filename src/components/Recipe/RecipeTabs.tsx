import { useSelector } from "react-redux";
import { QUERY_PARAMS } from "../../constants/router.constants";
import useQueryUpdater from "../hooks/useQueryUpdater";
import cn from "classnames";
import { getRecipeTabParam } from "../../selectors";

export type RecipeTabType = "ingredients" | "steps" | null;

interface IRecipeTabProps {
  text: string;
  param: RecipeTabType | null;
  onClick: (param: string | null) => void;
  activeTab: string | null | undefined;
}

const RecipeTab = (props: IRecipeTabProps) => {
  return (
    <li
      onClick={() => props.onClick(props.param)}
      className={cn({ "is-active": props.activeTab === props.param })}
    >
      <a>{props.text}</a>
    </li>
  );
};

const RecipeTabs = () => {
  const queryUpdater = useQueryUpdater();
  const activeTab = useSelector(getRecipeTabParam);

  const onClick = (param: string | null) => {
    queryUpdater({
      [QUERY_PARAMS.TAB]: param,
    });
  };

  return (
    <div className="tabs recipe-tabs">
      <ul>
        <RecipeTab
          onClick={onClick}
          activeTab={activeTab}
          text="Description"
          param={null}
        />
        <RecipeTab
          onClick={onClick}
          activeTab={activeTab}
          text="Ingredients"
          param="ingredients"
        />
        <RecipeTab
          onClick={onClick}
          activeTab={activeTab}
          text="Steps"
          param="steps"
        />
      </ul>
    </div>
  );
};

export default RecipeTabs;
