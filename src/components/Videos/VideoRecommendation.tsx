import YouTube from "react-youtube";
import YoutubeIcon from "../Icons/Youtube";
import InstagramIcon from "../Icons/Instagram";
import useWindowWidth from "../hooks/useWindowWidth";
import { useEffect, useRef, useState } from "react";

import cn from "classnames";
import LinkIcon from "../Icons/Link";

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
          <figure className="image">
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
              className="card-footer-item flex items-center"
            >
              <YoutubeIcon />
              Youtube
            </a>
          )}
          {props.instagramUrl && (
            <a
              href={props.instagramUrl}
              className="card-footer-item flex items-center"
            >
              <InstagramIcon />
              Instagram
            </a>
          )}
          {props.websiteUrl && (
            <a
              href={props.websiteUrl}
              className="card-footer-item flex items-center"
            >
              <LinkIcon />
              Website
            </a>
          )}
        </div>
      </div>
      <div style={{ width }} className="video-recommendation__video">
        <YouTube
          videoId={props.videoId}
          opts={{
            width,
            height,
          }}
        />
        {props.videoId2 && (
          <YouTube
            videoId={props.videoId2}
            opts={{
              width,
              height,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default VideoRecommendation;
