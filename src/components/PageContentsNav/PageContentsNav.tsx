interface IPageContentsNavProps {
  items: Record<string, string>;
}

const PageContentsNav = (props: IPageContentsNavProps) => {
  const onClick = (id: string) => {
    const element = document.getElementById(id);

    if (element != null) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 68;

      window.scrollTo({
        top: offsetPosition,
        behavior: "auto",
      });
    }
  };

  return (
    <div className="mt4">
      <h2 className="is-size-5 fw5">Page contents:</h2>
      <ul className="ml4 mt2">
        {Object.keys(props.items).map((text) => (
          <li className="">
            <a onClick={() => onClick(props.items[text])}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageContentsNav;
