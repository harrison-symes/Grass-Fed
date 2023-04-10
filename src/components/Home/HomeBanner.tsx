import { useNavigate } from "react-router";
import cn from "classnames";

interface IHomeBannerProps {
  href: string;
  text: string;
  className?: string;
  icon?: JSX.Element;
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
      <div className="hero-body">
        <div className="flex justify-center">{props.icon}</div>
        <p className="title text-center">{props.text}</p>
      </div>
    </div>
  );
};

export default HomeBanner;
