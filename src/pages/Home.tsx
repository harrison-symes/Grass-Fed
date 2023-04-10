import HomeBanner from "../components/Home/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner href="/go-vegan" text="Why you should go vegan" />
      <HomeBanner
        href="/recipes"
        text="Check out some Vegan recipes"
        className="is-link"
      />
      <HomeBanner
        href="/videos"
        text="Discover some Vegan content creators"
        className="is-info"
      />
      <HomeBanner
        href="/podcasts"
        text="Listen to some podcasts about veganism"
        className="is-danger"
      />
    </div>
  );
};

export default Home;
