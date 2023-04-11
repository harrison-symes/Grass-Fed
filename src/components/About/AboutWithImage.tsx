import cn from "classnames";

interface IAboutWithImageProps {
  title: string;
  id: string;
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
}

const AboutWithImage: React.FC<IAboutWithImageProps> = (
  props: IAboutWithImageProps
) => {
  return (
    <div className="mt4" id={props.id}>
      <h1 className="is-size-4">{props.title}</h1>
      <div className="about about--withImage">
        <article className={cn("message mt3", props.className)}>
          <div className="message-body">{props.children}</div>
        </article>
        <div className="about__image">
          <img src={props.imageUrl} alt={props.title} />
        </div>
      </div>
    </div>
  );
};

export default AboutWithImage;
