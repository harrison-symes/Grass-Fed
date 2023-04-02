import { useState } from "react";
import NavItem from "./NavItem"
import cn from "classnames"
import Burger from "./Burger";
import CookIcon from "../Icons/Cook";
import CarrotIcon from "../Icons/Carrot";
import GrassIcon from "../Icons/Grass";
import VideoIcon from "../Icons/VideoIcon";
import PodcastIcon from "../Icons/Podcast";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Burger 
                        isActive={isActive}
                        onClick={() => setIsActive(state => !state)}
                    />
                </div>
                <div className={cn("navbar-menu", { "is-active": isActive })}>
                    <div className="navbar-start">
                        <NavItem 
                            text="Grass-Fed"
                            href="/"
                            icon={GrassIcon}
                        />
                        <NavItem 
                            text="Recipes"
                            href="/recipes"
                            icon={CookIcon}
                        />
                        <NavItem 
                            text="Go Vegan"
                            href="/go-vegan"
                            icon={CarrotIcon}
                        />
                        <NavItem 
                            text="Podcasts"
                            href="/podcasts"
                            icon={PodcastIcon}
                        />
                        <NavItem 
                            text="Videos"
                            href="/videos"
                            icon={VideoIcon}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav