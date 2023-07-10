
import * as React from "react"
import MenuItem from "./menu_item";
import MenuItemLink from "./menu_item_link";

type Props = {
    setScreen: (key: string) => void;
}

const Menu = ({setScreen}: Props) => {
    return (
        <div className="self-start">
            <MenuItem onClick={() => setScreen('about')} text={"ABOUT"}/>
            <MenuItem onClick={() => setScreen('experience')} text={"EXPERIENCE"}/>
            <MenuItem onClick={() => setScreen('projects')} text={"PROJECTS"}/>
            <MenuItem onClick={() => setScreen('contact')} text={"CONTACT"}/>
            <MenuItemLink path="Resume.pdf" text={"RESUME"}/>
        </div>
    )
}

export default Menu;