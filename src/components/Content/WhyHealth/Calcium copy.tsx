import AboutWithImage from "../../About/AboutWithImage";

const Calcium = () => {
  return (
    <AboutWithImage
      id="vegan-health-calcium"
      messageClassName="is-black"
      title="Vegan Calcium Sources: You aren't a Baby Cow!"
      imageUrl="/images/calcium.png"
      isReverse
    >
      <p>
        There's a common misconception that the best source of calcium is cow's
        milk. However, this idea has been{" "}
        <b>heavily promoted by the dairy industry</b>, which has spent millions
        of dollars on marketing campaigns to convince people that they need
        cow's milk for strong bones. In reality,{" "}
        <b>there are many plant-based sources of calcium</b> that are just as
        effective at promoting bone health.
      </p>
      <p className="mt3">
        Leafy greens like <b>kale, collard greens, and spinach</b> are excellent
        sources of calcium, with a cup of cooked collard greens providing over
        25% of the recommended daily intake.{" "}
        <b>Tofu and fortified plant milks (such as Oat, Almond or Soy Milk)</b>{" "}
        are also good sources of calcium, with many brands offering products
        that <b>contain even more calcium than cow's milk</b>. Other sources of
        plant-based calcium include{" "}
        <b>almonds, sesame seeds, and fortified cereals</b>.
      </p>
      <p className="mt3">
        It's important to note that calcium is just one of many nutrients that
        are important for bone health. Eating a balanced diet that includes
        plenty of fruits, vegetables, whole grains, and plant-based protein
        sources is key. By getting your calcium from plant-based sources, you'll
        be{" "}
        <b>
          avoiding the saturated fat and cholesterol that come with animal
          products
        </b>
        . Plus, you'll be taking a stand against the misleading marketing
        tactics of the dairy industry. In fact,{" "}
        <b>
          the dairy industry has faced legal action for falsely advertising
          cow's milk as the best source of calcium
        </b>
        , and even for suggesting that it is necessary for good health.
      </p>
      <p className="mt3">
        Humans are the <b>only species on the planet</b> that drinks the milk of
        another species. Furthermore,{" "}
        <b>
          drinking cow's milk is not a natural or necessary part of the human
          diet
        </b>
        . In fact, many people are lactose intolerant, meaning they cannot
        properly digest the lactose found in cow's milk, and consuming dairy can
        lead to digestive issues, discomfort, and other health problems.
        Fortunately, there are many delicious and healthy plant-based
        alternatives to cow's milk available, including{" "}
        <b>soy, almond, oat, and rice milk</b>. By choosing these alternatives,
        you can ensure that you are getting all the nutrients you need for
        optimal health{" "}
        <b>without the negative side effects of consuming dairy</b>.
      </p>
      <hr />
      <p>
        <span className="is-size-5">
          For more reading about this topic, you can refer to these sources:
        </span>
        <p className="mt2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://switch4good.org/scientific-report/"
          >
            "A Scientific Report on Cow’s Milk, Health and Athletic Performance"
          </a>
          - independent and peer-reviewed studies, as well as essays from
          leading clinicians and nutritionists. This review outlines the
          negative effects of dairy on health and athletic performance.
        </p>
        <p className="mt2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.vrg.org/nutrition/calcium.php"
          >
            "Calcium: Plant-Based Sources" - The Vegetarian Resource Group
          </a>{" "}
          - This resource provides a comprehensive list of plant-based sources
          of calcium, including their calcium content and serving size.
        </p>
        <p className="mt2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.vegansociety.com/resources/nutrition-and-health/nutrients/calcium"
          >
            "Calcium in the Vegan Diet" - The Vegan Society
          </a>{" "}
          - This article discusses the importance of calcium in a vegan diet,
          and provides information on plant-based sources of calcium and calcium
          supplements for those who may not be meeting their daily requirements
          through food alone.
        </p>
        <p className="mt2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=0O-ehIkwGME"
          >
            "Dairy: 6 Reasons You Should Avoid It at All Costs" - Dr. Mark Hyman
            (video)
          </a>{" "}
          - This video details the negative health effects of dairy, including
          its potential contribution to inflammation, acne, and digestive
          problems.
        </p>
        <p className="mt2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.pcrm.org/good-nutrition/nutrition-information/health-concerns-about-dairy"
          >
            "Dairy and Cancer" - Physicians Committee for Responsible Medicine:
          </a>{" "}
          - his article summarizes research linking dairy consumption to
          increased risk of breast, ovarian, and prostate cancers.
        </p>
      </p>
    </AboutWithImage>
  );
};

export default Calcium;
