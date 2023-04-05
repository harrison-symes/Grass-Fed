import cn from "classnames"

interface IBurgerProps {
    isActive: boolean;
    onClick: () => void;
}

const Burger = (props: IBurgerProps) => {
    return (
        <a
            role="button"
            className={cn("navbar-burger", { "is-active": props.isActive })}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={props.onClick}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    )
}

export default Burger