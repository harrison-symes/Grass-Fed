import { useNavigate } from "react-router";
import { ROUTES_INTERNAL } from "../constants/router.constants";

const WhyVegan = () => {
  const navigate = useNavigate();
  const onClick = (href: ROUTES_INTERNAL) => {
    navigate(href);
  };

  return (
    <div className="container">
      <h1 className="is-size-3">Why be Vegan?</h1>
      <article className="message mt3 is-primary">
        <div className="message-body">
          <p>
            Going vegan comes with many benefits and motivators. There are three
            main reasons to consider adopting a vegan lifestyle: health, the
            environment, and to avoid supporting animal death and suffering. It
            is important to note that while one of these may be your main
            motivator, making the change to veganism will have a positive effect
            on all of these fronts.
          </p>
          <p className="mt2">
            Many studies have shown that a plant-based diet can lower the risk
            of chronic diseases such as heart disease, diabetes, and cancer.
          </p>
          <p className="mt2">
            In terms of the environment, animal agriculture is a leading cause
            of deforestation, greenhouse gas emissions, and water pollution. By
            choosing vegan alternatives, we can reduce our environmental impact
            and contribute to a more sustainable future.
          </p>
          <p className="mt2">
            Finally, veganism is rooted in a deep concern for animal welfare and
            their rights. By cutting out animal products, we can reduce the
            suffering of animals raised for food and other purposes.
          </p>
          <hr />
          <p className="mt3">
            Click through the options below to learn more about the benefits of
            going vegan and to find answers to some common questions.
          </p>
        </div>
      </article>
      <div className="why-vegan__link-container">
        <div
          className="why-vegan__page-link why-vegan__page-link--orange"
          onClick={() => onClick(ROUTES_INTERNAL.WHY_HEALTH)}
        >
          Healthy Vegan Eating
        </div>
        <div
          className="why-vegan__page-link why-vegan__page-link--purple"
          onClick={() => onClick(ROUTES_INTERNAL.WHY_ANIMALS)}
        >
          For the Environment
        </div>
        <div
          className="why-vegan__page-link why-vegan__page-link--blue"
          onClick={() => onClick(ROUTES_INTERNAL.WHY_ANIMALS)}
        >
          Vegan for the Animals
        </div>
      </div>
    </div>
  );
};

export default WhyVegan;
