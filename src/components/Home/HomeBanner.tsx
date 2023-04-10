import { useNavigate } from "react-router";
import RightChevron from "../Icons/RightChevron";

import cn from "classnames";

interface IHomeBannerProps {
  href: string;
  text: string;
  className?: string;
}

const HomeBanner = (props: IHomeBannerProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(props.href);
  };

  return (
    <div
      className={cn("home-hero hero is-primary is-medium mb3", props.className)}
      onClick={onClick}
    >
      <div className="hero-body flex items-center justify-center">
        <p className="title text-center flex items-center">
          {props.text} <RightChevron containerProps={{ className: "ml2" }} />
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
