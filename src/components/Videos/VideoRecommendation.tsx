import YouTube from "react-youtube";
import YoutubeIcon from "../Icons/Youtube";
import InstagramIcon from "../Icons/Instagram";

interface IVideoRecommendationProps {
  name: string;
  subtitle?: string;
  imageUrl: string;
  text: string;
  videoId: string;
  youtubeUrl: string;
  instagramUrl: string;
}

const VideoRecommendation = (props: IVideoRecommendationProps) => {
  const isMobile = window.innerWidth <= 768;
  const width = isMobile ? "100%" : "50%";
  return (
    <div className="video-recommendation">
      <div className="video-recommendation__card card">
        <div className="card-header">
          <p className="card-header-title">{props.name}</p>
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.imageUrl} alt={props.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">{props.text}</div>
        </div>
        <div className="card-footer">
          <a
            href={props.youtubeUrl}
            className="card-footer-item flex items-center"
          >
            <YoutubeIcon />
            Youtube
          </a>
          <a
            href={props.instagramUrl}
            className="card-footer-item flex items-center"
          >
            <InstagramIcon />
            Instagram
          </a>
        </div>
      </div>
      <div style={{ width }} className="video-recommendation__video">
        <YouTube videoId={props.videoId} />
      </div>
    </div>
  );
};

export default VideoRecommendation;
