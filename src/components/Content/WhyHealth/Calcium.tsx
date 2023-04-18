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
      <h2 className="is-size-4 fw5">What is calcium?</h2>
      <p>
        Calcium is an essential mineral that plays a critical role in numerous
        physiological processes in the human body. It is the most abundant
        mineral in the body and is primarily found in bones and teeth, where it
        provides structural support.
      </p>
      <hr />
      <h2 className="is-size-4 fw5">Why do we need calcium?</h2>
      <p>Calcium is necessary for various functions, including:</p>
      <ul className="mt2 ml3">
        <li>
          Bone health: Calcium is a vital component of bones and teeth,
          providing strength and structure. The body continually remodels bone
          tissue, breaking it down and rebuilding it, which requires a
          consistent intake of calcium.
        </li>
        <li>
          Muscle function: Calcium is involved in muscle contractions, including
          those of the heart.
        </li>
        <li>
          Nerve transmission: Calcium plays a role in transmitting nerve
          impulses and regulating neurotransmitter release.
        </li>
        <li>
          Blood clotting: Calcium is essential for the blood clotting process,
          helping to prevent excessive bleeding after an injury.
        </li>
      </ul>
      <hr />
      <h2 className="is-size-4 fw5">Where do vegans get their calcium?</h2>
      <p>
        Vegans can obtain calcium from a variety of plant-based sources,
        including:
      </p>
      <ul className="mt2 ml3">
        <li>
          Leafy greens: Kale, collard greens, bok choy, and broccoli are rich
          sources of calcium.
        </li>
        <li>
          Nuts and seeds: Almonds, sesame seeds, and chia seeds are high in
          calcium.
        </li>
        <li>
          Fortified plant-based milks: Many plant-based milks, such as almond,
          soy, or oat milk, are fortified with calcium.
        </li>
        <li>
          Calcium-set tofu: Tofu that is made with calcium sulfate as a
          coagulant is a good source of calcium.
        </li>
        <li>
          Legumes: Some legumes, such as white beans and chickpeas, contain
          calcium.
        </li>
        <li>
          Fortified cereals and bread: Some breakfast cereals and bread products
          are fortified with calcium.
        </li>
      </ul>
      <p className="mt2">
        By consuming a varied and balanced diet, vegans can meet their calcium
        needs without relying on dairy products.
      </p>
      <hr />
      <h2 className="is-size-4 fw5">Lies the dairy industry has told you:</h2>
      <p>
        The dairy industry has promoted milk and dairy products as essential for
        strong bones and overall health. Some common misconceptions or
        exaggerated claims include:
      </p>
      <ul className="mt2 ml3">
        <li>
          Dairy is the only source of calcium: While dairy products do contain
          significant amounts of calcium, they are not the only source. As
          mentioned above, many plant-based foods also provide calcium, and
          vegans can meet their calcium needs without consuming dairy.
        </li>
        <li>
          More dairy equals stronger bones: Although calcium is essential for
          bone health, consuming excessive amounts of dairy does not guarantee
          stronger bones. Factors such as physical activity, vitamin D intake,
          and genetics also play crucial roles in bone health. Some studies have
          suggested that high dairy consumption does not necessarily lead to a
          lower risk of osteoporosis or fractures.
        </li>
        <li>
          Dairy is essential for everyone: Dairy products can be a part of a
          healthy and balanced diet for many people, but they are not essential.
          Individuals with lactose intolerance, milk allergies, or those
          following a vegan diet can still meet their nutritional needs without
          consuming dairy products.
        </li>
      </ul>
      <p className="mt2">
        It is essential to critically evaluate the claims made by any industry,
        including the dairy industry, and to make informed decisions about your
        diet based on scientific evidence and personal preferences.
      </p>
      <hr />
      <h2 className="is-size-4 fw5">Sources</h2>
      <p>
        <p>
          For further reading about this topic, you can refer to these sources:
        </p>
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
          - This article summarizes research linking dairy consumption to
          increased risk of breast, ovarian, and prostate cancers.
        </p>
      </p>
    </AboutWithImage>
  );
};

export default Calcium;
