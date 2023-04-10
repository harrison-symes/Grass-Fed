import cn from "classnames";

interface IIconContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export interface IIconProps {
  className?: string;
  containerProps?: IIconContainerProps;
}

const IconContainer = (props: IIconContainerProps) => {
  return (
    <div className={cn("icon flex items-center", props.className)}>
      {props.children}
    </div>
  );
};

export default IconContainer;
