import YouTube from "react-youtube";
import useWindowWidth from "../hooks/useWindowWidth";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import LinkIcon from "../Icons/Link";
import YoutubeIcon from "../Icons/Youtube";
import NetflixIcon from "../Icons/Netflix";

interface IDocumentaryProps {
  title: string;
  text: string | JSX.Element;
  year: string;
  youtubeId?: string;
  videoUrl?: string;
  watchService?: "Youtube" | "Netflix" | string;
}

const Documentary = (props: IDocumentaryProps) => {
  const windowWidth = useWindowWidth();
  const [containerWidth, setContainerWidth] = useState(572);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContainerWidth(containerRef.current?.offsetWidth ?? 572);
  }, [containerRef, windowWidth]);

  const isMobile = windowWidth <= 768;

  const width = isMobile ? windowWidth - 48 : containerWidth / 2;
  const height = (width * 9) / 16;

  let WatchIcon = LinkIcon;
  switch (props.watchService) {
    case "Youtube":
      WatchIcon = YoutubeIcon;
      break;
    case "Netflix":
      WatchIcon = NetflixIcon;
      break;
    default:
      break;
  }

  return (
    <div className={cn("documentary__container mt4")} ref={containerRef}>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title flex justify-between items-center">
            <span>
              {props.title} ({props.year})
            </span>
          </p>
        </div>
        <div className="card-content">{props.text}</div>
        <div className="card-footer">
          {props.videoUrl && (
            <div className="card-footer-item">
              <a className="flex items-center" href={props.videoUrl}>
                Watch on <WatchIcon containerProps={{ className: "ml1" }} />
                {props.watchService}
              </a>
            </div>
          )}
        </div>
      </div>
      {props.youtubeId && (
        <div className="documentary__video-box" style={{ width, height }}>
          <YouTube
            videoId={props.youtubeId}
            opts={{
              width,
              height,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Documentary;
