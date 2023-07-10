import * as React from "react"

type Props = {
    text: string;
    onClick: () => void;
}

const MenuItem = ({text, onClick}: Props) => {
    return <a onClick={(e) => onClick()}><p className="text text-green-500 text-[36px] md:text-5xl xl:text-6xl md:mb-3 xl:mb-6 text-left self-start">{text + " >>>"}</p></a>
}

export default MenuItem