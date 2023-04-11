import YouTube from "react-youtube";
import useWindowWidth from "../hooks/useWindowWidth";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";

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

  return (
    <div className={cn("documentary__container mt4")} ref={containerRef}>
      <div className="card">
        <div className="card-header">
          <p className="card-header-title flex justify-between items-center">
            <span>
              {props.title} ({props.year})
            </span>
            {props.videoUrl && (
              <a href={props.videoUrl}>Watch on {props.watchService}</a>
            )}
          </p>
        </div>
        <div className="card-content">{props.text}</div>
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
