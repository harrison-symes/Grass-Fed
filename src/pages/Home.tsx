import HomeBanner from "../components/Home/HomeBanner";
import CarrotIcon from "../components/Icons/Carrot";
import CookIcon from "../components/Icons/Cook";
import PodcastIcon from "../components/Icons/Podcast";
import VideoIcon from "../components/Icons/VideoIcon";

const Home = () => {
  return (
    <div>
      <HomeBanner
        href="/go-vegan"
        text="Why you should go vegan"
        icon={<CarrotIcon iconProps={{ size: 70 }} />}
      />
      <HomeBanner
        href="/recipes"
        text="Check out some Vegan recipes"
        className="is-link"
        icon={<CookIcon iconProps={{ size: 70 }} />}
      />
      <HomeBanner
        href="/videos"
        text="Discover some Vegan content creators"
        className="is-info"
        icon={<VideoIcon iconProps={{ size: 70 }} />}
      />
      <HomeBanner
        href="/podcasts"
        text="Listen to some podcasts about veganism"
        className="is-danger"
        icon={<PodcastIcon iconProps={{ size: 70 }} />}
      />
    </div>
  );
};

export default Home;
