import VideoRecommendation from "./VideoRecommendation";
import "./videos.scss";

const VideoRecommendations = () => {
  return (
    <div>
      <VideoRecommendation
        name="Joey Carbstrong"
        imageUrl="https://yt3.googleusercontent.com/ytc/AL5GRJWvLcdzci1gKHdJ__FV7x2LF3xEQBdX7mkWODsd9Q=s900-c-k-c0x00ffffff-no-rj"
        text="Animal Rights Activist. Joey creates videos ranging from vegan debates, farm/slaughterhouse coverage and media responses."
        videoId="Nfy_xQ75U0E"
        youtubeUrl="https://www.youtube.com/c/JoeyCarbstrong/videos"
        instagramUrl="https://www.instagram.com/joey_carbstrong"
      />
      <hr />
      <VideoRecommendation
        name="Earthling Ed"
        imageUrl="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8xdaOYuDy6RlyUL6-vxqIzeNuDuEeVCQej2ly0hkKlctwd6km"
        text="Animal Rights Activist."
        videoId="Z3u7hXpOm58"
        youtubeUrl="https://www.youtube.com/@ed.winters/videos"
        instagramUrl="https://www.instagram.com/earthlinged/?hl=en"
      />
    </div>
  );
};

export default VideoRecommendations;
