import cn from "classnames";

interface IAboutWithImageProps {
  title: string;
  id: string;
  imageUrl: string;
  children: React.ReactNode;
  messageClassName?: string;
  isReverse?: boolean;
}

const AboutWithImage: React.FC<IAboutWithImageProps> = (
  props: IAboutWithImageProps
) => {
  return (
    <div className="mt4" id={props.id}>
      <div
        className={cn("about about--withImage", {
          "about--withImage--reverse": props.isReverse,
        })}
      >
        <div className="about__message">
          <h1 className="is-size-4">{props.title}</h1>
          <article className={cn("message mt3", props.messageClassName)}>
            <div className="message-body">{props.children}</div>
          </article>
        </div>
        <div className="about__image">
          <img src={props.imageUrl} alt={props.title} />
        </div>
      </div>
    </div>
  );
};

export default AboutWithImage;
