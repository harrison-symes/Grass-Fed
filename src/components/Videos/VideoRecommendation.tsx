import YouTube from "react-youtube";
import YoutubeIcon from "../Icons/Youtube";
import InstagramIcon from "../Icons/Instagram";
import useWindowWidth from "../hooks/useWindowWidth";
import { useEffect, useRef, useState } from "react";

import cn from "classnames";
import LinkIcon from "../Icons/Link";
import TwitterIcon from "../Icons/Twitter";

interface IVideoRecommendationProps {
  name: string;
  subtitle?: string;
  imageUrl: string;
  text: string;
  videoId: string;
  videoId2?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  websiteUrl?: string;
  twitterUrl?: string;
  isReverse?: boolean;
}

const VideoRecommendation = (props: IVideoRecommendationProps) => {
  const windowWidth = useWindowWidth();
  const [containerWidth, setContainerWidth] = useState(572);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContainerWidth(containerRef.current?.offsetWidth ?? 572);
  }, [containerRef, windowWidth]);

  const isMobile = windowWidth <= 768;

  const width = isMobile ? windowWidth - 48 : containerWidth / 2;
  const height = (width * 9) / 16;

  return (
    <div
      className={cn("video-recommendation", {
        "video-recommendation--reverse": props.isReverse,
      })}
      ref={containerRef}
    >
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
          {props.youtubeUrl && (
            <a
              href={props.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="card-footer-item flex items-center is-size-1-mobile"
            >
              <YoutubeIcon />
              <span className="dn db-ns">Youtube</span>
            </a>
          )}
          {props.instagramUrl && (
            <a
              href={props.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="card-footer-item flex items-center is-size-1-mobile"
            >
              <InstagramIcon />
              <span className="dn db-ns">Instagram</span>
            </a>
          )}
          {props.twitterUrl && (
            <a
              href={props.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="card-footer-item flex items-center is-size-1-mobile"
            >
              <TwitterIcon />
              <span className="dn db-ns">Twitter</span>
            </a>
          )}
          {props.websiteUrl && (
            <a
              href={props.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="card-footer-item flex items-center is-size-1-mobile"
            >
              <LinkIcon />
              <span className="dn db-ns">Website</span>
            </a>
          )}
        </div>
      </div>
      <div
        style={{ width, height: height * 2 }}
        className="video-recommendation__video"
      >
        <div
          className="video-recommendation__video-box"
          style={{ width, height }}
        >
          <YouTube
            videoId={props.videoId}
            opts={{
              width,
              height,
            }}
          />
        </div>
        {props.videoId2 && (
          <div
            className="video-recommendation__video-box mt1"
            style={{ width, height }}
          >
            <YouTube
              videoId={props.videoId2}
              opts={{
                width,
                height,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoRecommendation;
