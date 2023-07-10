import * as React from "react"

type Props = {
    text: string;
    path: string;
}

const MenuItemLink = ({text, path}: Props) => {
    return <a href={path}><p className="text text-green-500 text-[36px] md:text-5xl xl:text-6xl  text-left self-start">{text + " >>>"}</p></a>
}

export default MenuItemLink