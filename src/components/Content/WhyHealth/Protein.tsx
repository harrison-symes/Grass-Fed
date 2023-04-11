import AboutWithImage from "../../About/AboutWithImage";

const Protein = () => {
  return (
    <AboutWithImage
      id="vegan-health-protein"
      className="is-black"
      title="Where do you get your Protein?"
      imageUrl="https://www.eatingwell.com/thmb/Y5jHU7-ClCAA7p2k7h7hcJFT12Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegan_protein-bd263606aba14f228b72f1409bdc88e1.jpeg"
    >
      <p>
        It's a common misconception that a vegan diet lacks sufficient protein.
        In fact, there are plenty of plant-based protein sources that can easily
        meet the recommended daily intake for protein. It's important to note
        that all protein originates from plants, as animals get their protein
        from the plants they eat. By consuming plant-based sources of protein
        directly, vegans are actually cutting out the middleman and obtaining
        their protein in a more efficient and environmentally friendly way.
      </p>
      <p className="mt3">
        Some excellent vegan protein sources include legumes such as lentils,
        chickpeas, and beans, which are high in protein and fiber. Quinoa, a
        grain-like seed, is also a great source of protein, as well as essential
        amino acids. Other grains such as brown rice and oats also contain
        protein, while nuts and seeds like almonds, chia seeds, and pumpkin
        seeds are packed with protein, healthy fats, and other essential
        nutrients. Additionally, tofu, tempeh, and seitan are all excellent
        sources of protein for vegans.
      </p>
      <p className="mt3">
        Incorporating a variety of these protein sources into meals throughout
        the day can help ensure that vegans are getting the protein they need to
        support their overall health and wellbeing. And by choosing plant-based
        sources of protein, vegans can enjoy all the benefits of protein without
        contributing to the negative environmental and ethical impacts
        associated with animal agriculture.
      </p>
      <hr className="hr" />
      <p>
        It's worth noting that while there are many healthy and nutrient-dense
        vegan protein sources, not all vegan products are created equal. In
        recent years, there has been a surge in the availability of plant-based
        "fake meat" products in New Zealand and other countries. While these
        products may be convenient and offer a meat-like texture and flavor,
        they can often be highly processed and contain added salt, fat, and
        other additives. While some of these products may not be the healthiest
        food options, they generally have lower amounts of saturated fat and
        cholesterol compared to animal products, which can contribute to the
        development of chronic health conditions like heart disease, stroke, and
        diabetes.
      </p>
      <p className="mt3">
        It's important to approach veganism with a focus on whole, unprocessed
        foods to ensure that you're getting the most benefit from your diet.
        While plant-based meat alternatives can be a fun and tasty addition to
        your meals on occasion, it's best to view them as an occasional treat
        rather than a staple of your diet. By prioritizing nutrient-dense whole
        foods like fruits, vegetables, legumes, and whole grains, you can enjoy
        a healthy and well-rounded vegan diet that supports your long-term
        health and wellbeing.
      </p>
      <hr className="hr" />
      <p>
        For more reading about this topic, you can refer to these sources:
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
