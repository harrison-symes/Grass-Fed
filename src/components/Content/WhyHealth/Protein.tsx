import AboutWithImage from "../../About/AboutWithImage";

const Protein = () => {
  return (
    <AboutWithImage
      id="vegan-health-protein"
      messageClassName="is-black"
      title="Protein: Everything you need to know"
      imageUrl="/images/protein.png"
    >
      <h2 className="is-size-4 fw5">What is protein?</h2>
      <p>
        Protein is a macronutrient that is essential for the proper functioning
        and maintenance of the human body. It is composed of long chains of
        amino acids, which are the building blocks of all proteins. There are 20
        different amino acids, and nine of these are considered "essential,"
        meaning that the body cannot produce them on its own and must obtain
        them through the diet.
      </p>
      <hr />
      <h2 className="is-size-4 fw5">Why do we need protein?</h2>
      <p>
        Protein plays a crucial role in various bodily functions, including:
      </p>
      <ul className="mt2 ml3">
        <li>
          Growth and repair: Protein is necessary for the growth and repair of
          tissues, such as muscles, bones, and skin.
        </li>
        <li>
          Enzyme production: Proteins are required for the production of enzymes
          that facilitate chemical reactions in the body.
        </li>
        <li>
          Hormone production: Some hormones, like insulin, are proteins that
          help regulate various physiological processes.
        </li>
        <li>
          Immune function: Proteins are essential components of antibodies,
          which help the immune system to fight infections.
        </li>
        <li>
          Energy source: When other energy sources (carbohydrates and fats) are
          insufficient, proteins can be used to provide energy for the body.
        </li>
      </ul>
      <hr />
      <h2 className="is-size-4 fw5">Where do vegans get their protein?</h2>
      <p>
        Vegans can obtain protein from a variety of plant-based sources,
        including:
      </p>
      <ul className="mt2 ml3">
        <li>
          Legumes: Beans, lentils, chickpeas, and peas are rich sources of
          plant-based protein.
        </li>
        <li>
          Grains: Whole grains, such as quinoa, barley, brown rice, and oats,
          provide protein and other essential nutrients.
        </li>
        <li>
          Nuts and seeds: Almonds, peanuts, sunflower seeds, chia seeds, and
          hemp seeds are high in protein and healthy fats.
        </li>
        <li>
          Soy products: Tofu, tempeh, and edamame are protein-rich soy-based
          foods.
        </li>
        <li>
          Meat alternatives: Plant-based meat alternatives, such as seitan,
          textured vegetable protein (TVP), and veggie burgers, can provide
          substantial amounts of protein.
        </li>
      </ul>
      <p className="mt2">
        By consuming a varied and balanced diet, vegans can meet their protein
        needs and obtain all essential amino acids.
      </p>
      <hr />
      <h2 className="is-size-4 fw5">Health concerns of animal protein:</h2>
      <p>
        There are some health concerns associated with consuming large amounts
        of animal protein, particularly from processed and red meat sources:
      </p>
      <ul className="mt2 ml3">
        <li>
          Cardiovascular disease: High intake of saturated fat and cholesterol,
          often found in animal protein sources, can contribute to an increased
          risk of cardiovascular disease.
        </li>
        <li>
          Cancer risk: Processed meats and excessive red meat consumption have
          been linked to an increased risk of certain types of cancer, such as
          colorectal cancer.
        </li>
        <li>
          Kidney function: High protein intake, especially from animal sources,
          may put strain on the kidneys and potentially increase the risk of
          kidney disease.
        </li>
        <li>
          Environmental impact: The production of animal protein often requires
          more resources and has a higher environmental impact compared to
          plant-based protein sources.
        </li>
        <li>
          There is a hypothesis that consuming large amounts of animal protein
          can lead to increased acidity in the body, which in turn could cause
          the body to draw phosphate from bones to neutralize the acid. This
          process could potentially contribute to bone loss over time. However,
          scientific evidence on this topic is not conclusive, and more research
          is needed to determine the exact relationship between animal protein
          consumption, acid-base balance, and bone health
        </li>
      </ul>
      <p className="mt2">
        It is important to note that not all animal proteins carry the same
        risks, and moderate consumption of lean meats, poultry, and fish can be
        part of a healthy and balanced diet. However, incorporating more
        plant-based proteins can offer health benefits and help address some of
        the concerns associated with animal protein consumption.
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
            href="https://www.andeal.org/vault/2440/web/JADA_VEG.pdf"
          >
            "Protein and vegetarian diets" from the American Dietetic
            Association
          </a>
          - This article discusses the protein needs of vegetarians, including
          vegans, and provides information on plant-based sources of protein.
        </p>
        <p className="mt2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ajcn.nutrition.org/article/S0002-9165(23)19593-1/fulltext"
          >
            "Plant proteins in relation to human protein and amino acid
            nutrition" from the American Society for Nutrition
          </a>{" "}
          - This review article discusses the quality and bioavailability of
          protein in plant-based foods, and provides guidance on achieving
          adequate protein intake from plant sources.
        </p>
        <p className="mt2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6893534/"
          >
            "Dietary protein and amino acids in vegetarian diets–a review" from
            the Journal of Plant-Based Medicine
          </a>{" "}
          - This review article discusses the protein and amino acid composition
          of plant-based foods, and provides guidance on achieving adequate
          protein intake from vegan sources.
        </p>
      </p>
    </AboutWithImage>
  );
};

export default Protein;
