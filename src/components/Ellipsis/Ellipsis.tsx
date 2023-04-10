import { useState } from "react";

interface IEllipsisProps {
  text: string;
  max: number;
}

const Ellipsis = (props: IEllipsisProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const isTextOver = props.text.length > props.max;

  if (!isTextOver || isOpen) {
    return <>{props.text}</>;
  }

  const splitText = props.text.slice(0, props.max);
  const splitWords = splitText.split(" ");
  const allButOne = splitWords.slice(0, -1).join(" ");

  return (
    <>
      {allButOne}... <a onClick={() => setIsOpen(true)}>Read more</a>
    </>
  );
};

export default Ellipsis;
