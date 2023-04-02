const NavDropdown = () => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
                More
            </a>

            <div className="navbar-dropdown">
                <a className="navbar-item">
                About
                </a>
                <a className="navbar-item">
                Jobs
                </a>
                <a className="navbar-item">
                Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                Report an issue
                </a>
            </div>
        </div>
    )
}

export default NavDropdown