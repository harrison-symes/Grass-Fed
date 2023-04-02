import { Link } from "react-router-dom";

interface INavItemProps {
    text: string;
    href: string;
    icon?: React.FC;
}

const NavItem = (props: INavItemProps) => {
    return (
        <Link to={props.href} className="navbar-item flex align-center">
            {props.icon && <props.icon />}{props.text} 
        </Link>
    )
}

export default NavItem