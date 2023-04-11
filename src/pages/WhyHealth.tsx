import Protein from "../components/Content/WhyHealth/Protein";
import PageContentsNav from "../components/PageContentsNav/PageContentsNav";

const WhyHealth = () => {
  return (
    <div className="container">
      <h1 className="is-size-3">
        Healthy Vegan Eating: Separating Fact from Fiction
      </h1>
      <PageContentsNav
        items={{
          "Introduction to Vegan Health": "page-intro",
          "Where do you get your Protein": "vegan-health-protein",
        }}
      />
      <hr />
      <h1 className="is-size-4">About Vegan Health</h1>
      <article className="message mt3" id="page-intro">
        <div className="message-body">
          <p>
            A balanced vegan diet <b>absolutely can</b> be healthy and suitable
            for people of all ages and life stages, including infants, children,
            pregnant and breastfeeding women, and older adults. Adequate intake
            of nutrients such as protein, iron, calcium, vitamin B12, and
            omega-3 fatty acids is essential for optimal health on{" "}
            <b>any diet</b>, and fortunately there are many plant-based sources
            of these nutrients available.
          </p>
          <p className="mt3">
            On this page, you'll learn the truth about{" "}
            <b>common misconceptions and lies</b> surrounding vegan diets and
            health. We'll provide you with accurate information about{" "}
            <b>how to meet your nutrient needs</b> on a plant-based diet and
            highlight the many plant-based sources of essential nutrients such
            as protein, iron, calcium, vitamin B12, and omega-3 fatty acids.
            We'll also discuss the{" "}
            <b>
              negative health effects associated with consuming animal products
            </b>
            , such as an increased risk of heart disease, type 2 diabetes, and
            certain cancers. By the end of this page, you'll have a better
            understanding of how a vegan diet can benefit your health and
            wellbeing, as well as the health of the planet.
          </p>
          <p className="mt3">
            We encourage you to approach the information on this page{" "}
            <b>with an open mind</b> considering how advertising, lobbying,
            social/cultural norms and misinformation may have influenced your
            beliefs about vegan diets and health in the past. It's important to
            be critical of the sources of information you receive and to make
            informed decisions based on accurate and reliable information. By
            exploring the facts about plant-based eating and its many health
            benefits, you can make informed decisions that align with your
            values and contribute to a healthier, more sustainable and more
            compassionate world.
          </p>
        </div>
      </article>
      <hr />
      <Protein />
      <hr />
    </div>
  );
};

export default WhyHealth;
