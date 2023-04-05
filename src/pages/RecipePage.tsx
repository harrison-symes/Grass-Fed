import * as React from "react";
import WIP from "../components/WIP/WIP";
import Recipe from "../components/Recipe/Recipe";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const RecipePage = () => {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs />
        <Recipe />
      </div>
    </section>
  );
};

export default RecipePage;
