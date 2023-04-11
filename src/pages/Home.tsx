import HomeBanner from "../components/Home/HomeBanner";
import CarrotIcon from "../components/Icons/Carrot";
import CookIcon from "../components/Icons/Cook";
import FilmIcon from "../components/Icons/Film";
import VideoIcon from "../components/Icons/VideoIcon";

const Home = () => {
  return (
    <div>
      <HomeBanner
        href="/why-vegan"
        text="Learn about the benefits of going Vegan"
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
        href="/documentaries"
        text="Uncover the truth through these documentaries"
        className="is-danger"
        icon={<FilmIcon iconProps={{ size: 70 }} />}
      />
    </div>
  );
};

export default Home;
