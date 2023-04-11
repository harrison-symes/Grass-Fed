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
      <article className="message mt3">
        <div className="message-body">
          There are many good reasons to go <span className="fw7">Vegan</span>,
          these reasons boil down to these three categories. Click through one
          of the options below to learn more about the benefits of Veganism and
          to find answers to some common questions.
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
